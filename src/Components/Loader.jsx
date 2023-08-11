import React from "react"
import "./Styles/Loader.css"
const Loader = () => {
  return (
    <div className="bg-tertiary bg-opacity-5 w-screen h-screen absolute top-[-10%] ">
      <div className="custom-loader"></div>
    </div>
  )
}

export default Loader
