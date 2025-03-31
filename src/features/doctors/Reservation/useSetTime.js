import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setTime } from "../../../services/apiDoctors";
import toast from "react-hot-toast";

function useSetTime() {
  const queryClient = useQueryClient();
  const {
    mutate: setVisitTime,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({ time, doctorId }) => {
      setTime({ time, doctorId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["doctors"] });
      toast.success("نوبت شما با موفقیت ثبت شد");
    },
    onError: (err) => toast.error(err.message),
  });

  if (error) console.log(error.message);

  return { setVisitTime, isPending };
}

export default useSetTime;
