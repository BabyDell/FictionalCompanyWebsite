"use client";

import { useState } from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  description?: string;
}

const menuCategories = [
  { id: "appetizers", name: "Appetizers" },
  { id: "wings", name: "Wings" },
  { id: "salads", name: "Salads" },
  { id: "pizza", name: "Pizza" },
  { id: "pastas", name: "Pastas" },
  { id: "sandwiches", name: "Sandwiches" },
];

const menuItems: { [key: string]: MenuItem[] } = {
  appetizers: [
    { id: 1, name: "Chicken Tenders", price: 5.99 },
    { id: 2, name: "Breaded Mushrooms", price: 6.99 },
    { id: 3, name: "Mozzarella Sticks", price: 4.99 },
    { id: 4, name: "Jalapeño Poppers", price: 7.99 },
    { id: 5, name: "French Fries", price: 3.99 },
    { id: 6, name: "Crab Melts", price: 8.99 },
    { id: 7, name: "Onion Rings", price: 8.99 },
    { id: 8, name: "Cheddar Biscuits", price: 5.99 },
  ],
  wings: [
    { id: 9, name: "LemonPepper", description: "6 Wings", price: 8.99 },
    { id: 10, name: "Louisiana Rub", description: "12 Wings", price: 15.99 },
    { id: 11, name: "Cajun", description: "18 Wings", price: 21.99 },
    { id: 12, name: "Teriyaki", description: "24 Wings", price: 27.99 },
    {
      id: 13,
      name: "Magno Habenero",
      description: "Choose your serving size",
      price: 27,
    },
  ],
  salads: [
    {
      id: 14,
      name: "Italian Table",
      price: 9.99,
      description:
        "Romaine lettuce, grape tomatoes, red onion, cucumber, pepperoncini, croutons",
    },
    {
      id: 15,
      name: "Spinach Gorgonzola",
      price: 10.99,
      description: "Spinach, gorgonzola, walnuts, apples, cranberries",
    },
    {
      id: 16,
      name: "Chopped",
      price: 12.99,
      description:
        "Romaine lettuce, pasta, chicken, bacon, gorgonzola, red onion, chopped tomatoes",
    },
    {
      id: 17,
      name: "Antipasto",
      price: 10.99,
      description:
        "Mortadella, capicola, salami, mozzarella, pepperoncini, grape tomatoes",
    },
    {
      id: 18,
      name: "Hawaiian",
      price: 9.99,
      description:
        "Tender ham, crisp bacon, juicy pineapple on zesty red sauce",
    },
    {
      id: 19,
      name: "Caesar",
      price: 8.99,
      description: "Romaine lettuce, caesar dressing, parmesan, croutons",
    },
  ],
  pizza: [
    {
      id: 20,
      name: "King Aurthors Supreme",
      price: 14.99,
      description:
        "Pepperoni, Italian sausage, salami, linguica, mushrooms, green peppers, onions, black olives on zesty red sauce",
    },
    {
      id: 21,
      name: "Maui Zaui",
      price: 10.99,
      description:
        "Tender ham, crisp bacon, juicy pineapple, Roma tomatoes, red & green onions",
    },
    {
      id: 22,
      name: "Chicken & Garlic Gourmet",
      price: 12.99,
      description:
        "Tender ham, crisp bacon, juicy pineapple, Roma tomatoes, red & green onions",
    },
    {
      id: 23,
      name: "Italian Garlic Supreme",
      price: 9.99,
      description:
        "Pesto, artichoke hearts, zucchini, spinach, mushrooms, Roma tomatoes, garlic & Italian herb seasoning",
    },
    {
      id: 24,
      name: "BBQ Chicken",
      price: 10.99,
      description:
        "Grilled white meat chicken, bacon, cheddar, tomatoes, red & green onions on BBQ ranch sauce",
    },
    {
      id: 25,
      name: "Hawaiian",
      price: 8.99,
      description:
        "Tender ham, crisp bacon, juicy pineapple on zesty red sauce",
    },
    {
      id: 26,
      name: "Caribbean Herb",
      price: 10.99,
      description:
        "Cilantro-lime crema, pepper jack, ham and chorizo, Roasted red peppers, grilled asparagus, and fresh basil",
    },
    {
      id: 27,
      name: "Meat Lovers",
      price: 13.99,
      description:
        "Mozzarella, pepperoni, salami, ham, Italian sausage, ground beef, seasoned with italian herbs and garlic powder",
    },
  ],
  pastas: [
    {
      id: 28,
      name: "Chicken Parmigiana",
      price: 9.99,
      description:
        "Fettuccine noodles, breaded chicken, mozzarella, marinara sauce",
    },
    {
      id: 29,
      name: "Baked Lasagna",
      price: 10.99,
      description: "Baked ribbon noodles, four-cheese blend, marinara sauce",
    },
    {
      id: 30,
      name: "Fettuccine Alfredo",
      price: 12.99,
      description: "Flat noodles, cream sauce",
    },
    {
      id: 31,
      name: "Cheese Ravioli",
      price: 10.99,
      description: "Cheese ravioli, garlic butter, marinara sauce",
    },
    {
      id: 32,
      name: "Mostaccioli Alforno",
      price: 9.99,
      description: "Baked penne noodles, ricotta, mozzarella, marinara sauce",
    },
    {
      id: 33,
      name: "Penne Alla Rosati",
      price: 8.99,
      description: "Penne noodles, parmesan, diced chicken, alfredo sauce",
    },
  ],
  sandwiches: [
    {
      id: 34,
      name: "Italian Beef",
      price: 9.99,
      description: "Slow-roasted beef, giardiniera, au jus",
    },
    {
      id: 35,
      name: "Meatball Sub",
      price: 10.99,
      description: "Homemade meatballs, marinara sauce, mozzarella",
    },
    {
      id: 36,
      name: "Chicken Parmesan",
      price: 11.99,
      description: "Breaded chicken, marinara sauce, mozzarella",
    },
    {
      id: 37,
      name: "Philly Cheesesteak",
      price: 12.99,
      description: "Sliced beef, sautéed onions, peppers, provolone cheese",
    },
    {
      id: 38,
      name: "Veggie Delight",
      price: 8.99,
      description: "Grilled vegetables, pesto, fresh mozzarella",
    },
    {
      id: 39,
      name: "Turkey Club",
      price: 10.99,
      description: "Roasted turkey, bacon, lettuce, tomato, mayo",
    },
  ],
};

export default function OrderOnline() {
  const [cart, setCart] = useState<MenuItem[]>([]);
  const [activeTab, setActiveTab] = useState("appetizers");

  const addToCart = (item: MenuItem) => {
    setCart([...cart, item]);
  };

  return (
    <div className="h-auto min-h-dvh bg-[url('/img/rosatiBG.jpg')] bg-cover pb-16 ">
      <div className="w-full xl:w-[1150px] mx-auto grid bg-amber-50 pb-10 rounded-lg ">
        <h1 className="text-4xl font-bold mb-8 text-center pt-5 font-serif text-red-900">
          Order Online
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 mx-10">
          <div className="lg:w-3/4">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 lg:grid-cols-6 gap-2">
                {menuCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="font-serif"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {menuCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {menuItems[category.id].map((item) => (
                      <Card key={item.id}>
                        <CardHeader>
                          <CardTitle className="font-serif text-red-800">
                            {item.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 mb-2">
                            {item.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="font-bold">
                              ${item.price.toFixed(2)}
                            </span>
                            <Button
                              onClick={() => addToCart(item)}
                              className="bg-emerald-800 hover:bg-emerald-700"
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
          <div className="lg:w-1/4">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-red-800 flex items-center gap-2">
                  <FaShoppingCart /> Your Order
                </CardTitle>
              </CardHeader>
              <CardContent>
                {cart.length === 0 ? (
                  <p>Your cart is empty</p>
                ) : (
                  <>
                    {cart.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center mb-2"
                      >
                        <span>{item.name}</span>
                        <span>${item.price.toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="mt-4 border-t pt-4">
                      <div className="flex justify-between items-center font-bold">
                        <span>Total:</span>
                        <span>
                          $
                          {cart
                            .reduce((total, item) => total + item.price, 0)
                            .toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-emerald-800 hover:bg-emerald-700">
                      Checkout
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
