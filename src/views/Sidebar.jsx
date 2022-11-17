import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../controllers/features/authSlice";

export default function () {
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.authReducer);

  return (
    <div className="w-full md:w-[40vw] h-screen fixed text-center bg-darkGrey py-8 flex flex-col">
      <h1 className="text-4xl font-bold text-light mb-10">
        <Link className="p-1">Bug-Tracker </Link>
      </h1>
      <ul className="flex-1">
        <li className="text-[1.5rem] text-light hover:bg-accent py-2 transition-all ease-in-out duration-300">
          <Link className="p-1">Dashboard</Link>
        </li>
        <li className="text-[1.5rem] text-light hover:bg-accent py-2 transition-all ease-in-out duration-300">
          <Link className="p-1">View Bugs</Link>
        </li>
        {admin && (
          <li className="text-[1.5rem] text-light hover:bg-accent py-2 transition-all ease-in-out duration-300">
            <Link className="p-1">Create Bugs</Link>
          </li>
        )}
      </ul>
      <button
        onClick={() => dispatch(signOut())}
        className={`mt-2 rounded bg-grey hover:bg-accent text-white px-6 py-2 transition-all ease-in-out duration-300`}>
        Sign Out
      </button>
    </div>
  );
}
