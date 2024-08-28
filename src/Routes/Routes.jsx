import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:'/',
          element: <Home />
        },
        {
          path: '/menu',
          element: <OurMenu />
        }
      ]
    },
  ]);

  export default router