import { NavLink } from "react-router-dom";

function NavBtn({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "border-b-3 border-b-blue-200 rounded-sm" : ""
      }
    >
      <button className="cursor-pointer text-nowrap py-1">{children}</button>
    </NavLink>
  );
}

export default NavBtn;
