// src/components/AddTask.js

import React, { useState } from 'react';
import { addTask } from '../api/mockApi';

const AddTask = ({ onTaskAdded }) => {
  const [text, setText] = useState('');

  const handleAddTask = () => {
    if (text.trim() === '') return;
    addTask(text).then((newTask) => {
      onTaskAdded(newTask);
      setText('');
    });
  };

  return (
    <div>
      <h2>Add Task</h2>
      <input
        type="text"
        placeholder="Task name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTask;
