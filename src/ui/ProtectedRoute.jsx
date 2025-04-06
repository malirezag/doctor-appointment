import { Outlet, useNavigate } from "react-router-dom";
import useGetUser from "../features/doctors/authentication/useGetUser";
import { useEffect } from "react";

function ProtectedRoute() {
  const navigate = useNavigate();
  const { user } = useGetUser();
  useEffect(() => {}, [user?.role]);

  return user?.role === "authenticated" ? <Outlet /> : navigate("/");
}

export default ProtectedRoute;
