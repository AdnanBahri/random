import React from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const isLoggedIn = false;
  return isLoggedIn ? children : navigate("/sign-in");
};

export default ProtectedRoute;
