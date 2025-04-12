import { useNavigate } from "react-router-dom";
import useGetUser from "../features/doctors/authentication/useGetUser";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user, isLoading } = useGetUser();
  console.log(user);

  useEffect(() => {
    if (user?.role !== "authenticated" && !isLoading) navigate("/login");
  }, [isLoading, navigate, user?.role]);

  if (user?.role === "authenticated") return children;
}

export default ProtectedRoute;
