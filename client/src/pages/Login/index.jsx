import  { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Container from "../../components/UI/Container";
import axios from "axios";
import roopImage from '../../assets/images/bike.jpg';

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import cookie from 'cookie';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  async function handleLoginSubmit(e) {
    e.preventDefault();
    try {
      await axios.post('/login', {email,password});
      const cookies = cookie.parse(document.cookie);
      const userData = JSON.parse(cookies.userData);
      const userType = userData.userType;
      console.log(userType);

      console.log(cookies);
      alert('Login Successful');
      if (userType === 'admin') {
        navigate("/dashboard", { state: { userType: "Admin" } });
      } else if (userType === 'user') {
        navigate("/userdashboard", { state: { userType: "User" } });
      }
      else if(userType == "employee"){
        navigate("/empdashboard", { state: { userType: "Employee" } });
      }
      
    } catch(e) {
      alert('Login failed');
    }
   
  }

  return (
    <>
    <Navbar/>
    <section>
      
      <div className="flex items-center min-h-screen p-6 bg-white dark:bg-white-900">
  <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-900">
    <div className="flex flex-col overflow-y-auto md:flex-row">
      <div className="h-32 md:h-auto md:w-1/2">
        <img
          aria-hidden="true"
          className="object-cover w-full h-full md:block"
          src={roopImage}
          alt="bikeservicing"
        />

          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Login
              </h1>
              <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleLoginSubmit}>
              <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">Email Address</span>
                <input
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  
                  placeholder="Joe@gmail.com"
                  value={email} onChange={e => setEmail(e.target.value)}
                />
              </label>
              <label className="block mt-4 text-sm">
                <span className="text-gray-700 dark:text-gray-400">Password</span>
                <input
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  
                  placeholder="**********"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </label>
              <div className="text-sm">
                <a
                  href="/"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
              <button
                type="submit"
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              >
                Log in
              </button>
              </form>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
      
    </section>
    <Footer/>
    </>
  );
};

export default Login;
