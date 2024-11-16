import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChefHat, FlameIcon as Fire, Heart, Users } from "lucide-react";

export default function OurStory() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center pt-5 font-serif text-red-900">Our Story</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <Image
            src="/img/rosatisFounders.png"
            alt="Founders of Inferno Blaze Pizza"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-4">
            From Passion to Pizza Perfection
          </h2>
          <p className="text-lg mb-4">
            Inferno Blaze Pizza was born from a simple yet powerful idea: to
            create the perfect pizza experience. Our journey began in 2010 when
            two pizza-loving friends, Maria and John, decided to turn their
            passion into a business.
          </p>
          <p className="text-lg">
            What started as a small operation in a tiny kitchen has now grown
            into a beloved local chain, serving thousands of happy customers
            every day. Our commitment to quality ingredients, innovative
            recipes, and exceptional customer service has remained unchanged
            since day one.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          {
            icon: <ChefHat className="h-10 w-10 mb-4" />,
            title: "Artisanal Craftsmanship",
            description: "Each pizza is handcrafted with care and expertise.",
          },
          {
            icon: <Fire className="h-10 w-10 mb-4" />,
            title: "Flame-Fired Perfection",
            description:
              "Our custom ovens ensure the perfect crisp every time.",
          },
          {
            icon: <Heart className="h-10 w-10 mb-4" />,
            title: "Community First",
            description:
              "We're proud to be a part of and give back to our local community.",
          },
          {
            icon: <Users className="h-10 w-10 mb-4" />,
            title: "Family-Friendly",
            description: "A welcoming atmosphere for pizza lovers of all ages.",
          },
        ].map((item, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <CardTitle className="flex justify-center">{item.icon}</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-2xl">Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            At Inferno Blaze Pizza, our mission is to ignite pizza passion in
            every bite. We strive to create not just meals, but memorable
            experiences that bring people together. Through our commitment to
            quality, innovation, and community, we aim to be more than just a
            pizzeria – we want to be a cherished part of your life&apos;s special
            moments.
          </p>
        </CardContent>
      </Card>

      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Join Us on Our Journey</h2>
        <p className="text-lg mb-6">
          We&apos;re always looking for passionate individuals to join our team and
          help us continue our story. If you love pizza as much as we do, we&apos;d
          love to hear from you!
        </p>
        <Button size="lg">View Career Opportunities</Button>
      </div>
    </div>
  );
}
