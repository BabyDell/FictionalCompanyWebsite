import { animated } from "react-spring";

const popUpNav: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  return (
    <animated.div
      style={style}
      className="bg-black w-64 h-full absolute right-0"
    >
      <div className="flex flex-col h-full mt-14 space-y-3">
        <a
          href="/menu"
          className="text hover:bg-stone-600 text-white rounded-md px-3 py-2 text-xl font-medium"
        >
          Menu
        </a>
        <a
          href="/ourStory"
          className="text hover:bg-stone-600 text-white rounded-md px-3 py-2 text-xl font-medium"
        >
          Our Story
        </a>
        <a
          href="/locations"
          className="text hover:bg-stone-600 text-white rounded-md px-3 py-2 text-xl font-medium"
        >
          Locations
        </a>
        <a
          href="/contactUs"
          className="text hover:bg-stone-600 text-white rounded-md px-3 py-2 text-xl font-medium"
        >
          Contact Us
        </a>
      </div>
    </animated.div>
  );
};

export default popUpNav;
