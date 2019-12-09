import React from "react"
// import { graphql } from "gatsby"
import SEO from "../components/seo"
import { motion } from 'framer-motion'
import Img from "gatsby-image"
// import { HTMLContent } from "../components/content"

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

const IndexPage = ({data}) => {

  const post = data.datoCmsHomePage

  return (
    <>
      <SEO title="Home" />
      <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
        className="container"
      >
        <motion.div 
          className="content"
          variants={item}
          transition="easeInOut"
        >
          <h1>{post.heroBold}</h1>
          <h2>{post.heroRegular}</h2>
          <h3>{post.heroSmall}</h3>

          <Img fluid={post.mainHeroImage.fluid} />

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

export default IndexPage

export const query = graphql`
query MyQuery {
  datoCmsHomePage {
    heroRegular
    heroBold
    heroSmall
    mainHeroImage {
      fluid(maxHeight: 200, maxWidth: 1800) {
        ...GatsbyDatoCmsFluid
      }
    }
  }
}

`