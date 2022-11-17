import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../controllers/features/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const nameRef = useRef({});
  const passwordRef = useRef({});

  const [loginForm, setLoginForm] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (loginForm.name && loginForm.password) {
      setLoginForm({
        name: "",
        password: "",
      });
      dispatch(signIn(loginForm));
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <form
        className="bg-darkGrey w-fit border-2 border-light rounded flex flex-col px-6 sm:px-14 py-10 sm:py-12 gap-4"
        onSubmit={handleSubmit}>
        <h1 className="text-3xl sm:text-4xl text-light w-64 text-center">
          Login
        </h1>

        <label className="text-light flex flex-col" htmlFor="username">
          Username
          <input
            id="username"
            className="rounded-sm p-2 text-darkGrey mt-2"
            onChange={(evt) =>
              setLoginForm({ ...loginForm, name: evt.target.value })
            }
            value={loginForm.name}
            name="name"
            // placeholder="Username"
          />
        </label>

        <label className="text-light flex flex-col" htmlFor="password">
          Password
          <input
            id="password"
            className="rounded-sm p-2 text-darkGrey mt-2"
            onChange={(evt) =>
              setLoginForm({ ...loginForm, password: evt.target.value })
            }
            value={loginForm.password}
            name="password"
            // placeholder="Password"
            type="password"
          />
        </label>

        <button
          className={`mt-2 p-2 rounded ${
            loginForm.name && loginForm.password
              ? "bg-accent text-darkGrey"
              : "bg-grey cursor-default"
          }`}
          type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
