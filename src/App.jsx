import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./routes";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import axios from "axios";

import NotFound from "./pages/NotFound";

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

const pageRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="services" element={<Services />}></Route>
      <Route path="appointment" element={<Appointment />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="signup" element={<Signup />}></Route>
      <Route path="login" element={<Login />}></Route>

      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={pageRouter} />;
};

export default App;
