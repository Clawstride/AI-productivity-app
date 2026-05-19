import Navbar from "../components/Navbar";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center">
          <h1 className="text-6xl font-bold leading-tight">
            Organize Your Productivity With AI
          </h1>

          <p className="text-zinc-400 text-xl mt-6 max-w-2xl mx-auto">
            Manage tasks, track productivity,
            and build smarter workflows using AI-powered tools.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button text="Get Started" />

            <button className="border border-zinc-700 px-6 py-3 rounded-xl hover:bg-zinc-900 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold">
              AI Suggestions
            </h2>

            <p className="text-zinc-400 mt-4">
              Get intelligent productivity recommendations.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold">
              Task Management
            </h2>

            <p className="text-zinc-400 mt-4">
              Organize and complete tasks efficiently.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold">
              Productivity Tracking
            </h2>

            <p className="text-zinc-400 mt-4">
              Monitor your workflow and consistency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;