import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

const ProjectPage = () => {
  const projects = [
    {
      title: "Portfolio",
      description: "My personal portfolio website",
      image: "/images/portfolio.png",
      link: "",
    },
    {
      title: "Project Manager",
      description: "A project management tool",
      image: "/images/project-manager.png",
      link: "",
    },
    {
      title: "Cobra",
      description: "A message board",
      image: "/images/cobra.png",
      link: "",
    },
    {
      title: "AI Image Generator",
      description: "A tool to generate images using AI",
      image: "/images/ai-image-generator.png",
      link: "",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full h-full overflow-y-auto">
      <h1 className="py-6 text-4xl font-bold">Projects</h1>
      <div className="flex flex-row flex-wrap items-center justify-center w-full h-full">
        {projects.map((project) => (
          <Card key={project.title} className="md:w-1/3 w-3/4 p-6 m-6">
            <Image src={project.image} width={500} height={300} alt="Project" />
            <h2 className="md:text-3xl font-bold text-slate-600">
              {project.title}
            </h2>
            <p className="py-4">{project.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
