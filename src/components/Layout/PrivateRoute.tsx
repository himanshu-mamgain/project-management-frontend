import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  isLoggedIn: boolean;
}

export const PrivateRoute = ({ isLoggedIn }: PrivateRouteProps) => {
  return <>{isLoggedIn ? <Outlet /> : <Navigate to={"/login"} />}</>;
};
