import LiIcon from '@/utils/LiIcon';
import { motion } from 'framer-motion';
import React, { useRef } from 'react'
interface PropsI {
    position: string;
    company: string;
    companyLink: string;
    time: string;
    address: string;
    work: string;

}

const Details = ({ position, company, companyLink, time, address, work }: PropsI) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-6 first:mt-0 last:mb-0 w-[70%] h-full mx-auto flex flex-col items-center justify-center '>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}
            >
                <h3 className='capitilize font-bold text-2xl'>
                    <span>
                        {position}
                    </span>
                    <a href={companyLink} target='_blank' className='ml-2 text-blue-500'>
                        @{company}
                    </a>
                </h3>
                <span className='capitalize font-medium text-black/70'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
            </motion.div>
        </li>

    )
}

export default Details