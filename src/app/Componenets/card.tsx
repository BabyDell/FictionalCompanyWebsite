import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Afacad } from "next/font/google";

const afacad = Afacad({
  subsets: ["latin"],
  weight: ["600"],
});

type CardProps = {
  name: string;
  address: string;
  phone: string;
};

const Card: React.FC<CardProps> = ({ name, address, phone }) => {
  return (
    <div className="bg-custom-orange rounded-xl p-2 pb-4">
      <div
        className={`text-3xl text-red-800 text-left ml-2 mb-2 font-Afacad-Flux font-semibold ${afacad.className}`}
      >
        {name}
      </div>
      <div className="flex text-left text-lg text-red-950">
        <FaMapMarkerAlt className="ml-2 mt-2 mr-2 text-red-800" />
        {address}
      </div>
      <div className="text-xl text-left ml-2 mt-2 flex text-red-950">
        <FaPhoneAlt className="mr-2 mt-[5px] text-red-800" />
        {phone}
      </div>
    </div>
  );
};

Card.displayName = 'Card';

export default Card;
