import { useState } from "react";
import Doctors from "../features/doctors/Doctors";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import { setDoctorName } from "../ReduxSlices/searchDoctorsSlice";
import { useDispatch } from "react-redux";

function SearchDoctors() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="bg-blue-50 ">
      <Header />

      <div className="flex justify-center flex-col items-center pb-10 ">
        <h2 className="text-3xl mt-15 font-semibold text-blue-800">
          جست و جوی پزشک
        </h2>
        <div className="bg-white my-10 py-3 px-2 rounded-2xl">
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              dispatch(setDoctorName(e.target.value));
            }}
            placeholder="نام دکتر مورد نظر را جست و جو کنید"
            type="text"
            className=" bg-white rounded-xl w-270 py-3 mx-2 px-4 text-blue-950 outline-blue-300"
          />
        </div>
        <Doctors />
      </div>
      <Footer />
    </div>
  );
}

export default SearchDoctors;
