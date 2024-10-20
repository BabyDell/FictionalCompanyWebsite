import Link from "next/link";

export default function Wings() {
  return (
    <div className=" h-full bg-amber-50">
      <div className="w-full text-center text-lg py-2 font-semibold">
        {" "}
        /{" "}
        <Link href="/menu" className="text-red-800 underline">
          Menu
        </Link>{" "}
        / Wings
      </div>
      <header className="relative menuImage h-48 md:h-72 bg-[url('/img/menuPics/RosatisWings.jpg')]  bg-cover flex items-center justify-center">
        <div className="font-serif text-5xl text-white">Wings</div>
      </header>
      <div className=" w-full font-serif text-xl text-orange-900 font-bold">
        <div className="flex grid grid-cols-1 sm:grid-cols-2 mt-8 lg:mt-16 ml-10 gap-5 pb-10">
          <div className="m-auto text-center">
            <div className="underline text-3xl mb-3"> Flavors</div>
            <ul className="space-y-2">
              <li>LemonPepper</li>
              <li>Lousiana Rub</li>
              <li>Cajun</li>
              <li>Teriyaki</li>
              <li>Magno Habereno</li>
            </ul>
          </div>
          <div className="m-auto text-center">
            <div className="text-3xl underline mb-3">Servings</div>
            <ul className="space-y-2">
              <li>6 Wings - $8.99</li>
              <li>12 Wings - $15 .99</li>
              <li>18 Wings - $21.99</li>
              <li>24 Wings - $27.99</li>
            </ul>
          </div>
        </div>
        <div className="mt-5 ml-10 text-base">
          **Served with an a side of blue cheese or ranch
        </div>
      </div>
    </div>
  );
}
