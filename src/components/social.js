import React from "react"
import { FaFacebookSquare } from 'react-icons/fa'
import { IconContext } from "react-icons"

const Social = () => {

    return (
        <>
            <a className="inline-block my-2" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/sheringhamflooring/">
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
