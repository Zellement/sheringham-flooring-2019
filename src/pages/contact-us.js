import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { motion } from 'framer-motion'
import WhyChooseUs from "../components/why-choose"
import { HTMLContent } from "../components/content"
import Hero from "../components/hero"
import Map from "../components/map"
import QuickContactForm from "../components/quick-contact-form"
import Phone from "../components/phone"
import Email from "../components/email"

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


const IndexPage = ({ data, data2 }) => {

  console.log(data)

  const post = data.datoCmsContactPage

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
          className="my-4 lg:my-8"
          variants={item}
          transition="easeInOut"
        >

          <Hero
            heroBold={post.heroBold}
            heroRegular={post.heroRegular}
            heroSmall={post.heroSmall}
            carouselImgs={post.gallery}
          />

        </motion.div>

        <motion.div
          variants={item}
          transition="easeInOut"
          className="my-4 lg:my-8 content"
        >

          <div className="relative overflow-hidden">

            <div className="absolute w-full h-full mt-48 diagonal-stripes-grey -z-10 lg:w-3/5 lg:mt-0 lg:right-0"></div>

            <div className="container max-w-xl p-4">

              <HTMLContent content={post.copy} />

              <Phone />
              <Email />

              <QuickContactForm />

            </div>

          </div>

        </motion.div>

        <motion.div
          variants={item}
          transition="easeInOut"
          className="relative my-4 lg:my-8"
        >

          <WhyChooseUs containerClass="md:flex-row" />

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

export default IndexPage

export const query = graphql`
query ContactQuery {
  datoCmsContactPage {
    heroRegular
    heroBold
    heroSmall
    copy
    gallery {
      fluid(imgixParams: {w: "800", h: "520", fit: "crop", crop: "edges"}) {
        ...GatsbyDatoCmsFluid_tracedSVG
      }
    }
  }
}

`