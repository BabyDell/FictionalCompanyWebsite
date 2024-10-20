import Link from "next/link";

export default function Pastas() {
  return (
    <div className="h-full bg-amber-50">
      <div className="w-full text-center text-lg py-2 font-semibold">
        {" "}
        /{" "}
        <Link href="/menu" className="text-red-800 underline">
          Menu
        </Link>{" "}
        / Pastas
      </div>

      <header className="relative menuImage h-48 md:h-72 bg-[url('/img/menuPics/rosatiPasta.jpg')]  bg-cover flex items-center justify-center">
        <div className="font-serif text-5xl text-white">Pastas</div>
      </header>
      <div className=" w-full font-serif text-2xl text-orange-900 font-bold">
        <div className="flex grid grid-cols-1 sm:grid-cols-2 mt-8 lg:mt-16 ml-10 gap-5 pb-10">
          <div className="">
            <ul className="space-y-4">
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  Chicken Parmigiana
                  <span className="ml-2 mt-1 text-base">9.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Fettuccine noodles, breaded chicken, mozzarella, marinara
                  sauce
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  Baked Lasagna
                  <span className="ml-2 mt-1 text-base">10.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Baked ribbon noodles, four-cheese blend, marinara sauce
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  Fettuccine Alfredo
                  <span className="ml-2 mt-1 text-base">12.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Flat noodles, cream sauce
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4 mr-7">
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  Cheese Ravioli{" "}
                  <span className="ml-2 mt-1 text-base">10.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Cheese ravioli, garlic butter, marinara sauce
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  Mostaccioli Alforno{" "}
                  <span className="ml-2 mt-1 text-base">9.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Baked penne noodles, ricotta, mozzarella, marinara sauce
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center md:justify-normal">
                  Penne Alla Rosati
                  <span className="ml-2 mt-1 text-base">8.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Penne noodles, parmesan, diced chicken, alfredo sauce
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-3 md:text-lg text-base p-5">
          <div>SERVED WITH GARLIC BREAD & GRATED CHEESE.</div>
          <div className="mt-1">
            ADD 2 MEATBALLS, 1 CHICKEN BREAST OR 1 SAUSAGE LINK
          </div>
        </div>
      </div>
    </div>
  );
}
