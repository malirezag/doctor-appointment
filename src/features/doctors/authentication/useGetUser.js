import { useQuery } from "@tanstack/react-query";
import { getUserApi } from "../../../services/apiUser";

function useGetUser() {
  const { data: user, error } = useQuery({
    queryKey: ["authUser"],
    queryFn: getUserApi,
  });

  if (error) console.log(error.message);

  return { user };
}

export default useGetUser;
