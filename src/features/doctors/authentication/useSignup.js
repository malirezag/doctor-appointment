import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signupApi } from "../../../services/apiUser";
import toast from "react-hot-toast";

function useSignup() {
  const queryClient = useQueryClient();
  const { mutate: signup, isPending } = useMutation({
    mutationFn: ({ email, password, fullname }) =>
      signupApi({ email, password, fullname }),
    onSuccess: () => {
      queryClient.invalidateQueries({ active: true });
      toast.success(
        "برای تکمیل ساخت حساب به صندوق دریافت ایمیل های خود مراجعه کنید"
      );
    },
  });

  return { signup, isPending };
}

export default useSignup;
