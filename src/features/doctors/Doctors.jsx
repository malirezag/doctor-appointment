import Doctor from "../../ui/Doctor";
import Spinner from "../../ui/Spinner";
import useDoctors from "./useDoctors";

function Doctors() {
  const { doctors, isLoading } = useDoctors();

  if (isLoading) return <Spinner />;

  return (
    <div className="flex justify-around w-280 flex-wrap gap-5 items-center">
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
        <p className="text-gray-400"> در این زمینه پزشکی موجود نیست !! </p>
      )}
    </div>
  );
}

export default Doctors;
