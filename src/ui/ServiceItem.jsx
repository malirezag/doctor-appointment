function ServiceItem({ title, image, exp, className }) {
  return (
    <div
      className={`${className} flex flex-col gap-8 md:max-w-80 max-w-70 py-13 rounded-3xl px-5  `}
    >
      <img src={image} alt="" className="w-40 h-4- md:h-50 md:w-50 mx-auto " />
      <div className="space-y-5">
        <h3 className="text-lg md:text-xl font-bold ">{title}</h3>

        <p className="text-sm text-blue">{exp}</p>
      </div>
    </div>
  );
}

export default ServiceItem;
