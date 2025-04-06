import { Outlet, useNavigate } from "react-router-dom";
import useGetUser from "../features/doctors/authentication/useGetUser";
import { useEffect } from "react";

function ProtectedRoute() {
  const navigate = useNavigate();
  const { user } = useGetUser();
  useEffect(() => {
    if (user?.role === "authenticated") navigate("/");
    if (user?.role !== "authenticated") navigate("/login");
  }, [navigate, user?.role]);

  return <Outlet />;
}

export default ProtectedRoute;
