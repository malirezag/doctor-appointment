import { useQuery } from "@tanstack/react-query";
import { getReservations } from "../../../services/apiReservation";

function useGetReservations() {
  const { data: resetvations, isLoading } = useQuery({
    queryFn: getReservations,
    queryKey: ["reservations"],
  });

  return { resetvations, isLoading };
}

export default useGetReservations;
