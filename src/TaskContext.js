import React, { createContext, useState, useEffect, useContext } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    const querySnapshot = await getDocs(collection(db, "taskLists"));
    const fetchedLists = [];
    querySnapshot.forEach((doc) => {
      fetchedLists.push({ ...doc.data(), id: doc.id });
    });
    setLists(fetchedLists);
  };

  const addList = async (name) => {
    const docRef = await addDoc(collection(db, "taskLists"), { name });
    setLists([...lists, { name, id: docRef.id }]);
  };

  const deleteList = async (id) => {
    await deleteDoc(doc(db, "taskLists", id));
    setLists(lists.filter((list) => list.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, lists, addList, deleteList }}>
      {children}
    </TaskContext.Provider>
  );
};
