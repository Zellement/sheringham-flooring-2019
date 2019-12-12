import React from "react"
// import { graphql } from "gatsby"
import SEO from "../components/seo"
import { motion } from 'framer-motion'
import Img from "gatsby-image"
import { Link } from "gatsby"
// import { HTMLContent } from "../components/content"
import Hero from "../components/hero"
import { HTMLContent } from "../components/content"

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

          <Hero
            heroBold={post.heroBold}
            heroRegular={post.heroRegular}
            heroSmall={post.heroSmall}
            mainImg={post.mainHeroImage.fluid}
          />

        </motion.div>

        <motion.div
          className="mt-10 sm:bg-blue-dark sm:mt-20"
          variants={item}
          transition="easeInOut"
        >

          <div className="container flex flex-col sm:flex-row sm:flex-wrap sm:justify-between">

          {post.buckets.map(bucketData => (

            <Link className="flex flex-col p-6 diagonal-stripes-grey block sm:w-1/2 lg:w-auto lg:flex-1 lg:mx-2 lg:-mt-12 lg:hover:-mt-16 transition" to={bucketData.link.slug}>

              <Img className="w-full" fluid={bucketData.image.fluid} />
              <span className="text-2xl text-blue-dark font-bold text-right sm:text-white lg:text-lg xl:text-2xl">{bucketData.title} &raquo;</span>

            </Link>
          ))}
          
          </div>

        </motion.div>

        <motion.div
          className="container"
          variants={item}
          transition="easeInOut"
        >
          
          <HTMLContent content={post.copy} />

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
    copy
    buckets {
      id
      title
      link {
        id
        slug
      }
      image {
        fluid(imgixParams: {h: "280", w: "350"}) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
    mainHeroImage {
      fluid(imgixParams: {h: "390", w: "800", fit: "crop"}) {
        ...GatsbyDatoCmsFluid_tracedSVG
      }
    }
  }
}

`