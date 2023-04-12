import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from '../layouts/dashboard';
import SimpleLayout from '../layouts/simple';
import UserDashboardLayout from '../layouts/dashboard copy/UserDashboardLayout';
import EmpDashboardLayout from '../layouts/dashboard copy 2/EmpDashboardLayout'

// pages for UserDashboard
import DashboardAppPage from '../pages/DashboardAppPage';
import UserAppoint from '../pages/Userdashboard/UserAppoint';
import UserService from '../pages/Userdashboard/UserService';
import UserEmergency from '../pages/Userdashboard/UserEmergency';
import UserSparePart from '../pages/Userdashboard/UserSparePart';

// pages for employee 
import EmpDashboard from '../pages/Employeedashboard/EmpDashboard';
import EmpServiceOrder from '../pages/Employeedashboard/EmpServiceOrder';
import EmpAddService from '../pages/Employeedashboard/EmpAddService'
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


import axios from "axios";

import NotFound from '../pages/NotFound/'
// import NotFound from "./pages/NotFound";
import DashboardPage from './../pages/Userdashboard/DashboardPage';
import UserOrder from '../pages/Userdashboard/UserOrder';


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
        path: "/services",
        element: <Services />
    },
    {
        path: "/appointment",
        element: <Appointment />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/login",
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
      path: '/userdashboard',
      element: <UserDashboardLayout/>,
      children: [
        { element: <Navigate to="/userdashboard/userdashboard" />, index: true },
        { path: 'userdashboard', element: <DashboardPage /> },
        { path: 'useremergency', element: <UserEmergency /> },
        { path: 'userservice', element: <UserService /> },
        { path: 'userappointment', element: <UserAppoint /> },
        { path: 'userorder', element: <UserOrder /> }, 
        { path: 'usersparepart', element: <UserSparePart /> },
        
      ],
    },
    {
      path: '/empdashboard',
      element: <EmpDashboardLayout/>,
      children: [
        { element: <Navigate to="/empdashboard/empdashboard" />, index: true },
        { path: 'empdashboard', element: <EmpDashboard /> },
        { path: 'emporder', element: <EmpServiceOrder /> },
        { path: 'addservice', element: <EmpAddService /> },
        // { path: 'userappointment', element: <UserAppoint /> },
        // { path: 'userorder', element: <UserOrder /> },
        // { path: 'usersparepart', element: <UserSparePart /> },
        // { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <NotFound /> },
        
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}