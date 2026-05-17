import { useState } from "react";

import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Dashboard = () => {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);

    setTask("");
  };

  const handleDeleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter(
      (_, index) => index !== indexToDelete
    );

    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <div className="p-8 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-zinc-400 mt-2">
          Manage your productivity tasks.
        </p>

        <div className="mt-10 flex gap-4">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 outline-none"
          />

          <button
            onClick={handleAddTask}
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Add Task
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <Card title="AI Suggestions" />
          <Card title="Productivity Stats" />
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            Your Tasks
          </h2>

          <div className="space-y-4">
            {tasks.map((singleTask, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-4 rounded-xl flex justify-between items-center"
              >
                <p>{singleTask}</p>

                <button
                  onClick={() => handleDeleteTask(index)}
                  className="bg-red-500 px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;