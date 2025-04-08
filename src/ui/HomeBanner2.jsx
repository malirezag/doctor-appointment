import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { SlCalender } from "react-icons/sl";

function HomeBanner2() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex md:flex-row flex-col-reverse md:justify-around justify-center items-center gap-10">
      <div className="md:w-[38%] flex justify-center md:items-start flex-col md:gap-10 px-10 md:px-0 items-center mb-30 gap-8 ">
        <div className="flex flex-col md:gap-6 gap-4">
          <h2 className="md:text-4xl text-blue-950 font-medium sm:text-2xl ">
            بهترین پزشکان کلینیک و بیمارستان را که نزدیک شما است کشف کنید
          </h2>
          <p className="text-blue-500 md:w-[78%]">
            شما می‌توانید از میان بهترین پزشکان مختصص، پزشک مورد نظر را انتخاب
            کرده، هرگونه مشکل یا سوال مربوط به بیماری خود را به صورت حضوری یا
            متنی یا صوتی مطرح کنید، به صورت آنلاین با پزشک گفتگو کنید و در وقت و
            هزینه خود صرفه جویی کنید.{" "}
          </p>
        </div>
        <Button
          onClick={() => navigate("/specialities")}
          className="flex flex-row justify-center items-center gap-2 shadow-lg shadow-blue-200 "
        >
          <span>
            <SlCalender className="text-blue-50 text-xl" />
          </span>
          رزرو نوبت پزشک
        </Button>
      </div>
      <div className="md:max-w-130 w-60  md:w-120 md:h-120 sm:w-85 sm:h-85 ">
        <img src="./imageear.png" alt="" className="" />
      </div>
    </div>
  );
}

export default HomeBanner2;
