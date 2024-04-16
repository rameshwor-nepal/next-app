"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface PropI{
  link:{
    url: string;
    title: string;
  }
}

const NavLink = ({ link }: PropI) => {
  const pathName = usePathname();

  return (
    <Link className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`} href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;
