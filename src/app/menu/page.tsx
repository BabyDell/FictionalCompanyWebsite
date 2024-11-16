"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Pizza,
  Utensils,
  Salad,
  Sandwich,
  ChefHat,
  Drumstick,
} from "lucide-react";

type MenuItem = {
  name: string;
  price: number | null;
  description?: string;
};

type MenuItems = {
  [key: string]: MenuItem[];
};

const menuCategories = [
  {
    id: "appetizers",
    label: "Appetizers",
    icon: <Utensils className="w-4 h-4" />,
  },
  { id: "wings", label: "Wings", icon: <Drumstick className="w-4 h-4" /> },
  { id: "salads", label: "Salads", icon: <Salad className="w-4 h-4" /> },
  { id: "pizza", label: "Pizza", icon: <Pizza className="w-4 h-4" /> },
  { id: "pastas", label: "Pastas", icon: <ChefHat className="w-4 h-4" /> },
  {
    id: "sandwiches",
    label: "Sandwiches",
    icon: <Sandwich className="w-4 h-4" />,
  },
];

const menuItems: MenuItems = {
  appetizers: [
    { name: "Chicken Tenders", price: 5.99 },
    { name: "Breaded Mushrooms", price: 6.99 },
    { name: "Mozzarella Sticks", price: 4.99 },
    { name: "Jalepeño Poppers", price: 7.99 },
    { name: "French Fries", price: 3.99 },
    { name: "Crab Melts", price: 8.99 },
    { name: "Onion Rings", price: 8.99 },
    { name: "Cheddar Biscuits", price: 5.99 },
  ],
  wings: [
    { name: "LemonPepper", description: "6 Wings", price: 8.99 },
    { name: "Lousiana Rub", description: "12 Wings", price: 15.99 },
    { name: "Cajun", description: "18 Wings", price: 21.99 },
    { name: "Teriyaki", description: "24 Wings", price: 27.99 },
    {
      name: "Magno Habereno",
      description: "Choose your serving size",
      price: null,
    },
  ],
  salads: [
    {
      name: "Italian Table",
      price: 9.99,
      description:
        "Romaine lettuce, grape tomatoes, red onion, cucumber, pepperoncini, croutons",
    },
    {
      name: "Spinach Gorgonzola",
      price: 10.99,
      description: "Spinach, gorgonzola, walnuts, apples, cranberries",
    },
    {
      name: "Chopped",
      price: 12.99,
      description:
        "Romaine lettuce, pasta, chicken, bacon, gorgonzola, red onion, chopped tomatoes",
    },
    {
      name: "Antipasto",
      price: 10.99,
      description:
        "Mortadella, capicola, salami, mozzarella, pepperoncini, grape tomatoes",
    },
    {
      name: "Hawaiian",
      price: 9.99,
      description:
        "Tender ham, crisp bacon, juicy pineapple on zesty red sauce",
    },
    {
      name: "Caesar",
      price: 8.99,
      description: "Romaine lettuce, caesar dressing, parmesan, croutons",
    },
  ],
  pizza: [
    {
      name: "King Aurthors Supreme",
      price: 14.99,
      description:
        "Pepperoni, Italian sausage, salami, linguica, mushrooms, green peppers, onions, black olives on zesty red sauce",
    },
    {
      name: "Maui Zaui",
      price: 10.99,
      description:
        "Tender ham, crisp bacon, juicy pineapple, Roma tomatoes, red & green onions",
    },
    {
      name: "Chicken & Garlic Gourmet",
      price: 12.99,
      description:
        "Tender ham, crisp bacon, juicy pineapple, Roma tomatoes, red & green onions",
    },
    {
      name: "Italian Garlic Supreme",
      price: 9.99,
      description:
        "Pesto, artichoke hearts, zucchini, spinach, mushrooms, Roma tomatoes, garlic & Italian herb seasoning",
    },
    {
      name: "BBQ Chicken",
      price: 10.99,
      description:
        "Grilled white meat chicken, bacon, cheddar, tomatoes, red & green onions on BBQ ranch sauce",
    },
    {
      name: "Hawaiian",
      price: 8.99,
      description:
        "Tender ham, crisp bacon, juicy pineapple on zesty red sauce",
    },
    {
      name: "Caribbean Herb",
      price: 10.99,
      description:
        "Cilantro-lime crema, pepper jack, ham and chorizo, Roasted red peppers, grilled asparagus, and fresh basil",
    },
    {
      name: "Meat Lovers",
      price: 13.99,
      description:
        "Mozzeralla, pepperoni, salami, ham, Italian sausage, ground beef, seasonsed with italian herbs and garlic powder",
    },
  ],
  pastas: [
    {
      name: "Chicken Parmigiana",
      price: 9.99,
      description:
        "Fettuccine noodles, breaded chicken, mozzarella, marinara sauce",
    },
    {
      name: "Baked Lasagna",
      price: 10.99,
      description: "Baked ribbon noodles, four-cheese blend, marinara sauce",
    },
    {
      name: "Fettuccine Alfredo",
      price: 12.99,
      description: "Flat noodles, cream sauce",
    },
    {
      name: "Cheese Ravioli",
      price: 10.99,
      description: "Cheese ravioli, garlic butter, marinara sauce",
    },
    {
      name: "Mostaccioli Alforno",
      price: 9.99,
      description: "Baked penne noodles, ricotta, mozzarella, marinara sauce",
    },
    {
      name: "Penne Alla Rosati",
      price: 8.99,
      description: "Penne noodles, parmesan, diced chicken, alfredo sauce",
    },
  ],
  sandwiches: [
    {
      name: "Italian Beef",
      price: 9.99,
      description: "Slow-roasted beef, giardiniera, au jus",
    },
    {
      name: "Meatball Sub",
      price: 10.99,
      description: "Homemade meatballs, marinara sauce, mozzarella",
    },
    {
      name: "Chicken Parmesan",
      price: 11.99,
      description: "Breaded chicken, marinara sauce, mozzarella",
    },
    {
      name: "Philly Cheesesteak",
      price: 12.99,
      description: "Sliced beef, sautéed onions, peppers, provolone cheese",
    },
    {
      name: "Veggie Delight",
      price: 8.99,
      description: "Grilled vegetables, pesto, fresh mozzarella",
    },
    {
      name: "Turkey Club",
      price: 10.99,
      description: "Roasted turkey, bacon, lettuce, tomato, mayo",
    },
  ],
};

export default function ModernPizzaMenu() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("appetizers");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category && menuCategories.some((c) => c.id === category)) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center pt-5 font-serif text-red-900">
        Our Menu
      </h1>
      <Tabs
        value={activeCategory}
        onValueChange={setActiveCategory}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
          {menuCategories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="flex items-center gap-2"
            >
              {category.icon}
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {menuCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{category.label}</CardTitle>
                <CardDescription>
                  Explore our delicious {category.label.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[60vh]">
                  {menuItems[category.id as keyof MenuItems].map(
                    (item, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold">{item.name}</h3>
                            {item.description && (
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            )}
                          </div>
                          <span className="font-semibold">
                            {item.price !== null
                              ? `$${item.price.toFixed(2)}`
                              : ""}
                          </span>
                        </div>
                        {index <
                          menuItems[category.id as keyof MenuItems].length -
                            1 && <Separator className="my-4" />}
                      </div>
                    )
                  )}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
      {activeCategory === "wings" && (
        <div className="mt-8 text-center text-sm text-muted-foreground">
          **Served with a side of blue cheese or ranch
        </div>
      )}
      {activeCategory === "salads" && (
        <div className="mt-8 text-center">
          <h3 className="font-semibold mb-2">Dressings:</h3>
          <p className="text-sm text-muted-foreground">
            ITALIAN | CAESAR | RANCH | FRENCH | BALSAMIC | BLUE CHEESE
          </p>
        </div>
      )}
      {activeCategory === "pastas" && (
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>SERVED WITH GARLIC BREAD & GRATED CHEESE.</p>
          <p>ADD 2 MEATBALLS, 1 CHICKEN BREAST OR 1 SAUSAGE LINK</p>
        </div>
      )}
    </div>
  );
}
