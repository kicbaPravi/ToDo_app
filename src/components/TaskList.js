import React from "react";
import Task from "./Task";

export const TaskList = ({ tasks, inputValue }) => {
  const filteredTasks =
    tasks &&
    tasks.filter((task) => task.name.toLowerCase().indexOf(inputValue) !== -1);

  return (
    <div>
      {filteredTasks &&
        filteredTasks.map((task) => {
          return <Task task={task} key={task.id} />;
        })}
    </div>
  );
};
