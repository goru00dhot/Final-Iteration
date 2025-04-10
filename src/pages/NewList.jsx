import React from 'react';
import ListForm from '../components/ListForm';

const NewList = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Create New List
      </h1>
      <ListForm />
    </div>
  );
};

export default NewList;