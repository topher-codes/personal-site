import clsx from "clsx"; 
import Card from "./Card";
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

const Sidebar = ({className}) => {
  return (
    <Card className={clsx("flex flex-wrap items-center justify-between w-40 h-full bg-slate-100", className)}>
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
