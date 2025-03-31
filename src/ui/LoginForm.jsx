import { useState } from "react";
import useLogin from "../features/doctors/authentication/useLogin";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);

    login({ password, email });
  }

  return (
    <div className="flex items-center h-screen w-90 justify-center mx-auto ">
      <form
        onSubmit={handleSubmit}
        className="rounded-md 
  flex flex-col p-10 pt-6 gap-5 w-96 h-auto "
      >
        {" "}
        <h2 className="text-center text-2xl mb-3 text-gray-800  pb-4">ورود</h2>
        <div className="flex flex-col gap-2">
          <label className="w-30 pl-20" htmlFor="email ">
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
          <label className="" htmlFor="password ">
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
          className="bg-gray-700 text-white p-2 rounded-md
   cursor-pointer hover:bg-gray-800 text-lg mt-2"
        >
          {isPending ? "درحال ورود..." : "ورود"}
        </button>
        <button
          className="cursor-pointer text-base text-blue-500"
          onClick={(e) => {
            e.preventDefault();
            // navigate("/signup");
          }}
        >
          اگر حساب کاربری ندارید کلیک کنید
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
