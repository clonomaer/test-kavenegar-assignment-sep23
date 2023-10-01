import { RouteObject } from "react-router-dom";
import IndexPage from ".";
import TicketPage from "./ticket";

export const applicationRoutes: RouteObject[] = [
  {
    path: "/",
    Component: IndexPage,
  },
  {
    path: "/ticket",
    Component: TicketPage,
  },
];
