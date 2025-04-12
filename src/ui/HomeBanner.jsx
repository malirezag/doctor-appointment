import { Link } from "react-router-dom";
import Button from "./Button";
import Header from "./Header";
import UserAccount from "./UserAccount";

function HomeBanner() {
  return (
    <>
      <UserAccount className="md:hidden absolute left-0 p-5" />
      <div className="bg-[url(/banner.png)] bg-cover min-h-screen flex justify-center items-center sm:block flex-col ">
        <Header />

        {/* doctor logo and main text */}
        <div
          className="flex justify-around items-center max-w-250
       mx-auto md:gap-25 px-10 md:pt-15 flex-col-reverse md:flex-row gap-10"
        >
          <div className="flex flex-col md:gap-10 items-start gap-10">
            <h1 className="md:text-5xl md:leading-18 text-blue-950 font-medium  md:text-wrap sm:text-2xl text-2xl">
              سامانه نوبت دهی پزشکان و مشاوره آنلاین
            </h1>
            <Link
              to="/specialities"
              className="bg-white px-5 py-3 rounded-sm shadow-lg
           shadow-blue-200 flex flex-row gap-1 "
            >
              <span>
                <img src="/pasient.png" alt="" />
              </span>
              لیست تخصص های پزشکی
            </Link>
          </div>

          <img src="/Doc.png" alt="" className="sm:h-75 h-65 " />
        </div>

        {/* search pannel */}

        <div
          className="bg-linear-to-bl from-blue-600 to-indigo-500 h-30 max-w-280 mx-auto mt-15 
       rounded-2xl md:flex hidden items flex-row justify-center items-center "
        >
          <div
            className=" bg-blue-50 flex items-center justify-center
         flex-row py-4 px-10 gap-13 rounded-2xl"
          >
            <select name="" id="">
              <option value="">انتخاب پزشک و متخصص</option>
            </select>

            <select name="" id="">
              <option value="">انتخاب تخصص </option>
            </select>

            <label htmlFor="" className="flex flex-row">
              <input type="radio" />
              <p>مشاوره آنلاین</p>
            </label>

            <label htmlFor="" className="flex flex-row">
              <input type="radio" />
              <p>نوبت حضوری </p>
            </label>

            <Button>جستوجوی پزشک</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
