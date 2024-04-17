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
    <Link className={`rounded p-2 ${pathName === link.url && "bg-[#2a1c43] text-white"}`} href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;
