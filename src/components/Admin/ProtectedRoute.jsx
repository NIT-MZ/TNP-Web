import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../../context/UserContext.jsx";

const ProtectedRoute = ({ children }) => {
  const { userDetail } = useContext(UserContext);

  if (!userDetail) {
    // Redirect to login if user is not authenticated
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
