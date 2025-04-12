import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setSpeciality } from "../ReduxSlices/specialitySlice";

function Speciality({ title, image, color, type }) {
  const dispatch = useDispatch();
  const [searchParams, setSerchParsms] = useSearchParams();
  function handleClick() {
    searchParams.set("speciality", type);
    setSerchParsms(searchParams);
    dispatch(setSpeciality(title));
  }

  return (
    <button
      onClick={handleClick}
      className={`${
        color === "blue"
          ? "bg-linear-to-br from-blue-400 to-indigo-700 text-blue-50"
          : "bg-white text-blue-800 "
      } sm:w-40 w-20 h-20 md:h-38 sm:py-1 sm:space-y-5 space-y-1 rounded-2xl text-xs flex flex-col justify-center items-center font-semibold cursor-pointer px-1`}
    >
      <img src={image} alt={title} className="sm:w-17 sm:h-18 w-9 h-8 mt-4" />
      <h3 className="mb-4 sm:text-base text-xs">{title}</h3>
    </button>
  );
}

export default Speciality;
