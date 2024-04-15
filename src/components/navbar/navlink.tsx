import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface PropI{
    link: {
        url : string;
        title : string;
    }
}

export const NavLink = ({link}: PropI) => {
    const pathName = usePathname()
  return (
    <Link href={link.url} className={` rounded p-2 ${pathName === link.url && "bg-black text-white"}`}>{link.title}</Link>
  )
}
