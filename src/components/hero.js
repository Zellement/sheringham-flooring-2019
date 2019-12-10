import React from "react"
import Img from "gatsby-image"

const Hero = ({ heroBold, heroRegular, heroSmall, mainImg }) => {

    return (
        <>
            <div className="flex flex-col md:flex-row diagonal-stripes-grey">

                <div className="text-center flex-1 m-auto p-8 md:text-left md:w-1/2 lg:p-12 xl:p-16">

                    <div className="flex flex-col m-auto self-center">

                        <p className="hero__heading">
                            <span className="hero__bold">{heroBold} </span>
                            <span className="hero__regular">{heroRegular}</span>
                        </p>
                        <p className="hero__small">{heroSmall}</p>

                    </div>

                </div>

                <div className="md:w-1/2 md:flex-1 md:py-4 hero__image-container xl:py-8">

                    <Img
                        className=""
                        fluid={mainImg}
                    />

                </div>

            </div>
        </>
    )
}

export default Hero
