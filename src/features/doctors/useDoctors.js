import { useQuery } from "@tanstack/react-query";
import { getDoctors } from "../../services/apiDoctors";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

function useDoctors() {
  const searchValue = useSelector((state) => state.SearchDoctors.doctorName);

  const [searhParams] = useSearchParams();
  let speciality = searhParams.get("speciality");
  const {
    data: doctors,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["doctors", searchValue],
    queryFn: () => getDoctors({ speciality, searchValue }),
  });

  if (error) console.log(error.message);

  return { doctors, isLoading };
}

export default useDoctors;
