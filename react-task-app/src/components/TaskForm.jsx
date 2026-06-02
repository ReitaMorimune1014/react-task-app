import { useForm } from "react-hook-form";

export default function TaskForm({ onAddTask }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        onAddTask(data.task);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("task", { required: "タスクを入力してください" })}
                placeholder="タスクを入力"
            />
            {errors.task && <span>{errors.task.message}</span>}
            <button type="submit">追加</button>
        </form>
    );
}