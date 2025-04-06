import { useMutation } from "@tanstack/react-query";
import { setReservations as setReservationsApi } from "../../../services/apiReservation";

function useSetReservation() {
  const { mutate: setReservations, isPending2 } = useMutation({
    mutationFn: (reservation) => setReservationsApi({ reservation }),
  });

  return { setReservations, isPending2 };
}

export default useSetReservation;
