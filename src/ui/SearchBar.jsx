import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "./Button";
import Spinner from "./Spinner";
import { useSelector } from "react-redux";
import useDoctors from "../features/doctors/useDoctors";

function SearchBar() {
  const { doctors, isLoading } = useDoctors();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const speciality = useSelector((state) => state.speciality.speciality);
  const urlspeciality = searchParams.get("speciality");
  const doctorId = searchParams.get("doctor");
  const selectedDoc = doctors?.filter(
    (doc) => Number(doc.id) === Number(doctorId)
  );

  if (isLoading) return <Spinner />;

  return (
    <div className="bg-white w-full py-3 rounded-2xl px-4 flex ">
      {urlspeciality && doctorId ? (
        <div className="flex items-center gap-5 w-full text-gray-600">
          <img src={selectedDoc[0].photo} alt={""} className="h-15 w-15 " />
          <p>
            <span className="text-lg font-semibold text-gray-800">
              {selectedDoc[0].fullname}
            </span>{" "}
            ( {` متخصص ${speciality === null ? "..." : speciality} `})
          </p>
        </div>
      ) : (
        <input
          type="text"
          value={urlspeciality ? speciality : ""}
          disabled={urlspeciality}
          placeholder="تخصص مورد نظر را جستوجو کنید"
          className="w-full focus:outline-3 focus:outline-blue-200 p-2 ml-5 rounded-xl font-semibold "
        />
      )}

      {/* buttons */}
      <Button className={`${urlspeciality || doctorId ? "hidden" : ""}`}>
        جستوجوی تخصص
      </Button>
      <Button
        onClick={() => navigate(-1)}
        className={`${urlspeciality && !doctorId ? "" : "hidden"}`}
      >
        بازگشت به تخصص ها
      </Button>
      <Button
        onClick={() => navigate(-1)}
        className={`${urlspeciality && doctorId ? "" : "hidden"}`}
      >
        بازگشت به انتخاب پزشک
      </Button>
    </div>
  );
}

export default SearchBar;
