import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function () {
  return (
    <div>
      <Link>
        <h1>Bug-Tracker</h1>
      </Link>

      <ul>
        <li>
          <Link>Dashboard</Link>
        </li>
        <li>
          <Link>View Bugs</Link>
        </li>
        <li>
          <Link>Create Bugs</Link>
        </li>
      </ul>
    </div>
  );
}
