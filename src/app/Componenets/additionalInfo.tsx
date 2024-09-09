import { FaLocationDot } from "react-icons/fa6";

export default function AdditionalInfo() {
  return (
    <div className="h-16 bg-zinc-900 shadow-2xl">
      <div className="flex justify-center items-center text-neutral-100 font-semibold w-full h-full space-x-10 text-lg">
        <div className="flex">
          <FaLocationDot size={20} className="text-red-600 mr-[4px] mt-[3px]" />
          <div className="text-white">Indio, CA</div>
        </div>
        <div className="text-white">123-456-7890</div>
      </div>
    </div>
  );
}
