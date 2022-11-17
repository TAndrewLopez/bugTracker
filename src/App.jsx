import { useSelector } from "react-redux";

//CUSTOM COMPONENTS
import { Login, Sidebar } from "./views";

const App = () => {
  const { loggedIn } = useSelector((state) => state.authReducer);
  return (
    <>
      {!loggedIn ? (
        <Login />
      ) : (
        <>
          {" "}
          <Sidebar />
        </>
      )}
    </>
  );
};

export default App;
