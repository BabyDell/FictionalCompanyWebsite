"use client";
import Image from "next/image";
import { useState } from "react";
import { arizona, california, utah, nevada, oregon } from "./locations";

export default function Page() {
  const [rotate, setRotate] = useState({
    arizona: false,
    california: false,
    nevada: false,
    oregon: false,
    utah: false,
  });

  const [isVisible, setIsVisible] = useState({
    arizona: false,
    california: false,
    nevada: false,
    oregon: false,
    utah: false,
  });

  return (
    <div className="h-auto min-h-dvh bg-[url('/img/rosatiBG.jpg')] bg-cover pb-16">
      <div className="w-full xl:w-[1150px] mx-auto grid bg-amber-50 pb-10">
        <div className="flex items-center justify-center w-full mt-10">
          <ul className="m-auto text-center text-3xl font-serif space-y-5">
            <li>
              <button
                className="mx-auto flex items-center justify-center"
                onClick={() => {
                  setIsVisible((prevState) => ({
                    ...prevState,
                    arizona: !prevState.arizona,
                  }));
                  setRotate((prevState) => ({
                    ...prevState,
                    arizona: !prevState.arizona,
                  }));
                }}
              >
                <Image
                  src="/img/rosatiLeftArrow.png"
                  className={`mr-2 transition-transform duration-500 ease-in-out ${
                    rotate.arizona ? "rotate-90" : ""
                  }`}
                  alt="leftArrow"
                  width={20}
                  height={20}
                />
                Arizona
                <Image
                  src="/img/rosatiRightArrow.png"
                  className={`ml-2 transition-transform duration-500 ease-in-out ${
                    rotate.arizona ? "-rotate-90" : ""
                  }`}
                  alt="rightArrow"
                  width={20}
                  height={20}
                />
              </button>
              <div>
                <ul
                  style={{
                    transition: "opacity 0.5s ease-in-out",
                    opacity: isVisible.arizona ? 1 : 0,
                    height: isVisible.arizona ? "auto" : 0,
                    overflow: "hidden",
                  }}
                >
                  <div className=" grid md:grid-cols-3 grid-cols-2 md:mx-0 mx-5 items-center justify-center gap-5 mt-5">
                    {arizona}
                  </div>
                </ul>
              </div>
            </li>
            <div className="border-t border-red-800 max-w-screen-md w-lvw mx-auto" />
            <li className="">
              <button
                className="mx-auto flex items-center justify-center"
                onClick={() => {
                  setIsVisible((prevState) => ({
                    ...prevState,
                    california: !prevState.california,
                  }));
                  setRotate((prevState) => ({
                    ...prevState,
                    california: !prevState.california,
                  }));
                }}
              >
                <Image
                  src="/img/rosatiLeftArrow.png"
                  className={`mr-2 transition-transform duration-500 ease-in-out ${
                    rotate.california ? "rotate-90" : ""
                  }`}
                  alt="leftArrow"
                  width={20}
                  height={20}
                />
                California
                <Image
                  src="/img/rosatiRightArrow.png"
                  className={`ml-2 transition-transform duration-500 ease-in-out ${
                    rotate.california ? "-rotate-90" : ""
                  }`}
                  alt="rightArrow"
                  width={20}
                  height={20}
                />
              </button>
              <div>
                <ul
                  style={{
                    transition: "opacity 0.5s ease-in-out",
                    opacity: isVisible.california ? 1 : 0,
                    height: isVisible.california ? "auto" : 0,
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="flex grid md:grid-cols-3 grid-cols-2 md:mx-0 mx-5 items-center justify-center gap-5 mt-5
                  "
                  >
                    {california}
                  </div>
                </ul>
              </div>
            </li>
            <div className="border-t border-red-800 max-w-screen-md w-lvw mx-auto" />

            <li className="">
              <button
                className="m-auto flex items-center justify-center"
                onClick={() => {
                  setIsVisible((prevState) => ({
                    ...prevState,
                    nevada: !prevState.nevada,
                  }));
                  setRotate((prevState) => ({
                    ...prevState,
                    nevada: !prevState.nevada,
                  }));
                }}
              >
                <Image
                  src="/img/rosatiLeftArrow.png"
                  className={`mr-2 transition-transform duration-500 ease-in-out ${
                    rotate.nevada ? "rotate-90" : ""
                  }`}
                  alt="leftArrow"
                  width={20}
                  height={20}
                />
                Nevada
                <Image
                  src="/img/rosatiRightArrow.png"
                  className={`ml-2 transition-transform duration-500 ease-in-out ${
                    rotate.nevada ? "-rotate-90" : ""
                  }`}
                  alt="rightArrow"
                  width={20}
                  height={20}
                />
              </button>
              <div>
                <ul
                  style={{
                    transition: "opacity 0.5s ease-in-out",
                    opacity: isVisible.nevada ? 1 : 0,
                    height: isVisible.nevada ? "auto" : 0,
                    overflow: "hidden",
                  }}
                >
                  <div className="flex grid md:grid-cols-3 grid-cols-2 md:mx-0 mx-5 items-center justify-center  gap-5 mt-5">
                    {nevada}
                  </div>
                </ul>
              </div>
            </li>

            <div className="border-t border-red-800 max-w-screen-md w-lvw mx-auto" />

            <li className="">
              <button
                className="m-auto flex items-center justify-center"
                onClick={() => {
                  setIsVisible((prevState) => ({
                    ...prevState,
                    oregon: !prevState.oregon,
                  }));
                  setRotate((prevState) => ({
                    ...prevState,
                    oregon: !prevState.oregon,
                  }));
                }}
              >
                <Image
                  src="/img/rosatiLeftArrow.png"
                  className={`mr-2 transition-transform duration-500 ease-in-out ${
                    rotate.oregon ? "rotate-90" : ""
                  }`}
                  alt="leftArrow"
                  width={20}
                  height={20}
                />
                Oregon
                <Image
                  src="/img/rosatiRightArrow.png"
                  className={`ml-2 transition-transform duration-500 ease-in-out ${
                    rotate.oregon ? "-rotate-90" : ""
                  }`}
                  alt="rightArrow"
                  width={20}
                  height={20}
                />
              </button>
              <div>
                <ul
                  style={{
                    transition: "opacity 0.5s ease-in-out",
                    opacity: isVisible.oregon ? 1 : 0,
                    height: isVisible.oregon ? "auto" : 0,
                    overflow: "hidden",
                  }}
                >
                  <div className="flex grid md:grid-cols-3 grid-cols-2 md:mx-0 mx-5 items-center justify-center gap-5 mt-5">
                    {oregon}
                  </div>
                </ul>
              </div>
            </li>
            <div className="border-t border-red-800 max-w-screen-md w-lvw mx-auto" />

            <li className="">
              <button
                className="m-auto flex items-center justify-center"
                onClick={() => {
                  setIsVisible((prevState) => ({
                    ...prevState,
                    utah: !prevState.utah,
                  }));
                  setRotate((prevState) => ({
                    ...prevState,
                    utah: !prevState.utah,
                  }));
                }}
              >
                <Image
                  src="/img/rosatiLeftArrow.png"
                  className={`mr-2 transition-transform duration-500 ease-in-out ${
                    rotate.utah ? "rotate-90" : ""
                  }`}
                  alt="leftArrow"
                  width={20}
                  height={20}
                />
                Utah
                <Image
                  src="/img/rosatiRightArrow.png"
                  className={`ml-2 transition-transform duration-500 ease-in-out ${
                    rotate.utah ? "-rotate-90" : ""
                  }`}
                  alt="rightArrow"
                  width={20}
                  height={20}
                />
              </button>
              <div>
                <ul
                  style={{
                    transition: "opacity 0.5s ease-in-out",
                    opacity: isVisible.utah ? 1 : 0,
                    height: isVisible.utah ? "auto" : 0,
                    overflow: "hidden",
                  }}
                >
                  <div className="flex grid md:grid-cols-3 grid-cols-2 md:mx-0 mx-5 items-center justify-center gap-5 mt-5">
                    {utah}
                  </div>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
