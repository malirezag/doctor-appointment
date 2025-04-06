import { useQuery } from "@tanstack/react-query";
import { getReservations } from "../../../services/apiReservation";
import useGetUser from "../authentication/useGetUser";

function useGetReservations() {
  const { user } = useGetUser();

  const { data: resetvations, isLoading } = useQuery({
    queryFn: () => getReservations({ userId: user?.id }),
    queryKey: ["reservations"],
  });

  return { resetvations, isLoading };
}

export default useGetReservations;
