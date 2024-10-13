import Link from 'next/link';
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="z-20 relative">
      <nav className="bg-white border-gray-200 w-full sticky py-5 lg:py-0 font-lora bg-[url(https://images.pexels.com/photos/172276/pexels-photo-172276.jpeg?cs=srgb&dl=pexels-fwstudio-33348-172276.jpg&fm=jpg)] bg-no-repeat bg-center bg-cover">
        <div className="max-w-screen flex flex-wrap grid grid-flow-col items-center justify-between lg:justify-stretch w-full">
          <div className="">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse float-right"
            >
              <Image
                src="/img/InfernoBlazePizzaLogo.png"
                width={150}
                height={150}
                alt="companylogo"
              />
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div id="edge" className="hidden lg:flex h-full w-full ">
              <button
                id="basetestbox"
                className="testbox2 text-white font-bold py-16 px-3 h-full flex lg:ml-auto"
              >
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
                  <div className="dropdown relative z-30">
                    <Link
                      href="/menu"
                      className="text dropbtn font-lora"
                      aria-current="page"
                    >
                      Menu
                    </Link>
                    <div className="dropdown-content mt-5 py-4 bg-red-hex z-30 relative">
                      <Link
                        href="/menu?page=1"
                        className=" px-4 py-3 bg-transition  min-w-32 "
                      >
                        Appetizers
                      </Link>
                      <Link
                        href="/menu?page=2"
                        className=" px-4 py-3 bg-transition   min-w-32"
                      >
                        Wings
                      </Link>
                      <Link
                        href="/menu?page=3"
                        className=" px-4 py-3 bg-transition   min-w-32"
                      >
                        Salads
                      </Link>
                      <Link
                        href="/menu?page=4"
                        className=" px-4 py-3 bg-transition   min-w-32"
                      >
                        Pizza
                      </Link>
                      <Link
                        href="/menu?page=5"
                        className=" px-4 py-3 bg-transition   min-w-32"
                      >
                        Pastas
                      </Link>
                      <Link
                        href="/menu?page=6"
                        className=" px-4 py-3 bg-transition   min-w-32"
                      >
                        Sandwiches
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="/ourStory"
                    className="text block py-2 px-3 md:p-0 rounded  md:hover:bg-transparent font-lora "
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="/locations"
                    className=" text block py-2 px-3 md:p-0  rounded  md:hover:bg-transparent  font-lora"
                  >
                    Locations
                  </a>
                </li>
                <li>
                  <a
                    href="/contactUs"
                    className=" text block py-2 px-3 md:p-0 rounded  md:hover:bg-transparent font-lora"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-1 bg-black"></div>
    </div>
  );
}
