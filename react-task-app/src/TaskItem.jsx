export default function TaskItem({ task, onToggle, onDelete }) {
    return (
        <li>
            <span
                onClick={() => onToggle(task.id)}
                style={{ textDecoration: task.completed ? "line-through" : "none" }}
            >
                {task.title}
            </span>
            <button onClick={() => onDelete(task.id)}>削除</button>
        </li>
    );
}