import { createBrowserRouter } from "react-router-dom";
import { queryClient } from "./query-client";
import { HomePage } from "./home/HomePage";
import { loader as homePageLoader } from "./home/homePageLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: homePageLoader(queryClient),
  },
]);
