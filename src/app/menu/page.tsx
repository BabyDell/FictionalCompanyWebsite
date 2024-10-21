import Link from "next/link";
import Image from "next/image";

const cards = [
  { id: 1, title: "Appetizers", imageUrl: "/img/menuPics/rosatisAppetizers.jpg", link: "/menu/appetizers" },
  { id: 2, title: "Wings", imageUrl: "/img/menuPics/rosatisWings.jpg", link: "/menu/wings" },
  { id: 3, title: "Salads", imageUrl: "/img/menuPics/rosatiSalads.jpg", link: "/menu/salads" },
  { id: 4, title: "Pizza", imageUrl: "/img/menuPics/rosatisPizza.jpg", link: "/menu/pizza" },
  { id: 5, title: "Pastas", imageUrl: "/img/menuPics/rosatiPasta.jpg", link: "/menu/pastas" },
  { id: 6, title: "Sandwiches", imageUrl: "/img/menuPics/rosatiSandwiches.jpg", link: "/menu/sandwiches" },
];

const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 px-10 mt-5">
      {cards.map((card) => (  
        <Link href={card.link} key={card.id} className="block bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <Image src={card.imageUrl} alt={card.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{card.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default function Menu() {
  return (
    <div className="w-full bg-[url(https://cdn.pixabay.com/photo/2016/03/15/02/42/floor-1256804_1280.jpg)] h-dvh m-auto bg-cover">
      <div className="w-full xl:w-[1150px] bg-amber-50 h-dvh mx-auto">
        <div className="text-center pt-5 text-3xl font-serif text-red-900">
          Our Menu
        </div>
        <div className="">
          <CardGrid />
        </div>
      </div>
    </div>
  );
}
