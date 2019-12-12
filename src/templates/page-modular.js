import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { motion } from 'framer-motion'
// import { HTMLContent } from "../components/content"
import Hero from "../components/hero"

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

const ServicePage = ({data}) => {

  const post = data.datoCmsPageModular

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
          mainImg={post.mainHeroImage.fluid}
        />

        </motion.div>

        <motion.div 
          className="content"
          variants={item}
          transition="easeInOut"
        >
          <hr className="block my-8" />
        </motion.div>

        <motion.div 
          className="content"
          variants={item}
          transition="easeInOut"
        >
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <h2>Lorem ipsum dolor sit amet</h2>
          
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
      mainHeroImage {
        fluid(imgixParams: {h: "390", w: "800", fit: "crop"}) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
  
`