import React from "react"

const Testimonial = ({ content }) => {

    if (content != null) {

        return (
            <>
                <div className="block p-6 pb-0 mt-8">
                    <h2 className="text-bold p-2 bg-blue-dark text-white inline-block">{content.name}</h2>
                    <div className="block">
                        <h3 className="text-bold p-2 ml-5 -mt-1 bg-yellow text-brown inline-block">{content.subtitle}</h3>
                    </div>
                    <q className="block italic border-yellow mt-4 border-l-8 border-solid p-4">{content.testimonial}</q>
                </div>
            </>

        )

    }

    else {
        return null
    }
}

export default Testimonial
