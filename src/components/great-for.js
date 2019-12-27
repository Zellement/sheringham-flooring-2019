import React from 'react'
import { motion } from 'framer-motion'

const duration = 0.75

const container = {
    visible: {
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.25,
            delayChildren: duration,
        },
    },
}
const item = {
    hidden: { y: 10, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    },
}

const GreatFor = ({ chosen }) => {

    console.log(chosen)

    return (
        <>
            <motion.section
                variants={container}
                initial="hidden"
                animate="visible"
            >

                <div className="p-4 lg:py-8">

                    <p className="text-center text-blue-dark mb-4 text-xl lg:text-2xl">Great for...</p>

                    <div className="flex flex-row flex-wrap align-center space-around justify-center">

                        {chosen.map(suitableForData => (

                            <motion.div
                                key={suitableForData.id}
                                variants={item}
                                transition="easeInOut"
                                className="w-1/2 p-4 text-center relative sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/10"
                            >

                                <div className="absolute -z-10 opacity-25 top-1/2 bg-boxes left-1/2 bg-blue-mid w-50px h-50px"></div>
                                <img className="w-50px h-50px opacity-50 block mx-auto" alt={suitableForData.area} src={suitableForData.image.url} />
                                <p>{suitableForData.area}</p>

                            </motion.div>
                        ))
                        }

                    </div>

                </div>

            </motion.section>
        </>
    )
}

export default GreatFor