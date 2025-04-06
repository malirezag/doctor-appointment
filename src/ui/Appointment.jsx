import { NavLink } from "react-router-dom";
import useGetUser from "../features/doctors/authentication/useGetUser";
import useGetReservations from "../features/doctors/Reservation/useGetReservations";

function Appointment({ reservation }) {
  const { resetvations } = useGetReservations();

  return (
    <div className="h-80 w-72 bg-white rounded-xl p-3 flex flex-col gap-8 justify-center items-center ">
      <div className="flex flex-col items-center gap-4">
        <img src={reservation?.doctor.photo} alt="doctor" className="w-23" />
        <h3 className="font-semibold">{reservation.doctor.fullname}</h3>
      </div>

      <p>
        <span>ساعت</span> {reservation.time}
      </p>
      <p>{reservation.date}</p>
    </div>
  );
}

export default Appointment;
