import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex bg-zinc-950 text-white">
      <Sidebar />

      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;