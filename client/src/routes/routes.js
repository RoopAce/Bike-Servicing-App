import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from '../layouts/dashboard';
import SimpleLayout from '../layouts/simple';

// pages
import DashboardAppPage from '../pages/DashboardAppPage';

// ----------------------------------------------------------------------

import Home from "../pages/Home";
import Services from "../pages/Services";
import Appointment from "../pages/Appointment";
import Contact from "../pages/Contact";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

// import Logout from "./pages/Logout";
import UserPage from '../pages/UserPage';
import EmployeePage from '../pages/EmployeePage'
import Blog from '../pages/BlogPage'

import axios from "axios";

// import NotFound from "./pages/NotFound";

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
        path: "/",
        element: <Home />,
        index: true
    },
    {
        path: "services",
        element: <Services />
    },
    {
        path: "appointment",
        element: <Appointment />
    },
    {
        path: "contact",
        element: <Contact />
    },
    {
        path: "signup",
        element: <Signup />
    },
    {
        path: "login",
        element: <Login />
    },
    // {
    //     path: "*",
    //     element: <NotFound />
    // },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'employee', element: <EmployeePage /> },
        // { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        // { path: '404', element: <Page404 /> },
        // { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}