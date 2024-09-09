import { IoMdFlame } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="bg-white border-gray-200 w-full">
      <div className="max-w-screen flex flex-wrap grid grid-flow-col items-center justify-stretch w-full">
        <div className="">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse float-right"
          >
            <IoMdFlame size={60} className="text-rose-800" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-green-950">
              Inferno Blaze <br /> <span className="">Pizza</span>
            </span>
          </a>
        </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div id="edge" className="hidden lg:flex h-full w-full">
              <button id="testbox" className="test-box  text-white font-bold py-10 px-3 h-full flex lg:ml-auto">
                <FaShoppingCart size={20} className="mr-2" />
                Order Online
              </button>
            </div>
          </div>
        <div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className=" flex flex-col text-xl font-semibold p-4 md:p-0  border border-gray-100 md:space-x-16 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   dark:border-gray-700 m-auto">
              <li className="">
                <a
                  href="#"
                  className=" text block py-2 px-3 md:p-0 rounded md:bg-transparent  "
                  aria-current="page"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text block py-2 px-3 md:p-0 rounded  md:hover:bg-transparent "
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" text block py-2 px-3 md:p-0  rounded  md:hover:bg-transparent  "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" text block py-2 px-3 md:p-0 rounded  md:hover:bg-transparent "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

{
  /* <div className="w-full h-auto bg-black ">
      <nav className="flex text-neutral-100 font-semibold">
        <div className="my-auto ml-32 flex">
          <IoMdFlame size={50} className="text-rose-800"/>
          <div className="my-auto">Inferno Blaze <br /><span className="text-">Pizza</span></div>
        </div>
        <div id="center" className="flex justify-center items-center m-auto py-2 space-x-1" >
        <a href="/" className="hover:bg-opacity-50 hover:bg-rose-600 hover:text-black px-2 py-3 rounded-lg ">
          Home
        </a>
        <a href="/menu" className="hover:bg-opacity-50 hover:bg-rose-600 hover:text-white px-2 py-3 rounded-lg ">
          Menu
        </a>
        <a
          href="/order"
          className="hover:bg-opacity-50 hover:bg-rose-600 hover:text-white px-2 py-3 rounded-lg "
        > 
          Order
        </a>
        <a
          href="/about"
          className="hover:bg-opacity-50 hover:bg-rose-600 hover:text-white px-2 py-3 rounded-lg "
        >
          About Us
        </a>
        <a
          href="/contact"
          className="hover:bg-opacity-50 hover:bg-rose-600 hover:text-white px-2 py-3 rounded-lg "
        >
          Contact Us
        </a>
        <a href="/faq" className="hover:bg-opacity-50 hover:bg-rose-600 hover:text-white px-2 py-3 rounded-lg ">
          FAQ
        </a>
        </div>
      </nav>
    </div> */
}
