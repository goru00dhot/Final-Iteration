import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { EyeOff, Eye, Trash2 } from 'lucide-react';

const TaskListView = () => {
  const { listId } = useParams();
  const navigate = useNavigate();
  const {
    getList,
    getSortedTasks,
    showCompleted,
    setShowCompleted,
    deleteList
  } = useTaskContext();

  const list = getList(listId);
  const tasks = getSortedTasks(listId);

  if (!list) {
    navigate('/');
    return null;
  }

  const handleDeleteList = () => {
    if (window.confirm('Are you sure you want to delete this list?')) {
      deleteList(listId);
      navigate('/');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {list.name}
        </h1>
        <button
          onClick={handleDeleteList}
          className="btn-danger flex items-center space-x-2"
        >
          <Trash2 className="h-5 w-5" />
          <span>Delete List</span>
        </button>
      </div>

      <div className="mb-8">
        <TaskForm listId={listId} />
      </div>

      <div className="flex justify-end mb-6">
        <button
          onClick={() => setShowCompleted(!showCompleted)}
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-white hover:shadow-md"
        >
          {showCompleted ? (
            <>
              <EyeOff className="h-5 w-5" />
              <span>Hide Completed</span>
            </>
          ) : (
            <>
              <Eye className="h-5 w-5" />
              <span>Show Completed</span>
            </>
          )}
        </button>
      </div>

      <TaskList
        tasks={tasks}
        listId={listId}
      />
    </div>
  );
};

export default TaskListView;