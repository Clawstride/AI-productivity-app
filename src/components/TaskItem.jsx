const TaskItem = ({
  task,
  onDelete,
  onToggle,
}) => {
  return (
    <div className="bg-zinc-900 p-4 rounded-xl flex justify-between items-center">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
          className="w-5 h-5"
        />

        <p
          className={
            task.completed
              ? "line-through text-zinc-500"
              : ""
          }
        >
          {task.text}
        </p>
      </div>

      <button
        onClick={onDelete}
        className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;