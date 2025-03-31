import useGetUser from "../features/doctors/authentication/useGetUser";
import useGetReservations from "../features/doctors/Reservation/useGetReservations";

function Appointment() {
  const { resetvations } = useGetReservations();
  const { user } = useGetUser();
  //   console.log(user);

  return <div></div>;
}

export default Appointment;
