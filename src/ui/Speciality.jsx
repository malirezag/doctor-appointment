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
      } w-40 py-1 space-y-5 rounded-2xl text-sm flex flex-col justify-center items-center font-semibold cursor-pointer`}
    >
      <img src={image} alt={title} className="w-17 mt-4" />
      <h3 className="mb-4">{title}</h3>
    </button>
  );
}

export default Speciality;
