import React from "react"
import { FaFacebookSquare } from 'react-icons/fa'
import { IconContext } from "react-icons"

const Social = ( {className} ) => {

    return (
        <>
            <a aria-label="Find us on Facebook" className={"inline-block my-2 " + className} rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/sheringhamflooring/">
                <IconContext.Provider value={{ size: '2em', color: "white" }}>
                    <div>
                        <FaFacebookSquare />
                    </div>
                </IconContext.Provider>
            </a>
        </>
    )
}

export default Social
