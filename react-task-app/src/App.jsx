import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
    const [tasks, setTasks] = useState([]);

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

    return (
        <div>
            <h1>タスク管理アプリ</h1>
            <TaskForm onAddTask={onAddTask} />
            <TaskList tasks={tasks} onToggle={onToggle} onDelete={onDelete} />
        </div>
    );
}