import React from "react"
import GalleryCarousel from "./gallery-carousel"
import Img from "gatsby-image"

const Hero = ({ heroBold, heroRegular, heroSmall, carouselImgs }) => {

    if (carouselImgs.length > 1) {

        return (
            <>
                <div className="flex flex-col relative md:flex-row">

                    <div className="absolute top-0 right-0 left-0 bottom-0 h-100 w-full md:w-4/6 md:rounded-br-xl md:rounded-tr-xl diagonal-stripes-white opacity-50 -z-10"></div>
                    <div className="absolute top-0 right-0 left-0 bottom-0 h-100 w-full md:w-4/6 md:rounded-br-xl md:rounded-tr-xl gradient-blue-2  -z-20"></div>

                    <div className="text-center flex-1 m-auto p-8 md:text-left md:w-1/2 lg:p-12 xl:p-16">

                        <div className="flex flex-col m-auto self-center">

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
                <div className="flex flex-col md:flex-row relative">

                    <div className="absolute top-0 right-0 left-0 bottom-0 h-100 w-full md:w-4/6 md:rounded-br-xl md:rounded-tr-xl diagonal-stripes-white opacity-50 -z-10"></div>
                    <div className="absolute top-0 right-0 left-0 bottom-0 h-100 w-full md:w-4/6 md:rounded-br-xl md:rounded-tr-xl gradient-blue-2  -z-20"></div>

                    <div className="text-center flex-1 m-auto p-8 md:text-left md:w-1/2 lg:p-12 xl:p-16">

                        <div className="flex flex-col m-auto self-center">

                            <p className="hero__heading">
                                <span className="hero__bold">{heroBold} </span>
                                <span className="hero__regular">{heroRegular}</span>
                            </p>
                            <p className="hero__small">{heroSmall}</p>

                        </div>

                    </div>

                    <div id="imageHolder" className="md:w-1/2 md:flex-1 md:py-4 hero__image-container xl:py-8">

                        <Img
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
