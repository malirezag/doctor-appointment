import { useEffect, useState } from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import useSetTime from "../features/doctors/useSetTime";
import useDoctors from "../features/doctors/useDoctors";
import Spinner from "./Spinner";
import Option from "./Option";
function Reservation() {
  const { register, handleSubmit, setValue } = useForm();
  const [selectedOption, setSelectedOption] = useState(null);
  const { setVisitTime, isPending } = useSetTime();
  const { doctors } = useDoctors();
  const doc = doctors ? doctors[0] : [];
  const { id: doctorId } = doctors ? doctors[0] : "";

  const getDate = (daysToAdd) => {
    const date = new Date();
    date.setDate(date.getDate() + daysToAdd);
    return date.toDateString();
  };

  function handleCheck(option) {
    setSelectedOption(option);
    setValue("mode", option);
  }

  function onSubmit({ time }) {
    setVisitTime({ time, doctorId });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 bg-blue-100 rounded-xl border border-blue-300 flex flex-col gap-7 text-gray-600"
    >
      <div className="bg-white flex items-center justify-around min-w-250 max-w-300 flex-row py-8 rounded-2xl">
        <select {...register("date")} className="outline-0">
          <option value="">انتخاب تاریخ </option>
          {/* <option value={getDate(1)}>{getDate(1)}</option> */}
          <option value={getDate(2)}>{getDate(2)}</option>
          {/* <option value={getDate(3)}>{getDate(3)}</option> */}
        </select>

        <select {...register("time")} className="outline-0">
          <option value="">انتخاب ساعت </option>

          <Option doc={doc} time={"12-1"} />
          <Option doc={doc} time={"1-2"} />
          <Option doc={doc} time={"2-3"} />
          <Option doc={doc} time={"3-4"} />
        </select>

        <label className="flex flex-row gap-2 items-center">
          <input
            type="checkbox"
            checked={selectedOption === "online"}
            onChange={() => handleCheck("online")}
          />
          <p>مشاوره آنلاین</p>
        </label>

        <label className="flex flex-row gap-2 items-center">
          <input
            type="checkbox"
            checked={selectedOption === "visit"}
            onChange={() => handleCheck("visit")}
          />
          <p>نوبت حضوری </p>
        </label>
      </div>
      <Button>{isPending ? <Spinner /> : " رزرو نوبت "}</Button>
    </form>
  );
}

export default Reservation;
