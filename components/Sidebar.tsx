import Card from "./Card";
import Image from "next/image";
import SidebarLink from "./SidebarLink";

const links = [
  { label: "Home", icon: "Grid", link: "/" },
  {
    label: "Blog",
    icon: "FileText",
    link: "/blog",
  },
  { label: "About", icon: "User", link: "/about" },
  {
    label: "Projects",
    icon: "Code",
    link: "/projects",
  },
];

const Sidebar = () => {
  return (
    <Card className="flex flex-wrap items-center justify-between w-40 h-full bg-slate-100">
      {
        // <div className="flex items-center justify-center w-full">
        //<Image src={logo} alt="Able logo" priority className="w-14" />
        //</div>
      }
      {links.map((link) => (
        <SidebarLink link={link} key={link.link} />
      ))}
    </Card>
  );
};

export default Sidebar;
