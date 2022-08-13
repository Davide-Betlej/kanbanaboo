import React from "react";

const Task = ({ task, index, deleteTask, column }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.content}</p>
      <p>{task.id}</p>
      <button onClick={() => deleteTask(task.id, column.id)}>
        Delete task
      </button>
    </div>
  );
};

export default Task;
