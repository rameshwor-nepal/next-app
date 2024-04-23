import React from 'react'
import { motion, useScroll } from 'framer-motion'

const LiIcon = ({ reference }: any) => {
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["center end", "center center"]
    });
    return (
        <figure className='absolute left-0  stroke-black'>
            {/* <h1>Hello</h1> */}
            <svg width={75} height={75} viewBox='0 0 100 100' className='-rotate-90'>
                <circle cx={'75'} cy={'50'} r={'20'} fill='none' stroke='blue' strokeWidth={1} />
                <motion.circle
                    cx={'75'}
                    cy={'50'}
                    r={'20'}
                    fill='white' stroke={'blue'} strokeWidth={3}
                    style={{
                        pathLength: scrollYProgress
                    }}
                />
                <circle cx={'75'} cy={'50'} r={'10'} className='animate-pulse' fill='blue' strokeWidth={1} />
            </svg>
        </figure>
    )
}

export default LiIcon