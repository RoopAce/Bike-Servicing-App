import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-900">
      <footer className="container py-10 px-14 mx-auto">
        <div className="mt-16 mb-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center">
          <div className="mb-8 lg:mb-0">
            <p className="text-lg font-semibold text-white mb-6">Company</p>
            <ul className="flex flex-col space-y-4 font-medium text-lg text-gray-300">
              <li>About Us</li>
              <li>Company History</li>
              <li>Our Team</li>
              <li>Our Vision</li>
              <li>Press Release</li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="text-lg font-semibold text-white mb-6">Our Branch</p>
            <ul className="flex flex-col space-y-4 font-medium text-lg text-gray-300">
              <li>Kamalpokhari</li>
              <li>Dhungedhara</li>
              <li>Kalanki</li>
              <li>Hetauda</li>
              <li>Jorpati</li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="text-lg font-semibold text-white mb-6">Bike Services</p>
            <ul className="flex flex-col space-y-4 font-medium text-lg text-gray-300">
              <li>Bike Wash & Detailing</li>
              <li>Tire Inspection & Repair</li>
              <li>Oil Change & Lubrication</li>
              <li>Brake Maintenance</li>
              <li>Engine Tune-Up</li>
            </ul>
          </div>

          <div className="mb-8 lg:mb-0">
            <p className="text-lg font-semibold text-white mb-6">Legal</p>
            <ul className="flex flex-col space-y-4 font-medium text-lg text-gray-300">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Disclaimer</li>
              <li>Media Policy</li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="text-lg font-semibold text-white mb-6">Social Links</p>
            <ul className="flex flex-col space-y-4 font-medium text-lg text-gray-300">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex justify-between items-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <ul className="flex space-x-6 text-gray-300">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;