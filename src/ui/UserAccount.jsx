import { RxExit } from "react-icons/rx";
import useGetUser from "../features/doctors/authentication/useGetUser";
import useLogout from "../features/doctors/authentication/useLogout";
import { GoPerson } from "react-icons/go";
import { NavLink } from "react-router-dom";
import Button from "./Button";

function UserAccount({ className }) {
  const { user } = useGetUser();
  const { logout } = useLogout();
  return (
    <div className={className}>
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
    </div>
  );
}

export default UserAccount;
