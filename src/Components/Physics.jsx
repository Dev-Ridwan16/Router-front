import React from "react"
import "./Styles/Routing.css"

const Physics = () => {
  return (
    <div className="flex flex-col gap-3 laptop:flex-row laptop:gap-14 laptop:mt-10">
      <div className="physics-box">
        <h3>Distance</h3>
        <div className="distance_time">
          <p></p>
          <span>km</span>
        </div>
      </div>
      <div className="physics-box">
        <h3>Duration</h3>
        <div className="distance_time">
          <p></p>
          <span>min</span>
        </div>
      </div>
    </div>
  )
}

export default Physics
