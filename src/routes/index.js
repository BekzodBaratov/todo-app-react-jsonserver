import { createBrowserRouter } from "react-router-dom";
import Welcom from "../view/Welcom";
import Contact from "../view/Contact";

export default createBrowserRouter([
  {
    path: "/",
    element: <Welcom />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
