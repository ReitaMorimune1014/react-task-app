export default function TaskList({ tasks, onToggle, onDelete }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <span
                        onClick={() => onToggle(task.id)}
                        style={{ textDecoration: task.completed ? "line-through" : "none" }}
                    >
                        {task.title}
                    </span>
                    <button onClick={() => onDelete(task.id)}>削除</button>
                </li>
            ))}
        </ul>
    );
}