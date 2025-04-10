import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';
import { List, Plus, CheckCircle, Clock } from 'lucide-react';

const Home = () => {
  const { lists } = useTaskContext();

  const completedTasks = lists.reduce((total, list) => {
    return total + list.tasks.filter(task => task.status === 'completed').length;
  }, 0);

  const totalTasks = lists.reduce((total, list) => {
    return total + list.tasks.length;
  }, 0);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#ff4d8d] to-[#ff3377] bg-clip-text text-transparent">
          Welcome to Task Manager
        </h1>
        <p className="text-gray-600 text-lg">
          Organize your tasks, boost your productivity
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="card p-6 flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <CheckCircle className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Completed Tasks</h3>
            <p className="text-3xl font-bold text-blue-600">{completedTasks}</p>
          </div>
        </div>
        <div className="card p-6 flex items-center gap-4">
          <div className="bg-purple-100 p-3 rounded-full">
            <Clock className="h-8 w-8 text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Total Tasks</h3>
            <p className="text-3xl font-bold text-purple-600">{totalTasks}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          My Lists ({lists.length})
        </h2>
        <Link
          to="/new-list"
          className="btn-primary flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>New List</span>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {lists.map(list => (
          <Link
            key={list.id}
            to={`/list/${list.id}`}
            className="card p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-[#ff4d8d] bg-opacity-10 p-3 rounded-full">
                <List className="h-6 w-6 text-[#ff4d8d]" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{list.name}</h2>
                <div className="flex items-center gap-4 mt-2">
                  <p className="text-gray-600">
                    {list.tasks.length} {list.tasks.length === 1 ? 'task' : 'tasks'}
                  </p>
                  <span className="text-gray-300">•</span>
                  <p className="text-green-600">
                    {list.tasks.filter(task => task.status === 'completed').length} completed
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {lists.length === 0 && (
        <div className="card p-12 text-center">
          <div className="bg-[#ff4d8d] bg-opacity-10 p-4 rounded-full inline-block mb-4">
            <List className="h-12 w-12 text-[#ff4d8d]" />
          </div>
          <p className="text-gray-600 text-lg mb-4">No lists yet</p>
          <Link
            to="/new-list"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>Create your first list</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;