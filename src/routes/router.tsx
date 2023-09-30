import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { applicationRoutes } from "./router.config";

const router = createBrowserRouter(applicationRoutes);

const ApplicationRouter = () => {
  return <RouterProvider router={router} />;
};

export default ApplicationRouter;
