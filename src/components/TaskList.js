// src/components/TaskList.js

import React, { useEffect, useState } from 'react';
import { getTasks, removeTask } from '../api/mockApi';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((data) => setTasks(data));
  }, []);

  const handleRemoveTask = (taskId) => {
    removeTask(taskId).then((removedId) => {
      setTasks(tasks.filter((task) => task.id !== removedId));
    });
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
