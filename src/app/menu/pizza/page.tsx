import Link from "next/link";

export default function Pizza() {
  return (
    <div className="h-full bg-amber-50">
      <div className="w-full text-center text-lg py-2 font-semibold">
        {" "}
        /{" "}
        <Link href="/menu" className="text-red-800 underline">
          Menu
        </Link>{" "}
        / Pizza
      </div>

      <header className="relative menuImage h-48 md:h-72 bg-[url('/img/menuPics/rosatisPizza.jpg')]  bg-cover flex items-center justify-center">
        <div className="font-serif text-5xl text-white">Pizza</div>
      </header>
      <div className=" w-full font-serif text-2xl text-orange-900 font-bold">
        <div className="flex grid grid-cols-1 sm:grid-cols-2 mt-8 lg:mt-16 sm:ml-10 gap-5 pb-10">
          <div className="flex ">
            <ul className="space-y-4">
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  King Aurthors Supreme
                  <span className="ml-2 text-base">14.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Pepperoni, Italian sausage, salami, linguica, mushrooms, green
                  peppers, onions, black olives on zesty red sauce
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  Maui Zaui<span className="ml-2 text-base">10.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Tender ham, crisp bacon, juicy pineapple, Roma tomatoes, red &
                  green onions
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  Chicken & Garlic Gourmet
                  <span className="ml-2 text-base">12.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Tender ham, crisp bacon, juicy pineapple, Roma tomatoes, red &
                  green onions
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  Italian Garlic Supreme
                  <span className="ml-2 text-base">9.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Pesto, artichoke hearts, zucchini, spinach, mushrooms, Roma
                  tomatoes, garlic & Italian herb seasoning
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4 mr-7">
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  BBQ Chicken <span className="ml-2 text-base">10.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Grilled white meat chicken, bacon, cheddar, tomatoes, red &
                  green onions on BBQ ranch sauce
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  Hawaiian <span className="ml-2 text-base">8.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Tender ham, crisp bacon, juicy pineapple on zesty red sauce
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  Caribbean Herb
                  <span className="ml-2 text-base">10.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Cilantro-lime crema, pepper jack, ham and chorizo, Roasted red
                  peppers, grilled asparagus, and fresh basil
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center md:justify-normal ">
                  Meat Lovers <span className="ml-2 text-base">13.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Mozzeralla, pepperoni, salami, ham, Italian sausage, ground
                  beef, seasonsed with italian herbs and garlic powder
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
