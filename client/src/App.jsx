import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes/routes';

// theme
import ThemeProvider from './theme';

// components
import ScrollToTop from './components/scroll-to-top';
// import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"

// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";

// import Root from "./routes";

// import Home from "./pages/Home";
// import Services from "./pages/Services";
// import Appointment from "./pages/Appointment";
// import Contact from "./pages/Contact";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// // import Logout from "./pages/Logout";

// import axios from "axios";

// import NotFound from "./pages/NotFound";

// axios.defaults.baseURL = 'http://localhost:4000';
// axios.defaults.withCredentials = true;

// const pageRouter = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<Root />}>
//       <Route path="/" element={<Home />}></Route>
//       <Route path="services" element={<Services />}></Route>
//       <Route path="appointment" element={<Appointment />}></Route>
//       <Route path="contact" element={<Contact />}></Route>
//       <Route path="signup" element={<Signup />}></Route>
//       <Route path="login" element={<Login />}></Route>
//       <Route path="logout" element={<Logout />}></Route>


//       <Route path="*" element={<NotFound />}></Route>
//     </Route>
//   )
// );

// const App = () => {
//   return <RouterProvider router={pageRouter} />;
// };

// export default App;

export default function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <ThemeProvider>
            <ScrollToTop />
            {/* <Navbar/> */}
            <Router />
            {/* <Footer/> */}
          </ThemeProvider>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}



// --- Admin Routes

// <Routes>
//   <Route path="/" element={<Layout />}>
//     <Route index element={<Dashboard />} />
//     <Route path="admin/branch" element={<CreateBranch />} />
//     <Route path="/admin/totalusers" element={<TotalUser />} />
//     <Route path="/admin/totalemployee" element={<TotalEmployee />} />
//     <Route path="/admin/totalproducts" element={<TotalProduct />} />
//     <Route path="/admin/createemployee" element={<CreateEmployee />} />
//   </Route>
// </Routes>



