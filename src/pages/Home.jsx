import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="p-10">
        <h1 className="text-4xl font-bold">
          AI Productivity App
        </h1>
      </div>
    </div>
  );
};

export default Home;