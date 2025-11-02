import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllApps from "../pages/AllApps/AllApps";
import AppDetails from "../pages/AppDetails/AppDetails";
import Installation from "../pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/AllApps",
        Component: AllApps,
      },
      {
        path: "/Installation",
        Component: Installation
      },
      {
        path: "/app/:id",
        Component: AppDetails,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
