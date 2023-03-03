import Card from "@/components/Card";
import Link from "next/link";
import { Suspense } from "react";
import Header from "@/components/Header";

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
      <div className=" h-full  items-stretch justify-center min-h-[content]">
        <div className="flex flex-1 grow">
          <Header />
        </div>
        <div className="flex flex-wrap items-center justify-center flex-1 h-full mt-3 -m-3 grow">
          {cards.map((card) => (
            <Link href={card.link} key={card.link}>
              <Card className="flex flex-col items-center justify-center w-64 h-64 m-3 bg-slate-100 hover:bg-slate-300">
                <h1 className="text-3xl font-bold">{card.title}</h1>
              </Card>
            </Link>
          ))}
        </div>
        <div className="flex w-full mt-6 flex-2 grow">
          <div className="w-full">{/* Footer */}</div>
        </div>
      </div>
    </div>
  );
}
