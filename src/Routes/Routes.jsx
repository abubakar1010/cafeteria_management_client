import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Orders from "../Pages/Orders/Orders";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "../Private/PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Cart/Cart";


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
          element: <PrivateRoute><OurMenu /></PrivateRoute>
        },
        {
          path: '/order/:category',
          element: <Orders />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Registration />
        },

      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard />,
      children:[
        {
          path: 'cart',
          element: <Cart />
        }
      ]
    }
  ]);

  export default router