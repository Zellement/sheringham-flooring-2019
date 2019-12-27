import React from "react"

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
        className="absolute w-full h-full gradient-blue opacity-50 cursor-pointer"
      ></div>

      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1UX4vosw-XYLDC5Xv47fICUQdMpBZpcjz"
        width="100%"
        height="480"
        title="Where we've worked"
      ></iframe>
    </>
  )
}

export default Map
