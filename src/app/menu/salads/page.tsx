import Link from "next/link";

export default function Salads() {
  return (
    <div className="h-full bg-amber-50">
      <div className="w-full text-center text-lg py-2 font-semibold">
        {" "}
        /{" "}
        <Link href="/menu" className="text-red-800 underline">
          Menu
        </Link>{" "}
        / Salads
      </div>

      <header className="relative menuImage h-48 md:h-72 bg-[url('/img/menuPics/rosatiSalads.jpg')]  bg-cover flex items-center justify-center">
        <div className="font-serif text-5xl text-white">Salads</div>
      </header>
      <div className=" w-full font-serif text-2xl text-orange-900 font-bold">
        <div className="flex grid grid-cols-1 sm:grid-cols-2 mt-8 lg:mt-16 ml-10 gap-5 pb-10">
          <div className="">
            <ul className="space-y-4">
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  Italian Table
                  <span className="ml-2 mt-1 text-base">9.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Romaine lettuce, grape tomatoes, red onion, cucumber,
                  pepperoncini, croutons
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  Spinach Gorgonzola
                  <span className="ml-2 mt-1 text-base">10.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Spinach, gorgonzola, walnuts, apples, cranberries
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  Chopped
                  <span className="ml-2 mt-1 text-base">12.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Romaine lettuce, pasta, chicken, bacon, gorgonzola, red onion,
                  chopped tomatoes
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4 mr-7">
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  Antipasto <span className="ml-2 mt-1 text-base">10.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Mortadella, capicola, salami, mozzarella, pepperoncini, grape
                  tomatoes
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  Hawaiian <span className="ml-2 mt-1 text-base">9.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Tender ham, crisp bacon, juicy pineapple on zesty red sauce
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  Caesar
                  <span className="ml-2 mt-1 text-base">8.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Romaine lettuce, caesar dressing, parmesan, croutons
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <div>Dressings:</div>
          <div className="text-lg mt-1">
            ITALIAN | CAESAR | RANCH | FRENCH | BALSAMIC | BLUE CHEESE{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
