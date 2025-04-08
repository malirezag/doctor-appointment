import Button from "./Button";

function JoinRequest() {
  return (
    <div className="h-screen mt-25 bg-blue-50 ">
      <div className="w-full absolute flex justify-center items-center h-[80%] ">
        <img
          src="/form.png"
          alt=""
          className="absolute left-38 sm:mb-50 mb-62 w-20 md:w-30"
        />
        <div className=" bg-white mt-30 py-15 px-15 rounded-2xl mx-5">
          <div className="text-center md:space-y-12 space-y-4 ">
            <h3 className="md:text-3xl text-blue-950 text-xl">
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

      <img src="/Union.png" alt="" />
    </div>
  );
}

export default JoinRequest;
