"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import menuContents from "./menuContents";
import Image from "next/image";

const Menu = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  //problems with routing router is not mounted**

  useEffect(() => {
    if (router.asPath !== router.route) {
      const pageFromUrl = Number(router.query.page);
      if (pageFromUrl) {
        setCurrentPage(pageFromUrl);
      }
    }
  }, [router]);

  const pages = [
    {
      name: "Wings",
      icon: "/img/chickenWingIcon.png",
      content: menuContents.Wings,
    },
    {
      name: "Appetizers",
      icon: "/img/friesIcon.png",
      content: menuContents.Appetizers,
    },
    {
      name: "Pizza",
      icon: "/img/pizzaIcon.png",
      content: menuContents.Pizza,
    },
    {
      name: "Salads",
      icon: "/img/saladIcon.png",
      content: menuContents.Salads,
    },
    {
      name: "Pastas",
      icon: "/img/pastaIcon.png",
      content: menuContents.Pastas,
    },
    {
      name: "Sandwiches",
      icon: "/img/sandwichIcon.png",
      content: menuContents.Sandwiches,
    },
  ];

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    router.push({ query: { page: pageNumber } }); // update the URL
  };

  return (
    <div className=" h-dvh bg-[url(https://cdn.pixabay.com/photo/2016/03/15/02/42/floor-1256804_1280.jpg)] bg-cover">
      <div className="w-full xl:w-[1150px] mx-auto h-full flex bg-white">
        <div className="w-52 md:w-96 h-full bg-[url(/img/rosatiWhiteWood.jpg)] ">
          {pages.map((page, index) => (
            <button
              className="w-full py-4 border-b-2 border-black  font-Playfair-Display"
              key={index}
              onClick={() => handlePageChange(index + 1)}
            >
              <div className="w-full h-full flex items-center justify-center ">
                <Image
                  src={page.icon}
                  width={19}
                  height={19}
                  alt="logo"
                  className="mr-1"
                />

                <div className="font-serif text-xl text-orange-900 font-bold">
                  {page.name}
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="w-full">{pages[currentPage - 1].content}</div>
      </div>
    </div>
  );
};

export default Menu;
