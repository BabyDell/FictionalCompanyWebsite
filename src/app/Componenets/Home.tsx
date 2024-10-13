import { Jacques_Francois_Shadow, Playfair_Display } from "next/font/google";
import { IoIosFlame } from "react-icons/io";

const Jacques = Jacques_Francois_Shadow({
  subsets: ["latin"],
  weight: ["400"],
});

const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Home() {
  return (
    <div className="w-full">
      <div
        id="home"
        className=" relative bg-fixed bg-[url('/img/InfernoBlazeHomePicture.jpg')] bg-no-repeat bg-center bg-cover w-full h-dvh pb-32 lg:pb-0 lg:max-h-[calc(100vh-200px)] background-small"
      >
        <div className="flex justify-center h-full pt-28 ">
          <div className=" w-auto">
            <div
              className={`text-7xl text-center text-white ${Jacques.className}`}
            >
              Authentic <br /> Italian <br /> Thin Crust <br /> Pizza
            </div>
            <div className="flex justify-center items-center mt-4 space-x-2">
              <IoIosFlame size={40} className="text-red-600" />
              <button
                id="basetestbox"
                className={`testbox1 text-2xl text-center py-4 px-4 bg-emerald-800 rounded-xl text-neutral-100 tracking-wide  ${playFair.className}`}
              >
                Order Online
              </button>
              <IoIosFlame size={40} className="text-red-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
