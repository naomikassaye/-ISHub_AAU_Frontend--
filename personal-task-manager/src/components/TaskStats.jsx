import React from "react";
import { useTasks } from "../context/TaskContext";

export default function TaskStats() {
  const tasks = useTasks();
  const completed = tasks.filter(t => t.completed).length;
  const pending = tasks.length - completed;

   return (
    <div className="task-stats">
      <div className="stat-item">
        <span className="stat-number">{pending}</span>
        <span className="stat-label">Pending</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{completed}</span>
        <span className="stat-label">Completed</span>
      </div>
    </div>
  );
}
