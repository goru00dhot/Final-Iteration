import React from 'react';
import { Trash2, CheckCircle, Circle, Edit2, AlertTriangle, Clock, PlayCircle, PauseCircle } from 'lucide-react';
import { useTaskContext } from '../context/TaskContext';

const TaskList = ({ tasks, listId }) => {
  const { toggleTaskComplete, deleteTask, updateTaskStatus } = useTaskContext();

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-500';
      case 'medium':
        return 'text-yellow-500';
      case 'low':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'in-progress':
        return 'bg-blue-100 text-blue-700';
      case 'completed':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleStatusChange = (taskId, currentStatus) => {
    let newStatus;
    switch (currentStatus) {
      case 'todo':
        newStatus = 'in-progress';
        break;
      case 'in-progress':
        newStatus = 'completed';
        break;
      case 'completed':
        newStatus = 'todo';
        break;
      default:
        newStatus = 'todo';
    }
    updateTaskStatus(listId, taskId, newStatus);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'in-progress':
        return <PlayCircle className="h-6 w-6" />;
      case 'completed':
        return <CheckCircle className="h-6 w-6" />;
      default:
        return <Circle className="h-6 w-6" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`task-item ${task.status === 'completed' ? 'completed' : ''}`}
        >
          <button
            onClick={() => handleStatusChange(task.id, task.status)}
            className="text-gray-400 hover:text-[#ff4d8d]"
          >
            {getStatusIcon(task.status)}
          </button>
          <div className="flex-1">
            <span className={`text-lg ${task.status === 'completed' ? 'line-through text-gray-400' : 'text-gray-800'}`}>
              {task.title}
            </span>
            <div className="flex items-center gap-3 mt-1">
              <span className={`flex items-center gap-1 text-sm ${getPriorityColor(task.priority)}`}>
                <AlertTriangle className="h-4 w-4" />
                {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(task.status)}`}>
                {task.status.replace('-', ' ').toUpperCase()}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                {formatDate(task.dueDate)}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-gray-400 hover:text-[#ff4d8d]">
              <Edit2 className="h-5 w-5" />
            </button>
            <button
              onClick={() => deleteTask(listId, task.id)}
              className="text-gray-400 hover:text-red-500"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}

      {tasks.length === 0 && (
        <div className="p-8 text-center text-gray-500">
          No tasks yet. Add a task to get started!
        </div>
      )}
    </div>
  );
};

export default TaskList;