import ServiceItem from "./ServiceItem";

function Services() {
  return (
    <>
      {" "}
      <h2 className="text-center text-4xl font-bold text-blue-800">
        خدمات ما
      </h2>{" "}
      <div className="min-h-screen flex items-center  ">
        <img src="/Shape.png" alt="" className="absolute" />

        {/* items */}

        <div className="absolute flex flex-row w-full px-10 ">
          <ServiceItem
            image={"/item1.png"}
            title={"نوبت‌دهی آنلاین پزشکان"}
            exp={
              "به صورت 24 ساعته از پزشکان متخصص و با تجربه نوبت اینترنتی دریافت کنید. اولین نوبت خالی برای ملاقات حضوری با پزشک  را به راحتی دریافت کنند."
            }
            className={"bg-blue-100 text-blue-900"}
          />

          <ServiceItem
            image={"/item2.png"}
            title={"مشاوره تلفنی با پزشک"}
            exp={
              "برای مشاوره گرفتن از پزشک نیازی به مراجعه به مطب نیست، پزشک با شما تماس می‌گیرد و یا می توانید از مشاوره متنی بهرمند شوید و برای پزشک سوال خود را در پیام رسان ارسال کنید."
            }
            className={
              "bg-linear-to-br from-blue-500 to-indigo-700 text-blue-50 "
            }
          />
          <ServiceItem
            image={"/Ambulance.png"}
            title={"صرفه جویی در زمان و هزینه"}
            exp={
              "در سریع ترین زمان ممکن میتوانید از پزشک مورد نظر خود وقت ملاقات دریافت کنید و از ساعت فعالیت پزشکان در کلینیک اطلاعات کسب کنید."
            }
            className={"bg-blue-100 text-blue-900"}
          />
        </div>
      </div>
    </>
  );
}

export default Services;
