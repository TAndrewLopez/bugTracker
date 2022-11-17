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
      className={`flex flex-wrap flex-col md:flex-row justify-center ${
        sidebarOpen ? "md:ml-96" : ""
      }`}>
      {bugs.map((bug) => {
        return <BugCard key={bug._id} data={bug} />;
      })}
    </div>
  );
};

export default BugsView;
