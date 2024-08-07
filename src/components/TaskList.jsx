import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleTaskCompletion, updateTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          index={index}
          task={task}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          updateTask={updateTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
