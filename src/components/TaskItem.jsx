import React, { useState } from "react";

function taskItem({
  index,
  task,
  deleteTask,
  toggleTaskCompletion,
  updateTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    updateTask(index, editText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            id={`task-edit-${index}`}
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <>
          <input
            
            type="text"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(index)}
          />
          <span>{task.text}</span>
          <button onClick={() => setIsEditing(true)} disabled={task.completed}>
            Edit
          </button>
          <button onClick={() => deleteTask(index)} disabled={!task.completed}>
            Delete
          </button>
        </>
      )}
    </li>
  );
}

export default taskItem;
