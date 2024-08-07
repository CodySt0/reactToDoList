import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const taskLimit = 3;

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([{ text: task, completed: false }, ...tasks]);
  };

  const deleteTask = (index) => {
    if (tasks.length > taskLimit) {
      setTasks(tasks.filter((_, i) => i !== index));
    } else {
      alert("You must have more than ${taskLimit} tasks to delete");
    }
  };

  const toggleTaskCompletion = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const updateTask = (index, newText) => {
    setTasks(
      tasks.map((task, i) => (i === index ? { ...task, text: newText } : task))
    );
  };

  return (
    <div className="App">
      <h1> To-Do List</h1>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
        updateTask={updateTask}
      />
    </div>
  );
}

export default App;
