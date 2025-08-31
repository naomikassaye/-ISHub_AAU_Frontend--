import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskStats from "./components/TaskStats";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <h1 className="app-title">Personal Task Manager</h1>
      <TaskInput />
      <TaskStats />
      <TaskList />
    </div>
  );
}
