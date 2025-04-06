import { useForm } from "react-hook-form";
import useSignup from "../features/doctors/authentication/useSignup";

function SignUpForm() {
  const { register, handleSubmit, getValues, reset, formState } = useForm();
  // const { errors } = formState;
  const { isPending, signup } = useSignup();
  function onSubmit({ fullname, password, email }) {
    console.log({ fullname, password, email });

    signup(
      { fullname, password, email },
      {
        onSettled: reset,
      }
    );
  }

  return (
    <>
      <div className="flex justify-center py-15 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" rounded-md
        flex flex-col p-10 pt-6 gap-5 w-80 h-auto sm:w-md"
        >
          <h2 className="text-center text-2xl mb-2 text-gray-800 pb-2">
            عضویت
          </h2>
          <div className="flex flex-col gap-2">
            <label className="w-80 pl-20 text-grey-3" htmlFor="email ">
              نام و نام خانوادگی:
            </label>
            <input
              {...register("fullname", {
                required: "لطفا نام و نام خانوادگی را وارد کنید",
              })}
              type="text"
              name="fullname"
              className="light border border-gray-400 p-1 rounded-md"
            />
          </div>
          {/* <FormErrors errors={errors?.fullName?.message} /> */}
          <div className="flex flex-col gap-2">
            <label className="w-30 pl-20 text-grey-3" htmlFor="email ">
              ایمیل:
            </label>
            <input
              {...register("email", {
                required: "لطفا ایمیل را وارد کنید",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "ایمیل وارد شده صحیح نیست",
                },
              })}
              type="email"
              name="email"
              className="light border border-gray-400 p-1 rounded-md"
            />
          </div>
          {/* <FormErrors errors={errors?.email?.message} /> */}
          <div className="flex flex-col gap-2">
            <label className="w-30 pl-20 text-grey-3" htmlFor="email ">
              رمز:{" "}
            </label>
            <input
              {...register("password", {
                required: "لطفا رمز را وارد کنید",
                minLength: { value: 8, message: "رمز باید حداقل 8 رقم باشد" },
              })}
              type="password"
              name="password"
              className="light border border-gray-400 p-1 rounded-md"
            />
          </div>
          {/* <FormErrors errors={errors?.password?.message} /> */}
          <div className="flex flex-col gap-2 ">
            <label
              className="w-30 pl-20 text-grey-3 flex flex-rox"
              htmlFor="email "
            >
              رمز <span className="px-1"> (تکرار) </span>:{" "}
            </label>
            <input
              {...register("confirmPassword", {
                required: "لطفا تکرار رمز را وارد کنید",
                validate: (value) =>
                  value === getValues().password || "عدم شباهت رمز ها",
              })}
              type="password"
              name="confirmPassword"
              className="light border border-gray-400 p-1 rounded-md"
            />
          </div>
          {/* <FormErrors errors={errors?.confirmPassword?.message} /> */}
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md
         cursor-pointer hover:bg-blue-600 text-lg mt-2"
            disabled={isPending}
          >
            {isPending ? "صبر کنید ..." : "عضویت"}
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
