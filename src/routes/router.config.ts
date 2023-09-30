import { RouteObject } from "react-router-dom";
import IndexPage from ".";

export const applicationRoutes: RouteObject[] = [
  {
    path: "/",
    Component: IndexPage,
  },
];
