import React from "react";
import "./footer.css";
import IMG from "../../images/logo.png"

const Footer = () => {
  return (
    <footer className=" rounded-lg  m-0"> {/* Set margin to 0 */}
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="../../home" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={IMG} className="h-8" alt='' style={{ width: '30%', height: '5%' }} />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="../../blog" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="./Footer.js" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="./Footer.js" className="hover:underline me-4 md:me-6">Blogs</a>
            </li>
            <li>
              <a href="./Footer.js" className="hover:underline">Contact Us</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> © 2023 <a href="https://flowbite.com/" className="hover:underline">DonnorConnect™</a>. All Rights Reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
