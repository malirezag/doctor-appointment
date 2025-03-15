import Button from "./Button";
import Header from "./Header";

function HomeBanner() {
  return (
    <div className="bg-[url(/banner.png)] bg-cover h-screen">
      <Header />
      {/* doctor logo and main text */}
      <div
        className="flex justify-around items-center max-w-250
       mx-auto gap-25 px-10 pt-15"
      >
        <div className="flex flex-col gap-10 items-start">
          <h1 className="text-5xl leading-18">
            سامانه نوبت دهی پزشکان و مشاوره آنلاین
          </h1>
          <button
            className="bg-white px-5 py-3 rounded-sm shadow-lg
           shadow-blue-200 flex flex-row gap-1"
          >
            <span>
              <img src="/pasient.png" alt="" />
            </span>
            لیست تخصص های پزشکی
          </button>
        </div>

        <img src="/Doc.png" alt="" className="h-75" />
      </div>

      {/* search pannel */}

      <div
        className="bg-blue-500 h-30 max-w-280 mx-auto mt-15 
       rounded-2xl flex items flex-row justify-center items-center "
      >
        <div
          className=" bg-blue-50 flex items-center justify-center
         flex-row py-4 px-10 gap-13 rounded-2xl"
        >
          <select name="" id="">
            <option value="">انتخاب پزشک و متخصص</option>
          </select>

          <select name="" id="">
            <option value="">انتخاب تخصص </option>
          </select>

          <label htmlFor="" className="flex flex-row">
            <input type="radio" />
            <p>مشاوره آنلاین</p>
          </label>

          <label htmlFor="" className="flex flex-row">
            <input type="radio" />
            <p>مشاوره آنلاین</p>
          </label>

          <Button>جستوجوی پزشک</Button>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
