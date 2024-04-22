import React, { useRef } from 'react'
import Details from './Details'
import { motion, useScroll } from 'framer-motion'

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });
    return (
        <div className='my-16 flex flex-col gap-12 mx-16 items-center justify-center'>
            <h2 className='font-bold text-5xl mb-16 text-center'>
                Experience
            </h2>
            <div className='w-[75%] mx-auto relative' ref={ref}>
                <motion.div
                    className='absolute left-[53px] top-0 w-[4px] h-full bg-black origin-top'
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className='w-full ml-4 flex flex-col items-start justify-between'>
                    <Details
                        position='Intern'
                        company='Smart Solutions Pvt. Ltd'
                        time='July 2023- Nov 2023'
                        address='Kamaladi, Kathmandu, Nepal'
                        companyLink='#'
                        work='Used understanding of React fundamentals to promote better component lifecycle practices,
                             Used Redux Toolkit for state management and RTK Query for data fetching and caching,
                             Debugged and resolved application issues to improve user experience,
                             Developed UI with tailwind CSS , working on side projects and tasks'
                    />
                    <Details
                        position='Intern'
                        company='Smart Solutions Pvt. Ltd'
                        time='July 2023- Nov 2023'
                        address='Kamaladi, Kathmandu, Nepal'
                        companyLink='#'
                        work='Used understanding of React fundamentals to promote better component lifecycle practices,
                             Used Redux Toolkit for state management and RTK Query for data fetching and caching,
                             Debugged and resolved application issues to improve user experience,
                             Developed UI with tailwind CSS , working on side projects and tasks'
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience