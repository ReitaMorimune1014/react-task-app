import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

export default function App() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");

    const onAddTask = (title) => {
        setTasks([...tasks, { id: uuid(), title, completed: false }]);
    };

    const onToggle = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const onDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true;
    });

    return (
        <div>
            <h1>タスク管理アプリ</h1>
            <TaskForm onAddTask={onAddTask} />
            <TaskFilter filter={filter} onFilterChange={setFilter} />
            <TaskList tasks={filteredTasks} onToggle={onToggle} onDelete={onDelete} />
        </div>
    );
}