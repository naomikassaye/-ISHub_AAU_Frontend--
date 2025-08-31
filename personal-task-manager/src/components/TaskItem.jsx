import React from "react";
import { useTasksDispatch } from "../context/TaskContext";

export default function TaskItem({ task }) {
  const dispatch = useTasksDispatch();

  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch({ type: "TOGGLE", id: task.id })}
      />
      <span className={task.completed ? "done" : ""}>
        {task.text}
      </span>
      <button onClick={() => dispatch({ type: "DELETE", id: task.id })}>Delete</button>
    </li>
  );
}
