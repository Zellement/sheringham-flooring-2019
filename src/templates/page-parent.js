import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { motion } from 'framer-motion'

import { HTMLContent } from "../components/content"
import WhyChooseUs from "../components/why-choose"
import Hero from "../components/hero"
import LogoCarousel from "../components/logo-carousel"
import Map from "../components/map"
import GreatFor from "../components/great-for"
import Testimonial from "../components/testimonial"

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

  const post = data.datoCmsPageModular

  return (
    <>

      <SEO
        title={post.seo.title}
        description={post.seo.description}
      />

      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
      >

        <motion.div
          variants={item}
          transition="easeInOut"
          className="my-4 lg:my-8"
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
          className="my-4 lg:my-8"
        >

          <GreatFor
            chosen={post.suitableFor}
          />

        </motion.div>

        <motion.div
          className="my-4 lg:my-8 content"
          variants={item}
          transition="easeInOut"
        >

          <div className="relative overflow-hidden">

            <div className="diagonal-stripes-grey -z-10 absolute h-full mt-48 w-full lg:w-3/5 lg:mt-0 lg:right-0"></div>

            <div className="container flex flex-col lg:flex-row lg:justify-between">

              <HTMLContent className="p-6 max-w-xl mx-auto mb-10 lg:w-1/2 lg:p-8 lg:m-0 lg:w-3/5 xl:px-0" content={post.copy} />

              <div className="lg:w-2/5">
                <Testimonial content={post.testimonial} />
                <WhyChooseUs containerClass="md:flex-col" />
              </div>

            </div>

          </div>

        </motion.div>

        <LogoCarousel
          images={post.logos}
        />

        <motion.div
          className="relative my-4 lg:my-8"
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
    datoCmsPageModular(slug: {eq: $slug}) {
      pageName
      heroBold
      heroRegular
      heroSmall
      copy
      testimonial {
        name
        testimonial
        subtitle
      }
      seo {
        title
        description
      }
      suitableFor {
        id
        area
        image {
          url
        }
      }
      logos {
        fixed(imgixParams: {h: "30", w: "100"}) {
          ...GatsbyDatoCmsFixed_tracedSVG
        }
      }
      gallery {
        fluid(imgixParams: {w: "800", h: "520", fit: "crop", crop: "edges"}) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
  
`