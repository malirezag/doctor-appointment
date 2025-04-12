import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Doctors from "../features/doctors/Doctors";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import { setDoctorName } from "../ReduxSlices/searchDoctorsSlice";
import { useDispatch } from "react-redux";
import MobileMenu from "../ui/MobileMenu";

function SearchDoctors() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <MobileMenu />
      <div className="bg-blue-50 ">
        <Header />

        <div className="flex justify-center flex-col items-center pb-10 mx-5">
          <h2 className="md:text-3xl text-xl mt-15 font-semibold text-blue-800">
            جست و جوی پزشک
          </h2>
          <div className="bg-white mt-12 md:my-10 py-3 px-2 w-full  rounded-full max-w-280 md:mt-10 flex justify-center items-center">
            <input
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                dispatch(setDoctorName(e.target.value));
              }}
              placeholder="نام دکتر مورد نظر را جست و جو کنید"
              type="text"
              className=" bg-white rounded-full md:py-3  px-4 mx-2 text-blue-950 outline-blue-300 py-2 w-full "
            />
            <FaMagnifyingGlass className="text-2xl text-blue-500 mx-4" />
          </div>
          <Doctors />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SearchDoctors;
