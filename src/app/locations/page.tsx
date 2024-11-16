"use client";
import Image from "next/image";
import { useState } from "react";
import { arizona, california, utah, nevada, oregon } from "./locations";

type ListItemProps = {
  name: string;
  content: React.ReactNode[];
};
const locations = [
  { name: "Arizona", content: arizona },
  { name: "California", content: california },
  { name: "Utah", content: utah },
  { name: "Nevda", content: nevada },
  { name: "Oregan", content: oregon },
];

const ListItem: React.FC<ListItemProps> = ({ name, content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [rotate, setRotate] = useState(false);

  return (
    <li>
      <button
        className="mx-auto flex items-center justify-center"
        onClick={() => {
          setIsVisible(!isVisible);
          setRotate(!rotate);
        }}
      >
        <Image
          src="/img/rosatiLeftArrow.png"
          className={`mr-2 transition-transform duration-500 ease-in-out ${
            rotate ? "rotate-90" : ""
          }`}
          alt="leftArrow"
          width={20}
          height={20}
        />
        {name}
        <Image
          src="/img/rosatiRightArrow.png"
          className={`ml-2 transition-transform duration-500 ease-in-out ${
            rotate ? "-rotate-90" : ""
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
            opacity: isVisible ? 1 : 0,
            height: isVisible ? "auto" : 0,
            overflow: "hidden",
          }}
        >
          <div className=" grid md:grid-cols-3 grid-cols-2 md:mx-0 mx-5 items-center justify-center gap-5 mt-5">
            {content}
          </div>
        </ul>
      </div>
    </li>
  );
};

export default function Page() {
  return (
    <div className="h-auto min-h-dvh bg-[url('/img/rosatiBG.jpg')] bg-cover pb-16 ">
      <div className="w-full xl:w-[1150px] mx-auto grid bg-amber-50 pb-10 rounded-lg ">
        <div className="flex items-center justify-center w-full mt-10">
          <ul className="m-auto text-center text-3xl font-serif space-y-5">
            {locations.map((location, index) => (
              <>
                <ListItem name={location.name} content={location.content} />
                {index < locations.length - 1 && (
                  <div className="border-t border-red-800 max-w-screen-md w-lvw mx-auto" />
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
