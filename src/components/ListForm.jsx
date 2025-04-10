import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';

const ListForm = () => {
  const [name, setName] = useState('');
  const { addList } = useTaskContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      const listId = addList(name.trim());
      setName('');
      navigate(`/list/${listId}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card p-6">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          List Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
          placeholder="Enter list name"
          required
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        Create List
      </button>
    </form>
  );
};

export default ListForm;