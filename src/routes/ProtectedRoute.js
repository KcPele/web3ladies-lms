import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ token, children }) => {
  const oldToken = localStorage.getItem("tokenUser");
  if (!oldToken || !token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
