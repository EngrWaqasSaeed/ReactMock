let tasks = [
    { id: 1, text: 'Buy Gold' },
    { id: 2, text: 'Buy Silver' },
    { id: 3, text: 'Buy White Gold' },
    { id: 4, text: 'Buy Diamond' },
  ];
  
  export const getTasks = () => {
    return Promise.resolve(tasks);
  };
  
  export const addTask = (text) => {
    const newTask = { id: tasks.length + 1, text };
    tasks = [...tasks, newTask];
    return Promise.resolve(newTask);
  };
  
  export const removeTask = (taskId) => {
    tasks = tasks.filter((task) => task.id !== taskId);
    return Promise.resolve(taskId);
  };
  