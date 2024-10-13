function Wings() {
  return (
    <div className=" h-full bg-amber-50">
      <header className="relative menuImage h-40 md:h-72 bg-[url('/img/menuPics/RosatisWings.jpg')]  bg-cover flex items-center justify-center">
        <div className="font-serif text-5xl text-white">Wings</div>
      </header>
      <div className=" w-full font-serif text-xl text-orange-900 font-bold">
        <div className="flex grid grid-cols-2 mt-5">
          <div className="ml-10">
            <div className="underline text-3xl mb-3"> Flavors</div>
            <ul className="space-y-2">
              <li>LemonPepper</li>
              <li>Lousiana Rub</li>
              <li>Cajun</li>
              <li>Teriyaki</li>
              <li>Magno Habereno</li>
            </ul>
          </div>
          <div>
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

function Appetizers() {
  return (
    <div className="h-full  bg-amber-50">
      <header className="  relative menuImage h-40 md:h-72 bg-[url('/img/menuPics/rosatisAppetizers.jpg')]  bg-cover flex items-center justify-center">
        <div className="font-serif text-5xl text-white">Appetizers</div>
      </header>
      <div className=" w-full font-serif text-2xl text-orange-900 font-bold">
        <div className="flex grid grid-cols-2 mt-16">
          <div className="ml-10">
            <ul className="space-y-4">
              <li>
                <div className="flex item-center">
                  Chicken Tenders
                  <span className="ml-2 mt-1 text-base">5.99</span>
                </div>
              </li>
              <li>
                <div className="flex item-center">
                  Breaded Mushrooms
                  <span className="ml-2 mt-1 text-base">6.99</span>
                </div>
              </li>
              <li>
                <div className="flex item-center">
                  Mozzarella Sticks
                  <span className="ml-2 mt-1 text-base">4.99</span>
                </div>
              </li>
              <li>
                <div className="flex item-center">
                  Jalepeño Poppers
                  <span className="ml-2 mt-1 text-base">7.99</span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4">
              <li>
                <div className="flex item-center">
                  French Fries
                  <span className="ml-2 mt-1 text-base">3.99</span>
                </div>
              </li>
              <li>
                <div className="flex item-center">
                  Crab Melts
                  <span className="ml-2 mt-1 text-base">8.99</span>
                </div>
              </li>
              <li>
                <div className="flex item-center">
                  Onion Rings
                  <span className="ml-2 mt-1 text-base">8.99</span>
                </div>
              </li>
              <li>
                <div className="flex item-center">
                  Cheddar Biscuits
                  <span className="ml-2 mt-1 text-base">5.99</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pizza() {
  return (
    <div className="h-full bg-amber-50">
      <header className="relative menuImage h-40 md:h-72 bg-[url('/img/menuPics/rosatisPizza.jpg')]  bg-cover flex items-center justify-center">
        <div className="font-serif text-5xl text-white">Pizza</div>
      </header>
      <div className=" w-full font-serif text-2xl text-orange-900 font-bold">
        <div className="flex grid grid-cols-2 mt-16">
          <div className="ml-10">
            <ul className="space-y-4">
              <li>
                <div className="flex item-center">
                  King Aurthors Supreme
                  <span className="ml-2 mt-1 text-base">14.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Pepperoni, Italian sausage, salami, linguica, mushrooms, green
                  peppers, onions, black olives on zesty red sauce
                </div>
              </li>
              <li>
                <div className="flex item-center">
                  Maui Zaui<span className="ml-2 mt-1 text-base">10.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Tender ham, crisp bacon, juicy pineapple, Roma tomatoes, red &
                  green onions
                </div>
              </li>
              <li>
                <div className="flex item-center">
                  Chicken & Garlic Gourmet
                  <span className="ml-2 mt-1 text-base">12.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Tender ham, crisp bacon, juicy pineapple, Roma tomatoes, red &
                  green onions
                </div>
              </li>
              <li>
                <div className="flex item-center">
                  Italian Garlic Supreme
                  <span className="ml-2 mt-1 text-base">9.99</span>
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
                <div className="flex item-center">
                  BBQ Chicken <span className="ml-2 mt-1 text-base">10.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Grilled white meat chicken, bacon, cheddar, tomatoes, red &
                  green onions on BBQ ranch sauce
                </div>
              </li>
              <li>
                <div className="flex item-center">
                  Hawaiian <span className="ml-2 mt-1 text-base">8.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Tender ham, crisp bacon, juicy pineapple on zesty red sauce
                </div>
              </li>
              <li>
                <div className="flex item-center">
                  Caribbean Herb
                  <span className="ml-2 mt-1 text-base">10.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Cilantro-lime crema, pepper jack, ham and chorizo, Roasted red
                  peppers, grilled asparagus, and fresh basil
                </div>
              </li>
              <li>
                <div className="flex item-center ">
                  Meat Lovers <span className="ml-2 mt-1 text-base">13.99</span>
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

function Salads() {
  return (
    <div className="h-full bg-amber-50">
      <header className="relative menuImage h-40 md:h-72 bg-[url('/img/menuPics/rosatiSalads.jpg')]  bg-cover flex items-center justify-center">
        <div className="font-serif text-5xl text-white">Salads</div>
      </header>
      <div className=" w-full font-serif text-2xl text-orange-900 font-bold">
        <div className="flex grid grid-cols-2 mt-16">
          <div className="ml-10">
            <ul className="space-y-4">
              <li>
                <div className="flex item-center">
                  Italian Table
                  <span className="ml-2 mt-1 text-base">9.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Romaine lettuce, grape tomatoes, red onion, cucumber,
                  pepperoncini, croutons
                </div>
              </li>
              <li>
                <div className="flex item-center">
                  Spinach Gorgonzola
                  <span className="ml-2 mt-1 text-base">10.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Spinach, gorgonzola, walnuts, apples, cranberries
                </div>
              </li>
              <li>
                <div className="flex item-center">
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
                <div className="flex item-center">
                  Antipasto <span className="ml-2 mt-1 text-base">10.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Mortadella, capicola, salami, mozzarella, pepperoncini, grape
                  tomatoes
                </div>
              </li>
              <li>
                <div className="flex item-center">
                  Hawaiian <span className="ml-2 mt-1 text-base">9.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Tender ham, crisp bacon, juicy pineapple on zesty red sauce
                </div>
              </li>
              <li>
                <div className="flex item-center">
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

function Sandwiches() {
  return (
    <div className="h-full bg-amber-50">
      <header className="relative menuImage h-40 md:h-72 bg-[url('/img/menuPics/rosatiSandwiches.jpg')]  bg-cover flex items-center justify-center">
        <div className="font-serif text-5xl text-white">Sandwiches</div>
      </header>
      <div className=" w-full font-serif text-2xl text-orange-900 font-bold">
        <div className="flex grid grid-cols-2 mt-16">
          <div className="ml-10">
            <ul className="space-y-4">
              <li>
                <div className="flex item-center">
                  Italian Table
                  <span className="ml-2 mt-1 text-base">9.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Romaine lettuce, grape tomatoes, red onion, cucumber,
                  pepperoncini, croutons
                </div>
              </li>
              <li>
                <div className="flex item-center">
                  Spinach Gorgonzola
                  <span className="ml-2 mt-1 text-base">10.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Spinach, gorgonzola, walnuts, apples, cranberries
                </div>
              </li>
              <li>
                <div className="flex item-center">
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
                <div className="flex item-center">
                  Antipasto <span className="ml-2 mt-1 text-base">10.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Mortadella, capicola, salami, mozzarella, pepperoncini, grape
                  tomatoes
                </div>
              </li>
              <li>
                <div className="flex item-center">
                  Hawaiian <span className="ml-2 mt-1 text-base">9.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Tender ham, crisp bacon, juicy pineapple on zesty red sauce
                </div>
              </li>
              <li>
                <div className="flex item-center">
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

function Pastas() {
  return (
    <div className="h-full bg-amber-50">
      <header className="relative menuImage h-40 md:h-72 bg-[url('/img/menuPics/rosatiPasta.jpg')]  bg-cover flex items-center justify-center">
        <div className="font-serif text-5xl text-white">Pastas</div>
      </header>
      <div className=" w-full font-serif text-2xl text-orange-900 font-bold">
        <div className="flex grid grid-cols-2 mt-16">
          <div className="ml-10">
            <ul className="space-y-4">
              <li>
                <div className="flex item-center">
                  Chicken Parmigiana
                  <span className="ml-2 mt-1 text-base">9.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Fettuccine noodles, breaded chicken, mozzarella, marinara
                  sauce
                </div>
              </li>
              <li>
                <div className="flex item-center">
                  Baked Lasagna
                  <span className="ml-2 mt-1 text-base">10.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Baked ribbon noodles, four-cheese blend, marinara sauce
                </div>
              </li>
              <li>
                <div className="flex item-center">
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
                <div className="flex item-center">
                  Cheese Ravioli{" "}
                  <span className="ml-2 mt-1 text-base">10.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Cheese ravioli, garlic butter, marinara sauce
                </div>
              </li>
              <li>
                <div className="flex item-center">
                  Mostaccioli Alforno{" "}
                  <span className="ml-2 mt-1 text-base">9.99</span>
                </div>
                <div className="text-sm text-orange-950">
                  Baked penne noodles, ricotta, mozzarella, marinara sauce
                </div>
              </li>
              <li>
                <div className="flex item-center">
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
        <div className="text-center mt-8 md:text-lg text-md">
          <div>SERVED WITH GARLIC BREAD & GRATED CHEESE.</div>
          <div className="mt-1">
            ADD 2 MEATBALLS, 1 CHICKEN BREAST OR 1 SAUSAGE LINK
          </div>
        </div>
      </div>
    </div>
  );
}
const menuContents = {
  Wings: <Wings />,
  Appetizers: <Appetizers />,
  Pizza: <Pizza />,
  Salads: <Salads />,
  Sandwiches: <Sandwiches />,
  Pastas: <Pastas />,
};

export default menuContents;
