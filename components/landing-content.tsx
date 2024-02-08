"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Eren Yaeger",
    avatar: "E",
    title: "World Rumbler",
    description:
      "Even though there are many AI platforms out there, Spash remains my choice.",
  },
  {
    name: "Armin",
    avatar: "A",
    title: "Strategist",
    description: "I can't belive I've met great AI platfotm like this.",
  },
  {
    name: "Mikasa Ackerman",
    avatar: "M",
    title: "Guardian",
    description: "The same reason with Eren.",
  },
  {
    name: "Levi Ackerman",
    avatar: "M",
    title: "Human Strongest Weapon",
    description: "I like this.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-semibold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((testimony) => (
          <Card
            key={testimony.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{testimony.name}</p>
                  <p className="text-zinc-400 text-sm">{testimony.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {testimony.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
