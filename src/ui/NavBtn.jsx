import { NavLink } from "react-router-dom";

function NavBtn({ children, to }) {
  return (
    <NavLink to={to}>
      <button className="cursor-pointer text-nowrap py-1">{children}</button>
    </NavLink>
  );
}

export default NavBtn;
