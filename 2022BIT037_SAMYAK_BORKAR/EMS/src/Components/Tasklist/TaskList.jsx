import React from "react";
import FailedTask from "./FailedTask";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompletedTask from "./CompletedTask";

const TaskList = () => {
  return (
    <div
      id="TaskListID"
      className="overflow-x-auto flex h-[50%] w-full gap-5 mt-20"
    >
      <FailedTask/>
      <AcceptTask/>
      <NewTask/>
      <CompletedTask/>
    </div>
  );
};

export default TaskList;
