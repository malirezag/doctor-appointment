import { useSearchParams } from "react-router-dom";

function Doctor({ image, name, id }) {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleClick() {
    searchParams.set("doctor", id);
    setSearchParams(searchParams);
  }
  return (
    <button
      onClick={handleClick}
      className="flex flex-row items-center gap-3 bg-white w-80 px-5 py-3 rounded-full cursor-pointer"
    >
      <img src={image} alt={name} className="w-15" />
      <p className="text-sm font font-semibold">{name}</p>
    </button>
  );
}

export default Doctor;
