import Header from "../ui/Header";
import Footer from "../ui/Footer";
import specialityItems from "../helpers/specialityItems";
import Speciality from "../ui/Speciality";
import Reservation from "../ui/Reservation";
import Doctors from "../features/doctors/Doctors";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../ui/SearchBar";
import { useSelector } from "react-redux";

function Specialities() {
  const searchedItems = useSelector(
    (state) => state.speciality.searchSpeciality
  );
  const letterCount = useSelector((state) => state.speciality.letterCounter);
  console.log(letterCount);

  const [searchParams] = useSearchParams();
  const speciality = searchParams.get("speciality");
  const doctorId = searchParams.get("doctor");
  const items = specialityItems();
  console.log(items);

  const specialities = letterCount === 0 ? items : searchedItems;

  return (
    <>
      <div className="w-full bg-blue-50 pb-15">
        <Header />
        {/* bg images */}

        <div className="  w-full flex flex-col items-center px-30  gap-10 ">
          <h2 className=" text-4xl font-bold my-15 text-blue-800">تخصص ها</h2>
          {/* search bar an list */}
          <SearchBar />
          <div className="flex flex-wrap gap-8 max-w-280 justify-around py-5 space-y-5 ">
            {speciality
              ? ""
              : specialities.map((item) => (
                  <Speciality
                    type={item.type}
                    image={item.image}
                    title={item.title}
                    color={item.color}
                    key={item.title}
                  />
                ))}
            {speciality && !doctorId ? <Doctors /> : ""}
            {speciality && doctorId ? <Reservation /> : ""}
            {/* <button className="bg-blue-500 text-blue-50 text-lg py-2 w-full rounded-md">
              موارد بیشتر...
            </button> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Specialities;
