import React from "react";
import initialData from "./initial-data";
import { useState } from "react";
import styled from "styled-components";
import Column from "./Components/Column";
import _uniqueId from "lodash/uniqueId";

const Container = styled.div``;

function App() {
  const [data, setData] = useState(initialData);

  // delete a task from data.tasks and data.columns[columnId].taskIds
  const deleteTask = (taskId, columnId) => {
    const newTasks = { ...data.tasks };
    delete newTasks[taskId];

    const newColumns = { ...data.columns };
    const newColumnsTaskIds = newColumns[columnId].taskIds.filter(
      (id) => id !== taskId
    );
    newColumns[columnId].taskIds = newColumnsTaskIds;
    setData({ ...data, tasks: newTasks, columns: newColumns });
  };

  const deleteColumn = (id) => {
    const newColumns = { ...data.columns };
    delete newColumns[id];
    const newColumnOrder = data.columnOrder.filter(
      (columnId) => columnId !== id
    );
    setData({
      ...data,
      columns: newColumns,
      columnOrder: newColumnOrder,
    });
  };

  // add a new task do data.tasks and data.columns[columnId].taskIds
  const addTask = (columnId) => {
    const newTaskId = _uniqueId();
    const newTasks = { ...data.tasks };
    newTasks[newTaskId] = {
      id: newTaskId,
      content: "New task",
      columnId: columnId,
    };
    const newColumn = { ...data.columns[columnId] };
    newColumn.taskIds.push(newTaskId);
    setData({
      ...data,
      tasks: newTasks,
      columns: {
        ...data.columns,
        [columnId]: newColumn,
      },
    });
  };

  return (
    <Container>
      {data.columnOrder.map((columnId, index) => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

        return (
          <Column
            key={column.id}
            column={column}
            tasks={tasks}
            index={index}
            deleteColumn={deleteColumn}
            addTask={addTask}
            deleteTask={deleteTask}
          />
        );
      })}
    </Container>
  );
}

export default App;
