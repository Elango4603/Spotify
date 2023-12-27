import React from "react";
import Login from "../Components/Login";
import Demo from "../Components/Demo";
import MainContent from "../Components/MainContent";
import { Navigate, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/home",
    element: <Demo />,
  },
  {
    path: "/maincontent",
    element: <Navigate to="/home/maincontent" />,
  },

  {
    path: "/home/maincontent",
    element: <MainContent />,
  },
]);
