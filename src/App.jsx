import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

//CUSTOM COMPONENTS
import { Login, Dashboard, BugsView } from "./pages";
import { Menubar, Sidebar } from "./components";

const App = () => {
  const { loggedIn } = useSelector((state) => state.authReducer);

  return (
    <>
      {!loggedIn ? (
        <Login />
      ) : (
        <>
          <Menubar />
          {/* <Sidebar />
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/bugs" element={<BugsView />} />
          </Routes> */}
        </>
      )}
    </>
  );
};

export default App;
