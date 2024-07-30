import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import ListUsers from "./pages/LiastUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Listagem",
    element: <ListUsers />,
  },
]);
export default router;
