import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // Redirect if user is not logged in
    return <Navigate to="/login" />;
  }

  return children;
}
