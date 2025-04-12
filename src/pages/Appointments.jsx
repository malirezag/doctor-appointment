import { NavLink } from "react-router-dom";
import useGetReservations from "../features/doctors/Reservation/useGetReservations";
import Appointment from "../ui/Appointment";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Spinner from "../ui/Spinner";
import useGetUser from "../features/doctors/authentication/useGetUser";
import MobileMenu from "../ui/MobileMenu";

function Appointments() {
  const { resetvations, isLoading } = useGetReservations();
  const { user } = useGetUser();
  const isAuthenticated = user?.role === "authenticated";

  const res = resetvations?.filter((item) => item.patient === user.id);

  if (res?.length === 0)
    return (
      <>
        <MobileMenu />
        <div className="bg-blue-50">
          <Header />
          <div className="flex flex-col justify-center items-center min-h-[55vh] gap-5">
            <p className="text-2xl text-blue-950 font-semibold">
              هنوز نوبتی ثبت نکرده این برای ثبت نوبت روی لینک زیر کلیک کنید
            </p>
            <NavLink to="/specialities" className="text-lg text-blue-500">
              ثبت نوبت جدید
            </NavLink>
          </div>
          <Footer />
        </div>
      </>
    );
  if (isAuthenticated)
    return (
      <>
        <MobileMenu />
        <div className="bg-blue-50">
          <Header />

          {isLoading ? (
            <div className="min-h-[55vh] flex justify-center">
              <Spinner />
            </div>
          ) : (
            <div className="flex flex-row flex-wrap py-15 gap-10 justify-center">
              {resetvations?.map((reservation) => (
                <Appointment key={Math.random()} reservation={reservation} />
              ))}
            </div>
          )}

          <Footer />
        </div>{" "}
      </>
    );
}

export default Appointments;
