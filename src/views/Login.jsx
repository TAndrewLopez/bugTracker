import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../controllers/features/authSlice";
import ErrorIcon from "../assets/faIcons/errorMessageIcon";

export default function Login() {
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({
    name: "",
    password: "",
  });

  const [nameFieldValidation, setNameFieldValidation] = useState(false);
  const [passwordFieldValidation, setPasswordFieldValidation] = useState(false);

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
    <div className="w-full h-full absolute bg-loginBG bg-cover bg-center bg-no-repeat bg-black/[.5] bg-blend-multiply">
      <div className="h-full w-full flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <h1 className="w-full text-4xl font-semibold text-light text-center mb-4">
            Account Login
          </h1>

          {/* USERNAME INPUT */}
          <label className="block text-light" htmlFor="username">
            Username
          </label>
          <input
            onFocus={() => {
              if (nameFieldValidation) {
                setNameFieldValidation(!nameFieldValidation);
              }
            }}
            onBlur={(evt) => {
              if (!loginForm.name) {
                setNameFieldValidation(!nameFieldValidation);
              }
            }}
            id="username"
            className="relative z-10 w-full p-2 mt-2 mb-2 rounded-sm text-darkGrey"
            onChange={(evt) =>
              setLoginForm({ ...loginForm, name: evt.target.value })
            }
            value={loginForm.name}
            name="name"
            placeholder="Username"
          />
          <p
            onClick={() => setNameFieldValidation(false)}
            className={`relative z-5 top-[-35px] rounded-sm text-errorRed bg-white flex justify-center items-center gap-2 cursor-pointer
            ${
              nameFieldValidation
                ? "translate-y-[35px] opacity-100"
                : "opacity-0"
            }
            ease-in-out duration-500`}>
            <ErrorIcon twClass="w-[5px]" fill="#cc0000" /> Please enter your
            username
          </p>

          {/* PASSWORD INPUT */}
          <label className="text-light flex flex-col mt-1" htmlFor="password">
            Password
          </label>
          <input
            onFocus={() => {
              if (passwordFieldValidation) {
                setPasswordFieldValidation(!passwordFieldValidation);
              }
            }}
            onBlur={(evt) => {
              if (!loginForm.name) {
                setPasswordFieldValidation(!passwordFieldValidation);
              }
            }}
            id="password"
            className="relative z-10 w-full p-2 mt-2 mb-2 rounded-sm text-darkGrey"
            onChange={(evt) =>
              setLoginForm({ ...loginForm, password: evt.target.value })
            }
            value={loginForm.password}
            name="password"
            placeholder="Password"
            type="password"
          />

          <p
            onClick={() => setPasswordFieldValidation(false)}
            className={`relative z-5 top-[-35px] rounded-sm text-errorRed bg-white flex justify-center items-center gap-2 cursor-pointer
            ${
              passwordFieldValidation
                ? "translate-y-[35px] opacity-100"
                : "opacity-0"
            }
            ease-in-out duration-500`}>
            <ErrorIcon twClass="w-[5px]" fill="#cc0000" /> Please enter your
            password
          </p>

          <button
            className={`w-full mt-2 px-6 py-2 rounded ${
              loginForm.name && loginForm.password
                ? "bg-accent text-darkGrey"
                : "bg-grey cursor-default"
            }`}
            type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
