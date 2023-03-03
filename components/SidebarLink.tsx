"use client";
import Link from "next/link";
import { Code, User, Grid, FileText } from "react-feather";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const icons = { Code, User, Grid, FileText };

const SidebarLink = ({ link }) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link.link) {
    isActive = true;
  }

  const Icon = icons[link.icon];
  return (
    <Link href={link.link} className="flex items-center justify-center w-full">
      <Icon
        size={40}
        className={clsx(
          "stroke-gray-400 hover:stroke-slate-600 transition duration-200 ease-in-out",
          isActive && "stroke-slate-600"
        )}
      />
    </Link>
  );
};

export default SidebarLink;
