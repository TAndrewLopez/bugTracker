import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../features/authSlice";
import { ErrorIcon, LockIcon, ProfileIcon } from "../assets/faIcons";

export default function Login() {
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({
    name: "",
    password: "",
  });

  const [nameFocused, setNameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
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
          <label className="relative text-light" htmlFor="username">
            Username
            <ProfileIcon
              twClass={`absolute w-[20px] top-[40px] left-[5px] z-20 ease-in-out duration-300 
              ${nameFocused ? "scale-[.75]" : ""} 
              ${nameFocused ? "fill-accent" : "fill-blueGrey"}`}
            />
          </label>

          <input
            onFocus={() => {
              setNameFocused(true);
              if (nameFieldValidation) {
                setNameFieldValidation(!nameFieldValidation);
              }
            }}
            onBlur={(evt) => {
              if (!loginForm.name) {
                setNameFieldValidation(!nameFieldValidation);
                setNameFocused(false);
              }
            }}
            id="username"
            className="relative z-10 w-full pl-8 p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-none"
            onChange={(evt) =>
              setLoginForm({ ...loginForm, name: evt.target.value })
            }
            onClick={() => setNameFocused(true)}
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
            <ErrorIcon twClass="w-[5px] fill-errorRed" /> Please enter your
            username
          </p>

          {/* PASSWORD INPUT */}
          <label
            className="relative text-light flex flex-col mt-1"
            htmlFor="password">
            Password
            <LockIcon
              twClass={`absolute w-[20px] top-[40px] left-[5px] z-20 
              ${passwordFocused ? "scale-[.75]" : ""} ease-in-out duration-300
              ${passwordFocused ? "fill-accent" : "fill-blueGrey"}`}
            />
          </label>

          <input
            onFocus={() => {
              setPasswordFocused(true);
              if (passwordFieldValidation) {
                setPasswordFieldValidation(!passwordFieldValidation);
              }
            }}
            onBlur={(evt) => {
              if (!loginForm.password) {
                setPasswordFieldValidation(!passwordFieldValidation);
                setPasswordFocused(false);
              }
            }}
            id="password"
            className="relative z-10 w-full pl-8 p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-none"
            onChange={(evt) =>
              setLoginForm({ ...loginForm, password: evt.target.value })
            }
            onClick={() => setPasswordFocused(true)}
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
            <ErrorIcon twClass="w-[5px] fill-errorRed" /> Please enter your
            password
          </p>

          {/* FORM SUBMISSION BUTTON */}
          <button
            className={`w-full mt-2 px-6 py-2 rounded ${
              loginForm.name && loginForm.password
                ? "bg-accent text-white"
                : "bg-blueGrey cursor-default "
            }`}
            type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
