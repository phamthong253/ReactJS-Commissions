import { Navigate, Outlet, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import instance from "../../interceptor/axios";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth.component";

// Kiểm tra quyền truy cập của người dùng
// Component ProtectedRoute
const ProtectedRoute = ({ allowedRoles }) => {
  const { auth, user, setUser } = useAuth();

  const location = useLocation();

  useEffect(() => {
    instance.get("/user/current").then((response) => {
      setUser(response.data.data);
    });
  }, []);
  if(user && user.roles){
    const isAdmin = user.roles.find((role) => role.name === "Admin") ? true : false
    if(!isAdmin){
      allowedRoles = isAdmin
      console.log("Ban khong phai la Admin")
    }else if(isAdmin){
      allowedRoles = isAdmin
    }else(
      console.log("ban chua dang nhap!")
      )
  }
  return auth && allowedRoles || !allowedRoles ? (
    <Outlet />
  ) : (
    <Navigate to={"/signin"} state={{ from: location }} replace />
  );
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  allowedRoles: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]).isRequired,
};
