import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginApi } from "../../../services/apiUser";

function useLogin() {
  const QueryClient = useQueryClient();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ["Users"] });
      console.log("شد");
    },
    onError: () => console.log("لاگین نشد"),
  });

  return { login, isPending };
}

export default useLogin;
