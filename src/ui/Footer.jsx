import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-700 flex flex-row justify-around py-20 border-blue bottom-0">
      {/* address and logo */}
      <div className=" text-blue-100 space-y-15">
        {" "}
        <h3 className="flex gap-1 items-center font-bold text-lg">
          <span className="text-3xl">
            <MdOutlineHealthAndSafety />
          </span>
          سامانه نوبت دهی پزشکیار
        </h3>
        <p className="text-sm">تهران گیشا کوچه ارغوان25 پلاک 180</p>
      </div>
      {/* services */}
      <div className="text-blue-100 space-y-4">
        <h2 className="text-lg font-bold">خدمات</h2>
        <div className="text-sm flex flex-col gap-4">
          <Link to="/specialities">جستوجوی پزشک</Link>
          <Link to="/specialities">نوبت دهی آنلاین</Link>
          <Link to="/specialities">مشاوره پزشکی</Link>
        </div>
      </div>
      {/* about us */}
      <div className="text-blue-100 space-y-4">
        <h2 className="text-lg font-bold">ارتباط با ما</h2>
        <div className="text-sm flex flex-col gap-4">
          <Link to="/contact"> درباره ما</Link>
          <Link> تماس با ما</Link>
          <Link> سوالات متداول</Link>
        </div>
      </div>
      {/* contact */}
      <div className="text-blue-100 space-y-8">
        <p>021-66553322</p>
        <p>test@test.com</p>
        <div className=" flex flex-row items-center w-full justify-around">
          <FaTelegramPlane />
          <FaWhatsapp />
          <LuPhone />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
