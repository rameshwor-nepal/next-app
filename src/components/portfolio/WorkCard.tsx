import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';

interface PropsI {
    type: string;
    title: string;
    summary: string;
    img: string;
    link: string;
    githubLink: string;

}
const WorkCard = ({ type, title, summary, img, link, githubLink }: PropsI) => {
    return (
        <article className='w-full relative p-6 flex items-center justify-between rounded-xl border border-solid border-black bg-white shadow-lg '>
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black" />
            <Link
                href={link}
                target='_blank'
                className='w-1/3 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt='link' width={0} height={0} className='w-full  max-h-[25rem] object-contain' />
            </Link>

            <div className='w-2/3 flex flex-col items-start justify-between pl-4'>
                <span className='text-blue-900 font-medium text-xl'>
                    {type}
                </span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-black'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={githubLink} target='_blank' className='text-2xl'>
                        <BsGithub />
                    </Link>
                    <Link href={githubLink} target='_blank' className='ml-4 rounded-lg bg-black text-white px-4 py-2 font-semibold '>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default WorkCard