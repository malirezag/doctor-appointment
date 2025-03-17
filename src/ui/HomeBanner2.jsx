import Button from "./Button";
import { SlCalender } from "react-icons/sl";

function HomeBanner2() {
  return (
    <div className="h-screen flex flex-row justify-around ">
      <div className="w-[38%] flex justify-center items-start flex-col gap-10 ">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl text-blue-950 font-medium">
            بهترین پزشکان کلینیک و بیمارستان را که نزدیک شما است کشف کنید
          </h2>
          <p className="text-blue-500 w-[78%]">
            شما می‌توانید از میان بهترین پزشکان مختصص، پزشک مورد نظر را انتخاب
            کرده، هرگونه مشکل یا سوال مربوط به بیماری خود را به صورت حضوری یا
            متنی یا صوتی مطرح کنید، به صورت آنلاین با پزشک گفتگو کنید و در وقت و
            هزینه خود صرفه جویی کنید.{" "}
          </p>
        </div>
        <Button className="flex flex-row justify-center items-center gap-2 shadow-lg shadow-blue-200 ">
          <span>
            <SlCalender className="text-blue-50 text-xl" />
          </span>
          رزرو نوبت پزشک
        </Button>
      </div>
      <div className="max-w-130 pt-10">
        <img src="./imageear.png" alt="" className="" />
      </div>
    </div>
  );
}

export default HomeBanner2;
