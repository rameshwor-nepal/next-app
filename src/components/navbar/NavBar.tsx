"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { NavLink } from './navlink'


const NavBar = () => {
    const links = [
        { url: '/', title: "Home" },
        { url: '/about', title: "About" },
        { url: '/portfolio', title: "Portfolio" },
        { url: '/contact', title: "Contact" },
    ]
    const [open, setOpen] = useState<boolean>(false)
    return (
        <div className='h-full text-lg flex items-center justify-between px-4 sm:px-8 md:px-12 lg:20 xl:px-40'>
            <div className='hidden md:flex gap-2 w-1/3'>
                {links.map((link => (
                    <NavLink link={link} key={link.title} />
                )))
                }
            </div>

            <div className='w-1/3 h-4 font-black text-purple-950 md:hidden'>
                LoGO
            </div>

            <div className='hidden md:flex gap-2 w-1/3'>
                <Link href='#'>
                    <span>Github</span>
                </Link>
                <Link href='#'>
                    <span>Facebook</span>
                </Link>
                <Link href='#'>
                    <span>LinkedIn</span>
                </Link>
            </div>


            <div className='md:hidden'>
                <button
                    className='w-10 h-8 flex flex-col justify-between z-50 relative'
                    onClick={() => setOpen(!open)}
                >
                    <div className='w-10 h-1 bg-white rounded'></div>
                    <div className='w-10 h-1 bg-white rounded'></div>
                    <div className='w-10 h-1 bg-white rounded'></div>
                </button>
                {open &&
                    <div className='absolute top-0 left-0 w-screen h-screen bg-slate-800 text-white flex flex-col items-center justify-center gap-8 text-4xl'>
                        {
                            links.map((link => (
                                <Link href={link.url} key={link.title}>{link.title}</Link>
                            )))
                        }
                    </div>
                }

            </div>
        </div>
    )
}

export default NavBar