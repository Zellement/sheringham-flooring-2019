import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { motion } from 'framer-motion'
import Img from "gatsby-image"
import { Link } from "gatsby"
import Hero from "../components/hero"
import WhyChooseUs from "../components/why-choose"
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
          className="relative"
          variants={item}
          transition="easeInOut"
        >

          <WhyChooseUs />

        </motion.div>

        <motion.div
          className="mt-10 sm:bg-blue-dark sm:mt-20"
          variants={item}
          transition="easeInOut"
        >

          <div className="container flex flex-col sm:flex-row sm:flex-wrap sm:justify-between">

            {post.buckets.map(bucketData => (

              <Link key={bucketData.id} className="flex flex-col p-6 diagonal-stripes-grey block sm:w-1/2 lg:w-auto lg:flex-1 lg:mx-2 lg:-mt-12 lg:hover:-mt-16 transition" to={bucketData.link.slug}>

                <Img className="w-full" fluid={bucketData.image.fluid} />
                <span className="text-2xl text-blue-dark font-bold text-right sm:text-white lg:text-lg xl:text-2xl">{bucketData.title} &raquo;</span>

              </Link>
            ))}

          </div>

        </motion.div>

        <motion.div
          className="my-10 content"
          variants={item}
          transition="easeInOut"
        >

          <div className="relative overflow-hidden">

            <div className="diagonal-stripes-grey -z-10 absolute h-full mt-48 w-full lg:w-3/5 lg:mt-0 lg:right-0"></div>

            <div className="container flex flex-col lg:flex-row">

              <HTMLContent className="p-6 max-w-xl mx-auto mb-10 lg:w-1/2" content={post.copy} />

              <Img className="w-full lg:w-1/2 lg:my-8" fluid={post.copyImage.fluid} />

            </div>

          </div>

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
    copyImage {
      fluid(imgixParams: {h: "500", w: "600", fit: "crop"}) {
        ...GatsbyDatoCmsFluid_tracedSVG
      }
    }
  }
}

`