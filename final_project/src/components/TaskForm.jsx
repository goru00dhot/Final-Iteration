import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Plus } from 'lucide-react';

const TaskForm = ({ listId }) => {
  const [formData, setFormData] = useState({
    title: '',
    priority: 'medium',
    dueDate: new Date().toISOString().split('T')[0],
    status: 'todo'
  });

  const { addTask } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim()) {
      addTask(listId, formData);
      setFormData({ 
        title: '', 
        priority: 'medium',
        dueDate: new Date().toISOString().split('T')[0],
        status: 'todo'
      });
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="input-field flex-1"
            placeholder="Enter task"
            required
          />
          <select
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
            className="input-field w-32"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <input
            type="date"
            value={formData.dueDate}
            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
            className="input-field w-40"
          />
          <button type="submit" className="btn-primary">
            <Plus className="h-5 w-5" />
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;