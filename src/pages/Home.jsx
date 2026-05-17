import Navbar from "../components/Navbar";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <div className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl font-bold max-w-3xl leading-tight">
          Organize Your Life With AI Productivity
        </h1>

        <p className="text-zinc-400 mt-6 max-w-xl text-lg">
          Plan tasks, generate productivity strategies,
          and improve your workflow using AI-powered tools.
        </p>

        <div className="mt-8">
          <Button text="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default Home;