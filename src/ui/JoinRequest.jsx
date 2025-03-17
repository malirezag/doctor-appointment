import Button from "./Button";

function JoinRequest() {
  return (
    <div className="h-screen mt-25 bg-blue-50 ">
      <div className="w-full absolute flex justify-center items-center h-[80%] ">
        <img src="/form.png" alt="" className="absolute left-50 mb-50" />
        <div className=" bg-white mt-30 py-15 px-15 rounded-2xl mx-5">
          <div className="text-center space-y-12 ">
            <h3 className="text-3xl text-blue-950">درخواست عضویت پزشکان</h3>
            <p className="text-blue-900">
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
