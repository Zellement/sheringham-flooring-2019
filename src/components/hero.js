import React from "react"
import GalleryCarousel from "./gallery-carousel"
import Img from "gatsby-image"

const Hero = ({ heroBold, heroRegular, heroSmall, carouselImgs }) => {

    if (carouselImgs.length > 1) {

        return (
            <>
                <div className="relative flex flex-col md:flex-row">

                    <div className="absolute top-0 bottom-0 left-0 right-0 w-full opacity-50 h-100 md:w-4/6 md:rounded-br-xl md:rounded-tr-xl diagonal-stripes-white -z-10"></div>
                    <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-100 md:w-4/6 md:rounded-br-xl md:rounded-tr-xl gradient-blue-2 -z-20"></div>

                    <div className="flex-1 p-8 m-auto text-center md:text-left md:w-1/2 lg:p-12 xl:p-16">

                        <div className="flex flex-col self-center m-auto">

                            <p className="hero__heading">
                                <span className="hero__bold">{heroBold} </span>
                                <span className="hero__regular">{heroRegular}</span>
                            </p>
                            <p className="hero__small">{heroSmall}</p>

                        </div>

                    </div>

                    <div id="imageHolder" className="md:w-1/2 md:flex-1 md:py-4 hero__image-container xl:py-8">

                        <GalleryCarousel
                            images={carouselImgs}
                        />

                    </div>

                </div>
            </>

        )

    }

    else if (carouselImgs.length === 1) {

        return (
            <>
                <div className="relative flex flex-col md:flex-row">

                    <div className="absolute top-0 bottom-0 left-0 right-0 w-full opacity-50 h-100 md:w-4/6 md:rounded-br-xl md:rounded-tr-xl diagonal-stripes-white -z-10"></div>
                    <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-100 md:w-4/6 md:rounded-br-xl md:rounded-tr-xl gradient-blue-2 -z-20"></div>

                    <div className="flex-1 p-8 m-auto text-center md:text-left md:w-1/2 lg:p-12 xl:p-16">

                        <div className="flex flex-col self-center m-auto">

                            <p className="hero__heading">
                                <span className="hero__bold">{heroBold} </span>
                                <span className="hero__regular">{heroRegular}</span>
                            </p>
                            <p className="hero__small">{heroSmall}</p>

                        </div>

                    </div>

                    <div id="imageHolder" className="md:w-1/2 md:flex-1 md:py-4 hero__image-container xl:py-8">

                        <Img loading="eager"
                            fluid={carouselImgs[0].fluid}
                        />

                    </div>

                </div>
            </>
        )
    }

    else {
        return (
            <><h1>Image needed!</h1></>
        )
    }
}

export default Hero
