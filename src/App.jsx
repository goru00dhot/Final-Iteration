import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import NewList from './pages/NewList';
import TaskListView from './pages/TaskListView';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <TaskProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-list" element={<NewList />} />
            <Route path="/list/:listId" element={<TaskListView />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </TaskProvider>
  );
}

export default App;