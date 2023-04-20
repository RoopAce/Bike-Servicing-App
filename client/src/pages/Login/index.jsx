import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import cookie from 'cookie';

import Navbar from "../../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleLoginSubmit(e) {
    e.preventDefault();
    try {
      await axios.post('/login', { email, password });
      const cookies = cookie.parse(document.cookie);
      const userData = JSON.parse(cookies.userData);
      const userType = userData.userType;

      if (userType === 'admin') {
        alert('Login Successful as an Admin');
        navigate("/dashboard", { state: { userType: "Admin" } });
      } else if (userType === 'user') {
        alert('Login Successful as a User');
        navigate("/userdashboard", { state: { userType: "User" } });
      }
      else if (userType === "employee") {
        alert('Login Successful as an Employee');
        navigate("/empdashboard", { state: { userType: "Employee" } });
      }

    } catch (e) {
      alert('Login failed');
    }

  }

  return (
    <>
      <Navbar />
      <section className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-full max-w-md">
          <h1 className="mb-4 text-3xl font-semibold text-black dark:text-gray-200 text-center">
            Login into the account
          </h1>
          <div className="bg-neutral-800 p-5">
            <form className="mt-8 space-y-6 " action="#" method="POST" onSubmit={handleLoginSubmit}>
              <label className="block text-sm">
                <span className="text-white dark:text-gray-400">Email Address</span>
                <input
                  className="block w-full mt-1 p-2 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input rounded-md"
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
                <span className="text-white dark:text-gray-400">Password</span>
                <input
                  className="block w-full mt-1 p-2 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input rounded-md"
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

              <button
                type="submit"
                className="block w-full px-4 py-2 mt-4 text-md font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              >
                Log in
              </button>
            </form>
            <div className="mt-4 text-white">
              Didn't have an account?{" "}
              <span>
                <a className="text-red-700 over:underline" href="login">
                  Sign up
                </a>
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Login;
