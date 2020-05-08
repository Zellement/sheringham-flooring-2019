import React from "react"
import SEO from "../components/seo"
import { motion } from 'framer-motion'
import Map from "../components/map"

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}


const ContactPage = () => {


  return (
    <>
      <SEO
        title="Contact Sheringham Flooring"
        description="Contact Sheringham Flooring"
      />

      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
      >

        <motion.div
          variants={item}
          transition="easeInOut"
          className="my-4 lg:my-8 content"
        >

          <div className="relative overflow-hidden">

            <div className="absolute w-full h-full mt-48 diagonal-stripes-grey -z-10 lg:w-3/5 lg:mt-0 lg:right-0"></div>

            <div className="container max-w-xl p-4">

                <h1>Thanks!</h1>
              <p>We'll be in touch!</p>
            </div>

          </div>

        </motion.div>

        <div
          className="relative my-4 lg:my-8"
        >

          <Map />

        </div>

      </motion.section>
    </>
  )
}

export default ContactPage