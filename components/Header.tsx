export default function Header() {
  return (
    <>
      <nav className="bg-white border-gray-200 shadow-md px-3 md:px-28 ">
        <div className="navbar max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <a
            href="https://sriyog.com/"
            className="flex items-center space-x-1 rtl:space-x-reverse"
          >
            <img
              src="/images/logo.svg"
              className="navlogo h-11 md:h-14"
              alt="SRIYOG Logo"
            />

            <span className="ime-pay self-center text-xs md:text-base font-semibold whitespace-nowrap ">
              | IME Pay
            </span>
          </a>

          <div
            className="hidden md:flex md:w-auto items-center justify-between"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-wrap p-4 md:p-0 mt-4 mr-11 md:flex-row md:space-x-7 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li className="pl-0 ">
                <a
                  href="https://sriyog.com"
                  className="block py-2 px- text-gray-500 bg-blue-700 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Home{" "}
                </a>
              </li>
              <li className="">
                <a
                  href="https://sriyog.com/about"
                  className="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  About
                </a>
              </li>
              <li className="">
                <a
                  href="https://sriyog.com/team"
                  className="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Team
                </a>
              </li>
              <li className="">
                <a
                  href="https://sriyog.com/faq"
                  className="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  FAQ
                </a>
              </li>
              <li className="">
                <a
                  href="https://sriyog.com/contact"
                  className="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex items-center mr-16">
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
            <button id="hamburger" className="text-gray-900 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div id="menu" className="hidden md:hidden px-6 py-4 shadow-md">
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
