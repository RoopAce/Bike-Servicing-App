import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex flex-col justify-center items-center mt-[-100px]">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Get in Touch</h1>
          <form className="w-full">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-800 font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800 font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="example@example.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-800 font-bold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                placeholder="Enter your message here..."
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
