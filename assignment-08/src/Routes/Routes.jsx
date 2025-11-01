import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllApps from "../pages/AllApps/AllApps";
import AppDetails from "../pages/AppDetails/AppDetails";

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
        path: "/app/:id",
        Component: AppDetails,
      },
      {
        path: "*", // <- catches invalid child routes
        Component: ErrorPage,
      },
    ],
  },
]);
