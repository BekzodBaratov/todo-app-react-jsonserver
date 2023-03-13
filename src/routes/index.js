import { createBrowserRouter } from "react-router-dom";
import Welcom from "../components/Welcom";

export default createBrowserRouter([
  {
    path: "/",
    element: <Welcom />,
  },
  {
    path: "/about",
    element: <p>about</p>,
  },
]);
