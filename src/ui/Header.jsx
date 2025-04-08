import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import NavBtn from "./NavBtn";
import useGetUser from "../features/doctors/authentication/useGetUser";
import { RxExit } from "react-icons/rx";
import { GoPerson } from "react-icons/go";
import useLogout from "../features/doctors/authentication/useLogout";

function Header() {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const { user } = useGetUser();

  return (
    <header
      className="md:flex justify-between px-15 pt-8 items-center
     font-medium text-gray-800 hidden "
    >
      <div className="flex gap-13 items-center text-nowrap">
        <button
          className="flex gap-1 items-center font-bold text-lg cursor-pointer "
          onClick={() => navigate("/")}
        >
          <span>
            <img src="/logo.png" alt="logo" />
          </span>
          سامانه نوبت دهی پزشکیار
        </button>
        <NavBtn to="/appointment">نوبت های من </NavBtn>
        <NavBtn to="/specialities  ">تخصص ها</NavBtn>
        <NavBtn to="/doctor">جستوجوی پزشک</NavBtn>
        {/* <NavBtn to="/contact">ارتباط با ما</NavBtn> */}
      </div>
      {user?.role === "authenticated" ? (
        <div className="text-2xl flex flex-row gap-4 items-center">
          <button
            onClick={logout}
            className="cursor-pointer flex flex-row gap-3 items-center"
          >
            <p className="text-xl">خروج</p>
            <RxExit />
          </button>
          <button className="cursor-pointer">
            <GoPerson />
          </button>
          <p className="text-lg">{user.user_metadata.fullname}</p>
        </div>
      ) : (
        <NavLink to="/login">
          {" "}
          <Button>ورود/ثبت نام</Button>
        </NavLink>
      )}
    </header>
  );
}

export default Header;
