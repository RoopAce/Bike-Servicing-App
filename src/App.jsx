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
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";

const pageRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="services" element={<Services />}></Route>
      <Route path="appointment" element={<Appointment />}></Route>
      <Route path="shop" element={<Shop />}></Route>
      <Route path="contact" element={<Contact />}></Route>

      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={pageRouter} />;
};

export default App;
