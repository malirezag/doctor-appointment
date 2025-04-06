import { useState } from "react";
import useLogin from "../features/doctors/authentication/useLogin";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending } = useLogin();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);

    login(
      { password, email },
      {
        onSuccess: () => {
          navigate("/");
        },
      }
    );
  }

  return (
    <div className="flex items-center h-screen w-90 justify-center mx-auto ">
      <form
        onSubmit={handleSubmit}
        className="rounded-md 
  flex flex-col p-10 pt-6 gap-5 w-96 h-auto "
      >
        {" "}
        <h2 className="text-center text-3xl mb-3 text-blue-800 pb-4">ورود</h2>
        <div className="flex flex-col gap-2">
          <label className="w-30 pl-20 text-blue-800" htmlFor="email ">
            ایمیل:{" "}
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            disabled={""}
            className="light border border-gray-400 p-1 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-blue-800" htmlFor="password ">
            {" "}
            رمز:{" "}
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            disabled={""}
            className="light border border-gray-400 p-1 rounded-md "
          />
        </div>
        <button
          disabled={""}
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md
   cursor-pointer hover:bg-blue-600 text-lg mt-2"
        >
          {isPending ? "درحال ورود..." : "ورود"}
        </button>
        <button
          className="cursor-pointer text-base text-blue-500"
          onClick={(e) => {
            e.preventDefault();
            navigate("/signup");
          }}
        >
          اگر حساب کاربری ندارید کلیک کنید
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
