import { Merriweather } from "next/font/google";
import Image from "next/image";

const merriFont = Merriweather({
  subsets: ["latin"],
  weight: ["900"],
});

export default function ourStory() {
  return (
    <div className="h-dvh bg-[url('/img/rosatiBG.jpg')] bg-cover">
      <div className="w-full xl:w-[1150px] mx-auto grid bg-amber-50 pb-10 ">
        <div className="w-full md:w-2/3 h-fit flex flex-col md:flex-row grid-cols-1 md:grid-cols-2 mx-auto  md:mt-10 ">
          <div className="mx-auto mt-24 text-center">
            <div
              className={`text-center text-4xl text-red-800 ${merriFont.className}`}
            >
              A Tradition <br />
              Worth Keeping
            </div>
            <Image
              src="/img/rosatiLine.png"
              className="w-44 mt-4 mx-auto"
              alt="line"
              width={100}
              height={50}
            />
          </div>
          <Image
            src="/img/rosatisFounders.png"
            className="mx-auto"
            width={300}
            height={300}
            alt="logo"
          />
        </div>
        <div className="text-center mt-10 text-4xl text-emerald-950 font-bold">
          &quot;Every meal is a chance to impress&quot;
        </div>
        <div className="text-center mt-3 text-lg font-semibold">
          - Sam Gutierrez
        </div>
        <div className="w-10/12 md:w-2/3 mx-auto mt-10 ">
          <span className="">
            Nearly a century ago these were the simple words Sam Gutierrez lived
            by; little did he know this humble philosophy helped shape the
            foundation on which Rosati&apos;s Pizza was built.
          </span>
          <br />
          <br />
          <span className="">
            Sam&apos;s father began the family&apos;s rich tradition of serving
            delicious Italian food to customers in his New York restaurant back
            in the late 1890&apos;s. After the turn of the century, the family
            moved to Chicago and opened yet another fine ltalian restaurant
            featuring &quot;Italian Style Pizza&quot;, a tasty appetizer
            consisting of homemade tomato sauce served on a crispy piece of
            bread. In 1927, following in his father&apos;s footsteps, Sam opened
            his own Italian restaurant in downtown Chicago.
          </span>
          <br />
          <br />
          <span>
            When Sam retired, his sons were ready to continue the family
            tradition. The year was 1964 and pizza in America had evolved and
            was starting to take off. The first Gutierrez&apos;s Pizza opened
            its doors in a suburb of Chicago.
          </span>
          <br />
          <br />
          <span>
            In 1970, Rick Gutierrez, great grandson of Fred Sr., continued the
            family tradition and opened his own Gutierrez&apos;s Pizza in
            Arlington Heights, Illinois. By 1978, a total of ten individual
            Gutierrez family members owned Gutierrez&apos;s Pizza locations. In
            1979 the family decided to expand the business and began franchising
            the Gutierrez&apos;s Pizza concept. In 1996 Sam Gutierrez, great
            great grandson of Fred Sr. opened his first Gutierrez&apos;s Pizza
            location in Belvidere, Illinois marking the fifth generation of
            Gutierrez family members serving delicious Italian food. Other
            locations soon followed and Gutierrez&apos;s Pizza was on the map.
          </span>
        </div>
      </div>
    </div>
  );
}
