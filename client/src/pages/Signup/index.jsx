import Container from "../../components/UI/Container";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();
  async function registerUser(e) {
    e.preventDefault();
    try {
      await axios.post('/register', {
        name,
        email,
        phoneNumber,
        password,
        userType,
      });
      alert("Registration successful. Now you can login");
      navigate("/login");

    } catch (e) {
      alert("Registration failed. Please try again later");
    }
  }

  return (
    <>
      <Navbar />
      <section className="min-h-screen flex items-center justify-center bg-black-50 py-12 px-4 sm:px-6 lg:px-8">
        <Container>

          <div>
            <h2 className="mt-3 mb-4 text-center text-3xl font-bold tracking-tight text-gray-900" >
              Welcome, Lets Sign up
            </h2>

          </div>
          <div>
            <div className="flex flex-col items-center sm:justify-center sm:pt-0 ">
              <div className="w-full p-6 overflow-hidden bg-neutral-800 shadow-sm sm:max-w-lg sm:rounded-md">
                <form onSubmit={registerUser}>
                  <div>

                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white undefined">
                      Enter Full Name
                    </label>
                    <div className="flex flex-col items-start">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="block w-full mt-1 p-2 border-gray-300  shadow-sm outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white undefined"
                    >
                      Enter Email
                    </label>
                    <div className="flex flex-col items-start">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="block w-full mt-1  p-2 border-gray-300 rounded-md outline-none shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="phonenumber" className="block text-sm font-medium text-white">
                      Enter Phone number
                    </label>
                    <div className="flex flex-col items-start">
                      <input
                        type="tel"
                        name="number"
                        placeholder="Your Phone number"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        className="block w-full mt-1  p-2 border-gray-300 rounded-md shadow-sm outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-white undefined"
                    >
                      Enter Password
                    </label>
                    <div className="flex flex-col items-start">
                      <input
                        type="password"
                        name="password"
                        placeholder="Your password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="block w-full mt-1  p-2 border-gray-300 rounded-md shadow-sm outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="password_confirmation"
                      className="block text-sm font-medium text-white undefined"
                    >
                      Enter Confirm Password
                    </label>
                    <div className="flex flex-col items-start">
                      <input
                        type="password"
                        name="password_confirmation"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="block w-full mt-1  p-2 border-gray-300 rounded-md shadow-sm outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="userType" className="block text-sm font-medium text-white">
                      Enter Role
                    </label>
                    <div className="relative inline-block w-full text-gray-600">
                      <select
                        className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border outline-none rounded-lg appearance-none focus:shadow-outline"
                        name="userType"
                        value={userType}
                        onChange={e => setUserType(e.target.value)}
                      >
                        <option value="">Select Role </option>
                        <option value="admin">Admin</option>
                        <option value="employee">Employee</option>
                        <option value="user">User</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M14.95 7.879L10 12.828l-4.95-4.95A1.5 1.5 0 014.879 6H15.12a1.5 1.5 0 011.06 2.879z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mt-4">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-blue-600"
                    >
                      Register
                    </button>
                  </div>
                </form>
                <div className="mt-4 text-white">
                  Already have an account?{" "}
                  <span>
                    <a className="text-red-700 over:underline" href="login">
                      Log in
                    </a>
                  </span>
                </div>


              </div>
            </div>
          </div>

          {/* {<script>
          const googleLoginBtn = document.getElementById("google-login-btn");
          googleLoginBtn.addEventListener("click", function() {
            // Code to trigger when the button is clicked
            console.log("Button clicked!")
          });
        </script>} */}

        </Container>
      </section>
      {/* <Footer/> */}
    </>

  );
};

export default Signup;
