import { useNavigate } from "react-router-dom";
import Button from "./Button";
import NavBtn from "./NavBtn";

function Header() {
  const navigate = useNavigate();
  return (
    <header
      className="flex justify-between px-15 pt-8 items-center
     font-medium text-gray-800 "
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
        <NavBtn to="/appointment">نوبت دهی مطب</NavBtn>
        <NavBtn to="/specialities  ">تخصص ها</NavBtn>
        <NavBtn to="/doctor">جستوجوی پزشک</NavBtn>
        <NavBtn to="/contact">ارتباط با ما</NavBtn>
      </div>
      <Button>ورود/ثبت نام</Button>
    </header>
  );
}

export default Header;
