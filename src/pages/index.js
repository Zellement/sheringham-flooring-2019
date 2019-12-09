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

const IndexPage = ({ data }) => {

  const post = data.datoCmsHomePage

  return (
    <>
      <SEO title="Carpets, Wooden Flooring, Vinyl Flooring Cromer, Fakenham, North Walsham" />

      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className=""
      >

        <motion.div
          className="relative"
          variants={item}
          transition="easeInOut"
        >

          <div className="diagonal-stripes-grey absolute -z-10 w-3/5"></div>

          <div className="container ">

            <div className="text-center p-4 md:text-left md:w-3/5">
              <p className="hero__bold">{post.heroBold}</p>
              <p className="hero__regular">{post.heroRegular}</p>
              <p className="hero__small">{post.heroSmall}</p>

            </div>

          </div>

          <div className="md:w-1/2 md:absolute md:right-0 md:top-0 md:z-10 md:mt-4">

            <Img
              className=""
              fluid={post.mainHeroImage.fluid}
            />

          </div>

        </motion.div>

        <motion.div
          className="content"
          variants={item}
          transition="easeInOut"
        >

          sdasd

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
      fluid(imgixParams: {h: "350", w: "800"}) {
        ...GatsbyDatoCmsFluid_tracedSVG
      }
    }
  }
}

`