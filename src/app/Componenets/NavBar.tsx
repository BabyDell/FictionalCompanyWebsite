"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTransition, animated } from "react-spring";
import { FaShoppingCart, FaBars, FaChevronDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

const menuItems = [
  {
    name: "Menu",
    href: "/menu",
    dropdownItems: [
      { name: "Appetizers", href: "/menu?category=appetizers" },
      { name: "Wings", href: "/menu?category=wings" },
      { name: "Salads", href: "/menu?category=salads" },
      { name: "Pizza", href: "/menu?category=pizza" },
      { name: "Pastas", href: "/menu?category=pastas" },
      { name: "Sandwiches", href: "/menu?category=sandwiches" },
    ],
  },
  { name: "Our Story", href: "/ourStory" },
  { name: "Locations", href: "/locations" },
  { name: "Contact Us", href: "/contactUs" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const transition = useTransition(isOpen, {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(100%)" },
  });

  const handleMenuItemClick = (href: string) => {
    router.push(href);
    onClose();
  };

  return transition(
    (style, item) =>
      item && (
        <animated.div
          style={style}
          className="fixed inset-y-0 right-0 w-full shadow-lg z-50 p-4 bg-white"
        >
          <Button
            variant="ghost"
            className="absolute top-14 right-5"
            onClick={onClose}
          >
            &times;
          </Button>
          <nav className="mt-24 flex justify-center text-center">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  {item.dropdownItems ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="text-lg font-semibold">
                        {item.name}
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {item.dropdownItems.map((subItem) => (
                          <DropdownMenuItem
                            key={subItem.name}
                            onClick={() => handleMenuItemClick(subItem.href)}
                          >
                            {subItem.name}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Button
                      variant="ghost"
                      className="text-lg font-semibold"
                      onClick={() => handleMenuItemClick(item.href)}
                    >
                      {item.name}
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </animated.div>
      )
  );
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openStates, setOpenStates] = useState<boolean[]>(
    new Array(menuItems.length).fill(false)
  );
  const router = useRouter();

  const handleMouseEnter = useCallback((index: number) => {
    setOpenStates((prev) =>
      prev.map((state, i) => (i === index ? true : state))
    );
  }, []);

  const handleMouseLeave = useCallback((index: number) => {
    setOpenStates((prev) =>
      prev.map((state, i) => (i === index ? false : state))
    );
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-10  shadow-md bg-[url(https://images.pexels.com/photos/172276/pexels-photo-172276.jpeg?cs=srgb&dl=pexels-fwstudio-33348-172276.jpg&fm=jpg)] bg-no-repeat bg-center bg-cover">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <Image
                src="/img/InfernoBlazePizzaLogo.png"
                alt="Inferno Blaze Pizza"
                width={300}
                height={300}
                className="h-12 w-auto sm:h-32"
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(true)}>
              <span className="sr-only">Open menu</span>
              <FaBars className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <nav className="hidden md:flex space-x-10 items-center">
            {menuItems.map((item, index) => (
              <div
                key={item.name}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {item.dropdownItems ? (
                  <Popover open={openStates[index]}>
                    <PopoverTrigger asChild>
                      <Link
                        href="/menu"
                        className="text-lg font-medium py-2 px-3 font-lora text hover:border-none border-none"
                      >
                        {item.name}
                      </Link>
                    </PopoverTrigger>
                    <PopoverContent className="w-48">
                      <ul className="">
                        {item.dropdownItems.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.href}
                              className="text-lg font-semibold block py-2 px-4 bg-white hover:bg-black text-gray-700 hover:text-slate-100 transition-colors duration-500 rounded"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </PopoverContent>
                  </Popover>
                ) : (
                  <Link
                    href={item.href}
                    className="text text-lg font-medium block py-2 px-3 rounded  font-lora"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              href="/orderOnline"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
            >
              <FaShoppingCart className="mr-2" />
              Order Online
            </Link>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
