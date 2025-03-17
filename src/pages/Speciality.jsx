import Button from "../ui/Button";
import Header from "../ui/Header";

function Speciality() {
  return (
    <div className="h-screen w-full bg-blue-50">
      <Header />
      {/* bg images */}
      <div className="flex">
        {" "}
        <img src="/DNA.png" alt="" className="w-60 absolute" />
        <img
          src="/heart.png"
          alt=""
          className="w-80 absolute left-0 bottom-0"
        />
      </div>
      {/* search bar an list */}
      <div className=" absolute w-full flex flex-col items-center justify-center px-30 h-screen">
        <div className="bg-white w-full py-3 rounded-2xl px-4 flex ">
          <input
            type="text"
            placeholder="تخصص مورد نظر را جستوجو کنید"
            className="w-full focus:outline-3 focus:outline-blue-200 p-2 ml-5 rounded-xl"
          />
          <Button>جستوجوی تخصص</Button>
        </div>
        <div>items</div>
      </div>
    </div>
  );
}

export default Speciality;
