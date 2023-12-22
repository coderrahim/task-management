import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Dashboard from "../Components/Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Contact from "../Components/Pages/Home/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      
      children: ([
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/registration',
          element: <Registration></Registration>
        },
        {
          path: '/dashboard',
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
      ])
    },
  ]);

export default router;