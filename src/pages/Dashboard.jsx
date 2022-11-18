import { useSelector } from "react-redux";

const Dashboard = () => {
  const { sidebarOpen } = useSelector((state) => state.viewReducer);

  return (
    <div
      className={`absolute z-[-2] flex flex-wrap flex-col md:flex-row justify-center ease-in-out duration-300 p-4
    ${sidebarOpen ? "md:ml-96" : ""}`}>
      Dashboard
    </div>
  );
};

export default Dashboard;
