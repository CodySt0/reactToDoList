import React, { useState } from "react";

function TaskInput({ addTask }) {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div>
      <input
        id="task-input"
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}> Add Task </button>
    </div>
  );
}

export default TaskInput;
