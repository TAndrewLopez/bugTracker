import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBugs } from "../features/bugSlice";
import { BugCard } from "../components";

const BugsView = () => {
  const dispatch = useDispatch();
  const bugs = useSelector((state) => state.bugReducer);
  const { sidebarOpen } = useSelector((state) => state.viewReducer);

  useEffect(() => {
    dispatch(getBugs());
  }, []);

  return (
    <div
      className={`absolute z-[-2] flex flex-wrap flex-col md:flex-row justify-center ease-in-out duration-300 p-4
  ${sidebarOpen ? "md:ml-96" : ""}`}>
      {bugs.map((bug) => {
        return <BugCard key={bug._id} data={bug} />;
      })}
    </div>
  );
};

export default BugsView;

/*
  <div
      className={`absolute flex flex-wrap flex-col md:flex-row justify-center ease-in-out duration-300 ${
        sidebarOpen ? "md:ml-96" : ""
      }`}>
*/
