import React, { Component } from 'react'
import PropTypes from "prop-types"
import Img from "gatsby-image"
import EmblaCarouselReact from 'embla-carousel-react'
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

class LogoCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: props.images,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    })
  }

  render() {
    return (
      <>
        {!this.state.isLoading ? (
          <motion.section
            variants={container}
            initial="hidden" 
            animate="visible"
          >
            <div className="relative">
            <motion.button
                  variants={item}
                  transition="easeInOut"
                  className="absolute top-0 left-0 p-1 font-bold text-xl bg-white font-serif appearance-none focus:outline-none z-10"
                  onClick={() => this.embla.scrollPrev()}
                >
                &larr;
              </motion.button>
              <motion.button
                variants={item}
                transition="easeInOut"
                className="absolute top-0 right-0 2xl:-mr-6 p-1 font-bold bg-white text-xl appearance-none focus:outline-none z-10"
                onClick={() => this.embla.scrollNext()}
              >
                &rarr;
              </motion.button>
              <EmblaCarouselReact
                emblaRef={c => (this.embla = c)}
                htmlTagName={`div`}
                options={{ 
                  align: 'start',
                  slidesToScroll: 1,
                  draggable: true,
                  loop: true,
                  speed: 8
                }}
                className="embla"
              >
                <div className="embla__container max-w-full px-4">
                  {this.state.images.map((image, index) =>
                    <motion.div
                      key={index}
                      variants={item}
                      transition="easeInOut"
                      className="embla__slide block"
                    >
                      <Img fixed={image.fixed} key={image.title} alt={image.alt} className="w-full block mb-px mx-4" />
                      {/* <span className="text-sm text-black">{('0' + (index + 1)).slice(-2)}</span> */}
                    </motion.div>
                  )}
                </div>
              </EmblaCarouselReact>
            </div>
          </motion.section>
        ) : (
          <p>Loading Reviews&hellip;</p>
        )}
      </>
    )
  }
}

LogoCarousel.propTypes = {
  images: PropTypes.array,
}

LogoCarousel.defaultProps = {
  images: [],
}

export default LogoCarousel