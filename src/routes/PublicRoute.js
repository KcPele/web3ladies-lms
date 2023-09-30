import { lazy } from "react";
import { Navigate } from "react-router-dom";

const CreateAccount = lazy(() => import("../Pages/CreateAccount"));
const SignIn = lazy(() => import("../Pages/Signin"));
const publicRoute = () => {
  return [
    { path: "/registration", element: <CreateAccount /> },
    { path: "/login", element: <SignIn /> },

    { path: "*", element: <Navigate to="/login" replace /> },
  ];
};

export default publicRoute;
