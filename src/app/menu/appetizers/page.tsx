import Link from "next/link";

export default function Appetizers() {
  return (
    <div className="h-full bg-amber-50">
        
      <div className="w-full text-center text-lg py-2 font-semibold">
        {" "}
        /{" "}
        <Link href="/menu" className="text-red-800 underline">
          Menu
        </Link>{" "}
        / Appetizers
      </div>
      <header className="  relative menuImage h-48 md:h-72 bg-[url('/img/menuPics/rosatisAppetizers.jpg')]  bg-cover flex items-center justify-center">
        <div className="font-serif text-5xl text-white">Appetizers</div>
      </header>
      <div className=" w-full font-serif text-2xl text-orange-900 font-bold">
        <div className="flex grid grid-cols-1 sm:grid-cols-2 mt-8 lg:mt-16 ml-10 gap-5 pb-10">
          <div className="">
            <ul className="space-y-4">
              <li>
                <div className="flex items-center justify-center md:justify-normal ">
                  Chicken Tenders
                  <span className="ml-2 text-base">5.99</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  Breaded Mushrooms
                  <span className="ml-2  text-base">6.99</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  Mozzarella Sticks
                  <span className="ml-2  text-base">4.99</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  Jalepeño Poppers
                  <span className="ml-2  text-base">7.99</span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4">
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  French Fries
                  <span className="ml-2  text-base">3.99</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  Crab Melts
                  <span className="ml-2  text-base">8.99</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  Onion Rings
                  <span className="ml-2  text-base">8.99</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  Cheddar Biscuits
                  <span className="ml-2  text-base">5.99</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
