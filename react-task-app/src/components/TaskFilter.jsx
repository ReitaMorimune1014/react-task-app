export default function TaskFilter({ filter, onFilterChange }) {
    return (
        <div>
            <button onClick={() => onFilterChange("all")}>全て</button>
            <button onClick={() => onFilterChange("active")}>未完了</button>
            <button onClick={() => onFilterChange("completed")}>完了</button>
        </div>
    );
}