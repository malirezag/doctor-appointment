import { useQuery } from "@tanstack/react-query";
import { getDoctors } from "../../services/apiDoctors";
import { useSearchParams } from "react-router-dom";

function useDoctors() {
  const [searhParams] = useSearchParams();
  let speciality = searhParams.get("speciality");
  const {
    data: doctors,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: () => getDoctors({ speciality }),
  });

  if (error) console.log(error.message);

  return { doctors, isLoading };
}

export default useDoctors;
