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
import AllUsers from "../Pages/Dashboard/AdminDashboard/AllUsers/AllUsers";
import AdminRoute from "../Private/AdminRoute";
import AddItems from "../Pages/Dashboard/AdminDashboard/AddItems/AddItems";


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
        // user routes
        {
          path: 'cart',
          element: <PrivateRoute><Cart /></PrivateRoute>
        },

        //admin routes
        {
          path: 'allUsers',
          element: <AdminRoute><AllUsers /></AdminRoute>
        },
        {
          path: 'addItems',
          element: <AdminRoute><AddItems /></AdminRoute>
        },
      ]
    }
  ]);

  export default router