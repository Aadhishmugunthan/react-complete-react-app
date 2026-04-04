import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const isLoggedIn =
    localStorage.getItem("isLoggedIn");

  console.log("isLoggedIn:", isLoggedIn);

  if (isLoggedIn !== "true") {

    return (
      <Navigate to="/login" />
    );

  }

  return children;

};

export default ProtectedRoute;