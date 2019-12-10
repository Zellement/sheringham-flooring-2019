import React from "react"
import Img from "gatsby-image"

const Hero = ({ heroBold, heroRegular, heroSmall, mainImg }) => {

    return (
        <>
            <div className="flex flex-col md:flex-row diagonal-stripes-grey">

                <div className="text-center m-auto p-8 md:text-left md:w-1/2 flex-1 justify-center">

                    <div className="flex flex-col m-auto self-center">

                        <p className="hero__bold">{heroBold}</p>
                        <p className="hero__regular">{heroRegular}</p>
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
