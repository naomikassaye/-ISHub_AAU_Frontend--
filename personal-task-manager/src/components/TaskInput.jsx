import React, { useState, useRef, useEffect } from "react";
import { useTasksDispatch } from "../context/TaskContext";

export default function TaskInput() {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return; 
    dispatch({ type: "ADD", text });
    setText("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        ref={inputRef}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
