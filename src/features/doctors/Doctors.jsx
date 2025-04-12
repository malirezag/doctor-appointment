import Doctor from "../../ui/Doctor";
import Spinner from "../../ui/Spinner";
import useDoctors from "./useDoctors";

function Doctors() {
  const { doctors, isLoading } = useDoctors();

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col md:flex-row justify-around w-280 flex-wrap gap-5 items-center my-10">
      {doctors.length !== 0 ? (
        doctors?.map((doctor) => (
          <Doctor
            name={doctor.fullname}
            image={doctor.photo}
            key={doctor.id}
            id={doctor.id}
          />
        ))
      ) : (
        <p className="text-gray-400 py-30"> پزشکی یافت نشد 😕</p>
      )}
    </div>
  );
}

export default Doctors;
