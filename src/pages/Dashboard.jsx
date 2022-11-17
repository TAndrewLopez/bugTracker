import { useSelector } from "react-redux";

const Dashboard = () => {
  const { sidebarOpen } = useSelector((state) => state.viewReducer);
  return (
    <div
      className={`flex flex-wrap flex-col md:flex-row justify-center ${
        sidebarOpen ? "md:ml-96" : ""
      }`}>
      Dashboard
    </div>
  );
};

export default Dashboard;
