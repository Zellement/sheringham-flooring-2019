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
                className="embla-viewport"
              >
                <div className="max-w-full embla__container">
                  {this.state.images.map((image, index) =>
                    <motion.div
                      key={index}
                      variants={item}
                      transition="easeInOut"
                      className="block embla__slide embla__slide--gallery"
                    >
                      <Img
                        backgroundColor="#26486E"
                        fluid={image.fluid}
                        key={image.title}
                        alt={image.alt}
                        className="block w-full mb-px"
                        loading="eager"
                      />
                      <span className="absolute bottom-0 right-0 z-20 p-1 text-sm text-black bg-white">{('0' + (index + 1)).slice(-2)}</span>
                    </motion.div>
                  )}
                </div>
              </EmblaCarouselReact>
              <motion.button
                variants={item}
                transition="easeInOut"
                className="absolute top-0 left-0 z-10 p-1 mt-1 mr-1 font-serif text-2xl font-bold appearance-none cursor-pointer text-yellow focus:outline-none"
                onClick={() => this.embla.scrollPrev()}
                aria-label="Previous image"
              >
                <IoIosArrowDropleftCircle />
              </motion.button>
              <motion.button
                variants={item}
                transition="easeInOut"
                className="absolute top-0 right-0 z-10 mt-1 mr-1 text-2xl font-bold appearance-none cursor-pointer 2xl:-mr-6 text-yellow focus:outline-none"
                onClick={() => this.embla.scrollNext()}
                aria-label="Next image"
              >
                <IoIosArrowDroprightCircle />
              </motion.button>
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