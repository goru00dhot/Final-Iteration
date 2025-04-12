import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot,
  query,
  orderBy
} from 'firebase/firestore';

const TaskContext = createContext();

export const useTaskContext = () => {
  return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
  const [lists, setLists] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'lists'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const listsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setLists(listsData);
    });

    return () => unsubscribe();
  }, []);

  const addList = async (name) => {
    try {
      const docRef = await addDoc(collection(db, 'lists'), {
        name,
        tasks: [],
        createdAt: Date.now()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error adding list:', error);
      return null;
    }
  };

  const deleteList = async (listId) => {
    try {
      await deleteDoc(doc(db, 'lists', listId));
    } catch (error) {
      console.error('Error deleting list:', error);
    }
  };

  const addTask = async (listId, taskData) => {
    try {
      const listRef = doc(db, 'lists', listId);
      const list = lists.find(l => l.id === listId);
      const newTask = {
        id: crypto.randomUUID(),
        ...taskData,
        status: 'todo',
        completed: false,
        createdAt: Date.now()
      };
      
      await updateDoc(listRef, {
        tasks: [...list.tasks, newTask]
      });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const toggleTaskComplete = async (listId, taskId) => {
    try {
      const listRef = doc(db, 'lists', listId);
      const list = lists.find(l => l.id === listId);
      const updatedTasks = list.tasks.map(task =>
        task.id === taskId ? {
          ...task,
          completed: !task.completed,
          status: !task.completed ? 'completed' : 'todo'
        } : task
      );

      await updateDoc(listRef, { tasks: updatedTasks });
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  };

  const updateTaskStatus = async (listId, taskId, status) => {
    try {
      const listRef = doc(db, 'lists', listId);
      const list = lists.find(l => l.id === listId);
      const updatedTasks = list.tasks.map(task =>
        task.id === taskId ? {
          ...task,
          status,
          completed: status === 'completed'
        } : task
      );

      await updateDoc(listRef, { tasks: updatedTasks });
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  const deleteTask = async (listId, taskId) => {
    try {
      const listRef = doc(db, 'lists', listId);
      const list = lists.find(l => l.id === listId);
      const updatedTasks = list.tasks.filter(task => task.id !== taskId);

      await updateDoc(listRef, { tasks: updatedTasks });
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const getList = (listId) => {
    return lists.find(list => list.id === listId);
  };

  const getSortedTasks = (listId) => {
    const list = getList(listId);
    if (!list) return [];
    
    const sortedTasks = [...list.tasks].sort((a, b) => {
      const statusOrder = { todo: 0, 'in-progress': 1, completed: 2 };
      if (statusOrder[a.status] !== statusOrder[b.status]) {
        return statusOrder[a.status] - statusOrder[b.status];
      }
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    return showCompleted ? sortedTasks : sortedTasks.filter(task => !task.completed);
  };

  const value = {
    lists,
    showCompleted,
    setShowCompleted,
    addList,
    deleteList,
    addTask,
    toggleTaskComplete,
    updateTaskStatus,
    deleteTask,
    getList,
    getSortedTasks
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};