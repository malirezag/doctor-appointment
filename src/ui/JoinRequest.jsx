import Button from "./Button";

function JoinRequest() {
  return (
    <div className="pb-15 bg-blue-50 bg-[url(/Union.png)] bg-right bg-no-repeat ">
      <div className="w-full flex-col flex justify-center items-center h-[80%] ">
        <img src="/form.png" alt="" className=" translate-y-10 w-20 md:w-30" />
        <div className=" bg-white py-15 px-15 rounded-2xl mx-5 ">
          <div className="text-center md:space-y-12 space-y-7 ">
            <h3 className="md:text-3xl text-blue-950 text-2xl">
              درخواست عضویت پزشکان
            </h3>
            <p className="text-blue-900 text-sm md:text-base">
              پزشکان گرامی، شما می‌توانید با عضویت در سایت، از تمامی سرویس‌ها و
              خدمات سامانه ما بهرمند شوید. همچنین کسب‌و‌کار آنلاینتان را رشد و
              بهبود دهید.
            </p>
            <Button>درخواست عضویت</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinRequest;
