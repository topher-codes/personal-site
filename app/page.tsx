import Card from "@/components/Card";
import Link from "next/link";
import { Suspense } from "react";
import ContactModal from "@/components/ContactModal";

export default async function Page() {
  const cards = [
    {
      title: "Blog",
      link: "/blog",
      description: "A list of blog posts I've written.",
    },
    {
      title: "Projects",
      link: "/projects",
      description: "A list of projects I've worked on.",
    },
    {
      title: "Resume",
      link: "/about",
      description: "A little bit about me.",
    },
  ];

  return (
    <div className="w-full h-full pr-6 overflow-y-auto">
      <div className=" items-stretch justify-center min-h-[content]">
        <div className="flex flex-wrap items-center justify-center mt-3 -m-3 flex-3 h-content grow">
          {cards.map((card) => (
            <Link href={card.link} key={card.link}>
              <Card className="flex flex-col items-center justify-center w-32 h-32 lg:w-64 lg:h-64 m-3 bg-slate-100 hover:scale-105 transition duration-200">
                <h2 className="text-md lg:text-3xl font-bold">{card.title}</h2>
              </Card>
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center flex-1 mt-6 grow">
          <ContactModal />
        </div>
        <div className="flex w-full mt-6 flex-2 grow">
          <div className="w-full px-20">{/*<Search /> */}</div>
        </div>
      </div>
    </div>
  );
}
