/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useReducer, useEffect } from "react";

const TasksContext = createContext();
const TasksDispatchContext = createContext();

function tasksInit() {
    try {
        const raw = localStorage.getItem("__tasks_v1");
        if (raw) return JSON.parse(raw);
    } catch  {
       // ignore
    }
    return [];
}


function tasksReducer(state, action) {
    switch (action.type) {
        case "ADD":
            { const text = (action.text || "").trim();
            if (!text) return state;
            return [
                { id: crypto.randomUUID(), text, completed: false, interacted: false },
                ...state,
            ]; }
        case "TOGGLE":
            return state.map(t =>
                t.id === action.id ? { ...t, completed: !t.completed, interacted: true } : t
            );
        case "DELETE":
            return state.filter(t => t.id !== action.id);
        case "INTERACT":
            return state.map(t => (t.id === action.id ? { ...t, interacted: true } : t));
        case "CLEAR_ALL":
            return [];
        default:
            return state;
    }
}

export function TasksProvider({ children }) {
    const [tasks, dispatch] = useReducer(tasksReducer, [], tasksInit);

    useEffect(() => {
        localStorage.setItem("__tasks_v1", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

export function useTasks() {
    return useContext(TasksContext);
}

export function useTasksDispatch() {
    return useContext(TasksDispatchContext);
}
