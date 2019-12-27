import React, { Component } from 'react'
import PropTypes from "prop-types"
import Img from "gatsby-image"
import EmblaCarouselReact from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io'

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

class GalleryCarousel extends Component {
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
                  className="absolute cursor-pointer mt-1 mr-1 top-0 left-0 p-1 font-bold text-2xl text-yellow font-serif appearance-none focus:outline-none z-10"
                  onClick={() => this.embla.scrollPrev()}
                >
                <IoIosArrowDropleftCircle />
              </motion.button>
              <motion.button
                variants={item}
                transition="easeInOut"
                className="absolute cursor-pointer mt-1 mr-1 top-0 right-0 2xl:-mr-6 font-bold text-yellow text-2xl appearance-none focus:outline-none z-10"
                onClick={() => this.embla.scrollNext()}
              >
                <IoIosArrowDroprightCircle />
              </motion.button>
              <EmblaCarouselReact
                emblaRef={c => (this.embla = c)}
                htmlTagName={`div`}
                options={{ 
                  align: 'start',
                  slidesToScroll: 1,
                  draggable: true,
                  loop: false,
                  speed: 8
                }}
                className="embla-viewport"
              >
                <div className="embla__container max-w-full">
                  {this.state.images.map((image, index) =>
                    <motion.div
                      key={index}
                      variants={item}
                      transition="easeInOut"
                      className="embla__slide embla__slide--gallery block"
                    >
                      <Img
                        backgroundColor="#26486E"
                        fluid={image.fluid}
                        key={image.title}
                        alt={image.alt}
                        className="w-full block mb-px"
                      />
                      <span className="text-sm bg-white p-1 text-black absolute bottom-0 right-0 z-50">{('0' + (index + 1)).slice(-2)}</span>
                    </motion.div>
                  )}
                </div>
              </EmblaCarouselReact>
            </div>
          </motion.section>
        ) : (
          <p>Loading images&hellip;</p>
        )}
      </>
    )
  }
}

GalleryCarousel.propTypes = {
  images: PropTypes.array,
}

GalleryCarousel.defaultProps = {
  images: [],
}

export default GalleryCarousel