import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo2 from '../assets/plogo.jpg';
import { FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  // Toggle the mobile menu visibility
  const toggleMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.toggle('max-h-0');
      mobileMenuRef.current.classList.toggle('max-h-screen');
    }
  };

  // Close the mobile menu
  const closeMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.add('max-h-0');
      mobileMenuRef.current.classList.remove('max-h-screen');
    }
  };

  // Function to toggle Projects dropdown
  const toggleProjectsDropdown = () => {
    setIsProjectsOpen((prevState) => !prevState);
  };

  // Close dropdown if user navigates to another page
  useEffect(() => {
    setIsProjectsOpen(false); // Close the dropdown on page change
  }, [location]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Contact Bar */}
      <div className="w-full bg-zinc-950 dark:bg-zinc-950">
        <div className="gap-4 mx-auto flex h-8 max-w-screen-xl items-center justify-end px-4 sm:px-6 lg:px-8">
          <p className="text-stone-50 flex items-center gap-2" style={{ fontFamily: '"Rubik", sans-serif' }}>
            <MdEmail size={18} />
            cuetop175@gmail.com
          </p>
          <p className="text-stone-50 flex items-center gap-2" style={{ fontFamily: '"Rubik", sans-serif' }}>
            <FaPhoneSquare size={18} />
            +6912345678
          </p>
          <FaSquareFacebook color="white" size={18} />
          <FaInstagramSquare color="white" size={18} />
          <FaLinkedin color="white" size={18} />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white dark:bg-stone-900 w-full">
        <div className="mx-auto flex h-20 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/home" className="block text-teal-600 dark:text-teal-300">
            <span className="sr-only">Home</span>
            <img src={logo2} alt="logo" className="h-10" />
          </Link>

          {/* Desktop Menu + Button */}
          <div className="hidden md:flex items-center gap-6">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm" style={{ fontFamily: '"Rubik", sans-serif' }}>
                {['home', 'about','services', 'contact'].map((page) => (
                  <li key={page}>
                    <Link
                      to={`/${page}`}
                      className="relative inline-block text-gray-500 transition-colors duration-300 hover:text-red-500 dark:text-white group"
                    >
                      {page.charAt(0).toUpperCase() + page.slice(1)}
                      <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}

                {/* Projects Dropdown */}
                <li className="relative">
                  <button
                    onClick={toggleProjectsDropdown}
                    className="relative inline-block text-gray-500 transition-colors duration-300 hover:text-red-500 dark:text-white group"
                  >
                    Projects
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  {/* Dropdown Menu for Projects */}
                  {isProjectsOpen && (
                    <ul className="absolute left-0 top-full mt-2 w-40 bg-white border rounded-md shadow-lg dark:bg-stone-800 dark:border-stone-600">
                      {['Website', 'Graphics', 'Videos'].map((item, index) => (
                        <li key={index}>
                          <Link
                            to={`/projects/${item.toLowerCase()}`}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                            onClick={closeMenu} // Close the mobile menu when a project is clicked
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

    
              </ul>
            </nav>

            <Link
              to="/login"
              className="rounded-md bg-red-600 px-5 py-2.5 text-sm text-white transition hover:bg-red-400 dark:hover:bg-red-700 font-bold"
            >
              FREE CONSULTATION
            </Link>
          </div>

          {/* Mobile Burger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-red-500"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <nav
          ref={mobileMenuRef}
          className="overflow-hidden max-h-0 transition-[max-height] duration-500 ease-in-out md:hidden bg-white dark:bg-stone-900"
        >
          <ul className="flex flex-col gap-4 p-4 text-gray-700 dark:text-white">
            {['home', 'about', 'services', 'contact'].map((page) => (
              <li key={page}>
                <Link
                  to={`/${page}`}
                  className="block text-center text-gray-500 transition-colors duration-300 hover:text-red-500 dark:text-white"
                  onClick={closeMenu}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </Link>
              </li>
            ))}
            {/* Mobile Projects Dropdown - Removed the standalone "Projects" link */}
            <li className="text-center relative">
              <button
                onClick={toggleProjectsDropdown}
                className="relative inline-block text-gray-500 transition-colors duration-300 hover:text-red-500 dark:text-white group"
              >
                Projects
              </button>
              {isProjectsOpen && (
                <ul className="static mt-2 w-full bg-white border rounded-md shadow-lg dark:bg-stone-800 dark:border-stone-600 z-10">
                  {['Website', 'Graphics', 'Videos'].map((item, index) => (
                    <li key={index}>
                      <Link
                        to={`/projects/${item.toLowerCase()}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                        onClick={closeMenu}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/login"
                className="block text-center rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-400 dark:hover:bg-red-700"
                onClick={closeMenu}
              >
                Free Consultation
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
