import { Navigate } from "react-router-dom";
// import Container from "../../components/UI/Container";
import React, { useState } from "react";
import axios from "axios";
import roopImage from '../../assets/images/bike.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  async function handleLoginSubmit(e) {
    e.preventDefault();
    try {
      await axios.post('/login', {email,password});
      alert('Login Successful');
      setRedirect(true);
    } catch(e) {
      alert('Login failed');
    }
   
  }

    if (redirect) {
      return <Navigate to={'/dashboard'} />
    }

  return (
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
        {/* <div className=" min-w-[50%]">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            <a
              href="/"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Login to get started with Ace Garage
            </a>
          </p>
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleLoginSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  value={email} onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="/"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Sign in
              </button>
            </div>
          </form>
        </div> */}
      
    </section>
  );
};

export default Login;
