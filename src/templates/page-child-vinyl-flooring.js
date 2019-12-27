import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { motion } from 'framer-motion'
import { HTMLContent } from "../components/content"
import WhyChooseUs from "../components/why-choose"
import Hero from "../components/hero"
import LogoCarousel from "../components/logo-carousel"
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

const ServicePage = ({ data }) => {

  const post = data.datoCmsVinylChildPageModular

  return (
    <>
      <SEO title="Home" />
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className=""
      >
        <motion.div
          className="content"
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
          className="my-10 content"
          variants={item}
          transition="easeInOut"
        >

          <div className="relative overflow-hidden">

            <div className="diagonal-stripes-grey -z-10 absolute h-full mt-48 w-full lg:w-3/5 lg:mt-0 lg:right-0"></div>

            <div className="container flex flex-col lg:flex-row lg:justify-between">

              <HTMLContent className="p-6 max-w-xl mx-auto mb-10 lg:w-1/2 lg:p-8 lg:m-0 lg:w-3/5 xl:px-0" content={post.copy} />

              <div className="lg:w-2/5">
                <WhyChooseUs containerClass="md:flex-col" />
              </div>

            </div>

          </div>

        </motion.div>

        <motion.div
          className="container lg:flex"
          variants={item}
          transition="easeInOut"
        >

          <p className="text-center text-blue-dark mb-4 lg:text-left lg:w-3/12 lg:text-2xl">A selection of the brands we’re proud to use...</p>

          <div className="lg:w-9/12 lg:my-auto my-auto">
            <LogoCarousel 
              images={post.logos}
            />
          </div>

        </motion.div>

        <motion.div
          className="relative mt-10"
          variants={item}
          transition="easeInOut"
        >

          <Map />

        </motion.div>

      </motion.section>
    </>
  )
}

export default ServicePage

export const query = graphql`
  query($slug: String!) {
    datoCmsVinylChildPageModular(slug: {eq: $slug}) {
      pageName
      heroBold
      heroRegular
      gallery {
        fluid(imgixParams: {w: "800", h: "520", fit: "crop", crop: "edges"}) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
  
`