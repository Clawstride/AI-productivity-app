import {
  useContext,
  useEffect,
  useState,
} from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import Card from "../components/Card";
import TaskItem from "../components/TaskItem";

import { TaskContext } from "../context/TaskContext";

import { getBackendMessage } from "../services/api";

const Dashboard = () => {
  const {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
  } = useContext(TaskContext);

  const [taskInput, setTaskInput] = useState("");

  const [backendMessage, setBackendMessage] =
    useState("");

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      const message = await getBackendMessage();

      setBackendMessage(message);

      setLoading(false);
    };

    fetchMessage();
  }, []);

  const handleAddTask = () => {
    if (taskInput.trim() === "") return;

    addTask(taskInput);

    setTaskInput("");
  };

  const filteredTasks = tasks.filter((task) =>
    task.text
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <DashboardLayout>
      <h1 className="text-5xl font-bold">
        Dashboard
      </h1>

      {loading ? (
        <p className="text-yellow-400 mt-4">
          Connecting to backend...
        </p>
      ) : (
        <p className="text-green-400 mt-4">
          {backendMessage}
        </p>
      )}

      <p className="text-zinc-400 mt-4">
        Organize and track your productivity.
      </p>

      {/* Search */}
      <div className="mt-8">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 outline-none"
        />
      </div>

      {/* Add Task */}
      <div className="mt-6 flex gap-4">
        <input
          type="text"
          placeholder="Enter a task..."
          value={taskInput}
          onChange={(e) =>
            setTaskInput(e.target.value)
          }
          className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl p-4 outline-none"
        />

        <button
          onClick={handleAddTask}
          className="bg-white text-black px-6 rounded-xl font-semibold hover:scale-105 transition"
        >
          Add Task
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <Card title={`Total Tasks: ${tasks.length}`} />

        <Card
          title={`Completed: ${completedTasks}`}
        />

        <Card
          title={`Remaining: ${
            tasks.length - completedTasks
          }`}
        />
      </div>

      {/* AI Suggestion */}
      <div className="bg-zinc-900 rounded-2xl p-6 mt-10 border border-zinc-800">
        <h2 className="text-2xl font-bold">
          AI Suggestion
        </h2>

        <p className="text-zinc-400 mt-4">
          Focus on finishing one important task
          before multitasking.
        </p>
      </div>

      {/* Tasks */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-6">
          Your Tasks
        </h2>

        {filteredTasks.length === 0 ? (
          <p className="text-zinc-500">
            No matching tasks found.
          </p>
        ) : (
          <div className="space-y-4">
            {filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={() =>
                  deleteTask(task.id)
                }
                onToggle={() =>
                  toggleTask(task.id)
                }
              />
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;