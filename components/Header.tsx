"use client"
import { useState } from "react";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="bg-white border-gray-200 shadow-md px-3 sm:px-6 md:px-8 lg:px-20">
        <div className="navbar max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <a
            href="https://sriyog.com/"
            className="flex items-center space-x-1 rtl:space-x-reverse"
          >
            <img
              src="/images/logo.svg"
              className="navlogo h-9 sm:h-10 md:h-12 lg:h-14"
              alt="SRIYOG Logo"
            />

            <span className="ime-pay self-center text-xs sm:text-sm md:text-base font-medium whitespace-nowrap text-black">
              | IME Pay
            </span>
          </a>

          <div
            className="hidden md:flex md:w-auto items-center justify-between"
            id="navbar-default"
          >
            <ul className="font-semibold text-xs sm:text-xs md:text-[11px] lg:text-base flex flex-wrap p-4 md:p-0 mt-4 mr-2 md:flex-row md:space-x-3 lg:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white max-w-full">
              <li className="pl-0 ">
                <a
                  href="https://sriyog.com"
                  className="block py-2 px-3 text-gray-500 hover:text-[#8B1414] rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Home{" "}
                </a>
              </li>
              <li className="">
                <a
                  href="https://sriyog.com/about"
                  className="block py-2 px-3 text-gray-500 rounded hover:text-[#8B1414] md:hover:bg-transparent md:border-0 md: md:p-0"
                >
                  About
                </a>
              </li>
              <li className="">
                <a
                  href="https://sriyog.com/team"
                  className="block py-2 px-3 text-gray-500 rounded hover:text-[#8B1414] md:hover:bg-transparent md:border-0 md: md:p-0"
                >
                  Team
                </a>
              </li>
              <li className="">
                <a
                  href="https://sriyog.com/faq"
                  className="block py-2 px-3 text-gray-500 rounded hover:text-[#8B1414] md:hover:bg-transparent md:border-0 md: md:p-0"
                >
                  FAQ
                </a>
              </li>
              <li className="">
                <a
                  href="https://sriyog.com/contact"
                  className="block py-2 px-3 text-gray-500 rounded hover:text-[#8B1414] md:hover:bg-transparent md:border-0 md: md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex items-center space-x-2 md:space-x-2 mr-2 sm:mr-4 md:mr-6 lg:mr-10">
              <a href="https://sriyog.com/join">
                <img
                  src="/images/join-now.png"
                  className="join-now_img h-8"
                  alt=""
                />
              </a>
              <a href="https://mail.sriyog.com" target="_blank">
                <img
                  src="/images/mail.svg"
                  className="mail_img h-8 ml-3"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
          id="hamburger"
          className="text-gray-900 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* X icon */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Hamburger icon */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
          </div>
        </div>
      </nav>

      {/* Toggle menu visibility with state */}
      <div
  id="menu"
  className={`md:hidden px-6 py-4 shadow-md bg-white text-sm font-medium overflow-hidden transition-all duration-300 ease-in-out ${
    menuOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
  }`}
>
        <div className="container mx-auto">
          <a href="https://sriyog.com/" className="block  py-2">
            Home
          </a>
          <a href="https://sriyog.com/about" className="block  py-2">
            About
          </a>
          <a href="https://sriyog.com/services" className="block  py-2">
            Services
          </a>
          <a href="https://sriyog.com/contact" className="block  py-2">
            Contact
          </a>
          <a href="https://sriyog.com/join">
            <img src="/images/join-now.png" className="h-8 mb-2" alt="" />
          </a>
          <a href="https://mail.sriyog.com ">
            <img src="/images/mail.svg" className="h-8" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
