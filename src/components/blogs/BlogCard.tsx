"use client"
import Link from 'next/link';
import React, { useRef } from 'react'
import Image from 'next/image';
import { motion, useMotionValue } from 'framer-motion';

interface PropI {
    image: string;
    title: string;
    time?: string;
    summary?: string;
    link: string;
    date?: string;
}
const FramerImage = motion(Image);

export const BlogCard = ({ image, title, time, summary, link }: PropI) => {
    return (
        <li className='col-span-1 relative w-full p-4 bg-white border border-solid border-black rounded-2xl'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-black' />
            <Link href={link} target='_blank'
                className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={image} alt='blog image' width={0} height={0} className='w-full max-h-[15rem] object-contain'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>

            <Link href={link}>
                <h2 className='capitalize text-2xl font-bold my-2 hover:underline'>
                    {title}
                </h2>
            </Link>
            <p className='text-sm mb-2'>
                {summary}
            </p>
            <span className='text-blue-500 font-semibold'>
                {time}
            </span>
        </li>
    )
}

const MovingImage = ({ title, img, link }: any) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef<HTMLImageElement>(null);

    const handleMouseIn = (event: any) => {
        if (imgRef.current) {
            imgRef.current.style.display = 'inline-block';
            x.set(event.pageX);
            y.set(-10);
        }
    }
    const handleMouseOut = (event: any) => {
        if (imgRef.current) {
            imgRef.current.style.display = 'none';
            x.set(0);
            y.set(0);
        }
    }
    return (
        <Link href={link} onMouseMove={handleMouseIn} onMouseLeave={handleMouseOut}>
            <h2 className='capitalize text-xl font-semibold hover:underline'>
                {title}
            </h2>
            <FramerImage
                style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
                ref={imgRef} src={img} alt='image' width={0} height={0} className='w-36 h-auto hidden absolute rounded-lg z-10' />
        </Link>
    )
}

export const BlogList = ({ image, title, link, date }: PropI) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
            viewport={{ once: true }}
            className='relative w-full p-4 py-6 my-4 rounded-lg flex items-center justify-between bg-white text-black first:mt-0 border border-solid border-black border-r-4 border-b-4'>
            <MovingImage title={title} img={image} link={link} />
            <span className='text-blue-500 font-semibold pl-4'>{date}</span>

        </motion.li>
    )
}