import { Navigate, Outlet } from "react-router-dom";
import useGetUser from "../features/doctors/authentication/useGetUser";
import { useEffect } from "react";

function ProtectedRoute() {
  const { user } = useGetUser();
  useEffect(() => {}, [user?.role]);

  return user?.role === "authenticated" ? <Outlet /> : Navigate("/");
}

export default ProtectedRoute;
