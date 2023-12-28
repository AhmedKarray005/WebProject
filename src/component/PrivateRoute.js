import React from "react";
import { Navigate } from "react-router-dom";
import { UserRole } from "./UserRole";

function PrivateRoute({ children, allowedRoles }) {
  const role = UserRole();
  console.log(role);
  console.log("IT WORKS HERE");

  // Check if there is a valid role
  if (!role) {
    console.log("there is no role");

    // No valid token or role, redirect to the login page
    return <Navigate to="/Donate" />; // Adjust the redirect route as needed
  }

  // Check if the role is allowed
  if (!allowedRoles.includes(role)) {
    // Redirect to a default route when the role is not allowed
    console.log("role is not true");
    return <Navigate to="/contact" />;
  }

  // The role is allowed, render the children
  console.log("Rendering children");
  return  <div>{children}</div>;
}

export default PrivateRoute;
