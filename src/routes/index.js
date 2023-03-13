import { createBrowserRouter } from "react-router-dom";
import Welcom from "../view/Welcom";

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
