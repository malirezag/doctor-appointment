import Button from "./Button";
import NavBtn from "./NavBtn";

function Header() {
  return (
    <header
      className="flex justify-between px-15 pt-8 items-center
     font-medium text-gray-800 "
    >
      <div className="flex gap-13 items-center text-nowrap">
        <h3 className="flex gap-1 items-center font-bold text-lg">
          <span>
            <img src="/logo.png" alt="logo" />
          </span>
          سامانه نوبت دهی پزشکیار
        </h3>
        <NavBtn to="/appointment">نوبت دهی مطب</NavBtn>
        <NavBtn to="/expert">تخصص ها</NavBtn>
        <NavBtn to="/doctor">جستوجوی پزشک</NavBtn>
        <NavBtn to="/contact">ارتباط با ما</NavBtn>
      </div>
      <Button>ورود/ثبت نام</Button>
    </header>
  );
}

export default Header;
