import React from "react"
import Iframe from 'react-iframe'

const Map = () => {

  function hideDiv() {
    document.getElementById("mapOverlay").style.zIndex = "-100"
  }

  return (
    <>
      <div className="lg:absolute lg:top-0 lg:right-0 bg-blue-dark p-8 text-xl text-white lg:max-w-sm lg:z-50">
        Click the map to see some of the places we have worked...
      </div>

      <div
        id="mapOverlay"
        onClick={hideDiv}
        onKeyDown={hideDiv}
        role="none"
        className="hidden lg:block absolute w-full h-full left-0 right-0 top-0 bottom-0 gradient-blue opacity-50 cursor-pointer z-50"
      ></div>

      <Iframe url="https://www.google.com/maps/d/u/0/embed?mid=1UX4vosw-XYLDC5Xv47fICUQdMpBZpcjz"
        width="100%"
        height="480px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        title="Where we've worked"
        />

    </>
  )
}

export default Map
