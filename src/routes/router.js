import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About/About/About";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact/Contact";
import Home from "../pages/Home/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
    ],
  },
]);
