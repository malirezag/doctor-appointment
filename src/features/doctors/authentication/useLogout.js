import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "../../../services/apiUser";

function useLogout() {
  const queryClient = useQueryClient();
  const { mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ active: true });
    },
    onError: (err) => {
      console.log(err.message);
    },
  });
  return { logout };
}

export default useLogout;
