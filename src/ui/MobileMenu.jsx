import { CgLoadbarDoc } from "react-icons/cg";
import { FaUserDoctor } from "react-icons/fa6";
import { FcOvertime } from "react-icons/fc";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function MobileMenu() {
  return (
    <div className="fixed flex justify-around w-full bottom-0  bg-blue-100 items-center text-2xl text-blue-500 rounded-t-2xl py-2 md:hidden">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "bg-white p-3 rounded-full " : "p3"
        }
      >
        <IoHomeOutline />
      </NavLink>
      <NavLink
        to="/specialities"
        className={({ isActive }) =>
          isActive ? "bg-white p-3 rounded-full " : "p3"
        }
      >
        <CgLoadbarDoc />
      </NavLink>
      <NavLink
        to="/doctor"
        className={({ isActive }) =>
          isActive ? "bg-white p-3 rounded-full " : "p3"
        }
      >
        <FaUserDoctor />
      </NavLink>
      <NavLink
        to="/appointment"
        className={({ isActive }) =>
          isActive ? "bg-white p-3 rounded-full " : "p3"
        }
      >
        <FcOvertime />
      </NavLink>
    </div>
  );
}

export default MobileMenu;
