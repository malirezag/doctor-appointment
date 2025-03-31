import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setTime } from "../../services/apiDoctors";
import toast from "react-hot-toast";

function useSetTime() {
  const queryclient = useQueryClient();
  const {
    mutate: setVisitTime,
    isPending,
    error,
  } = useMutation({
    mutationFn: (time, doctorId) => {
      setTime(time, doctorId);
    },
    mutationKey: ["doctors"],
    onSuccess: () => {
      queryclient.invalidateQueries({ active: true });
      toast.success("addes");
    },
    onError: (err) => toast.error(err.message),
  });

  if (error) console.log(error.message);

  return { setVisitTime, isPending };
}

export default useSetTime;
