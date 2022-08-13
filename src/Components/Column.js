import React from "react";
import Task from "./Task";

const Column = ({
  column,
  tasks,
  index,
  deleteColumn,
  addTask,
  deleteTask,
}) => {
  return (
    <div>
      <h1>{column.title}</h1>
      <div>
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            key={task.id}
            deleteTask={deleteTask}
            column={column}
          />
        ))}
      </div>
      <button onClick={() => deleteColumn(column.id)}>Delete column</button>
      <button onClick={() => addTask(column.id)}>Add task</button>
    </div>
  );
};

export default Column;
