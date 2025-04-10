import React, { createContext, useContext, useState, useEffect } from 'react';

const TaskContext = createContext();

export const useTaskContext = () => {
  return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
  // Initialize lists from localStorage or with a default list
  const [lists, setLists] = useState(() => {
    const savedLists = localStorage.getItem('taskLists');
    return savedLists ? JSON.parse(savedLists) : [{
      id: 'default',
      name: 'My Tasks',
      tasks: []
    }];
  });

  const [showCompleted, setShowCompleted] = useState(true);

  // Save lists to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('taskLists', JSON.stringify(lists));
  }, [lists]);

  // List management functions
  const addList = (name) => {
    const newList = {
      id: crypto.randomUUID(),
      name,
      tasks: []
    };
    setLists(prev => [...prev, newList]);
    return newList.id;
  };

  const deleteList = (listId) => {
    setLists(prev => prev.filter(list => list.id !== listId));
  };

  // Task management functions
  const addTask = (listId, taskData) => {
    setLists(prev => prev.map(list => {
      if (list.id === listId) {
        const newTask = {
          id: crypto.randomUUID(),
          ...taskData,
          status: 'todo',
          completed: false,
          createdAt: Date.now()
        };
        return {
          ...list,
          tasks: [...list.tasks, newTask]
        };
      }
      return list;
    }));
  };

  const toggleTaskComplete = (listId, taskId) => {
    setLists(prev => prev.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          tasks: list.tasks.map(task =>
            task.id === taskId ? { 
              ...task, 
              completed: !task.completed,
              status: !task.completed ? 'completed' : 'todo'
            } : task
          )
        };
      }
      return list;
    }));
  };

  const updateTaskStatus = (listId, taskId, status) => {
    setLists(prev => prev.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          tasks: list.tasks.map(task =>
            task.id === taskId ? { 
              ...task, 
              status,
              completed: status === 'completed'
            } : task
          )
        };
      }
      return list;
    }));
  };

  const deleteTask = (listId, taskId) => {
    setLists(prev => prev.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          tasks: list.tasks.filter(task => task.id !== taskId)
        };
      }
      return list;
    }));
  };

  const getList = (listId) => {
    return lists.find(list => list.id === listId);
  };

  const getSortedTasks = (listId) => {
    const list = getList(listId);
    if (!list) return [];
    
    const sortedTasks = [...list.tasks].sort((a, b) => {
      // First sort by status
      const statusOrder = { todo: 0, 'in-progress': 1, completed: 2 };
      if (statusOrder[a.status] !== statusOrder[b.status]) {
        return statusOrder[a.status] - statusOrder[b.status];
      }
      // Then by priority
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