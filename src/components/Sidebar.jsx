import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-zinc-900 min-h-screen p-6 border-r border-zinc-800">
      <h1 className="text-3xl font-bold mb-10">
        AI Productivity
      </h1>

      <div className="flex flex-col gap-4">
        <Link
          to="/dashboard"
          className="hover:bg-zinc-800 p-3 rounded-xl transition"
        >
          Dashboard
        </Link>

        <Link
          to="/"
          className="hover:bg-zinc-800 p-3 rounded-xl transition"
        >
          Home
        </Link>

        <Link
          to="/login"
          className="hover:bg-zinc-800 p-3 rounded-xl transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;