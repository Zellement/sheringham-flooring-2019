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

    if (chosen.length > 0) {

        return (
            <>
                <motion.section
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >

                    <div className="my-4 lg:my-8">

                        <p className="mb-4 text-xl text-center text-blue-dark lg:text-2xl">Great for...</p>

                        <div className="flex flex-row flex-wrap justify-center align-center space-around">

                            {chosen.map(suitableForData => (

                                <motion.div
                                    key={suitableForData.id}
                                    variants={item}
                                    transition="easeInOut"
                                    className="relative flex flex-col w-1/2 p-4 text-center sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/12"
                                >

                                    <div className="absolute rounded-lg opacity-25 -z-10 top-1/2 bg-boxes left-1/2 bg-blue-mid w-50px h-50px"></div>
                                    <img className="block mx-auto opacity-50 w-50px h-50px" alt={suitableForData.area} src={suitableForData.image.url} />
                                    <p className="mt-2">{suitableForData.area}</p>

                                </motion.div>
                            ))
                            }

                        </div>

                    </div>

                </motion.section>
            </>
        )

    }

    else {
        return null
    }
}

export default GreatFor