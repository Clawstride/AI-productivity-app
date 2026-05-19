const TaskItem = ({ task, onDelete }) => {
  return (
    <div className="bg-zinc-900 p-4 rounded-xl flex justify-between items-center">
      <p>{task}</p>

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