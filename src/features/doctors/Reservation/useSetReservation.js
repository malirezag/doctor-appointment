import { useMutation } from "@tanstack/react-query";
import { setReservations as setReservationsApi } from "../../../services/apiReservation";

function useSetReservation() {
  const { mutate: setReservations, isPending } = useMutation({
    mutationFn: (reservation) => setReservationsApi({ reservation }),
  });

  return { setReservations, isPending };
}

export default useSetReservation;
