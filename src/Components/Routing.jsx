import React from "react"
import RouteLocations from "./RouteLocations"
import Physics from "./Physics"
import Charges from "./Charges"

const Routing = ({ closeRoute }) => {
  return (
    <div
      className={`laptop:flex laptop:flex-col absolute z-50 left-[50%] laptop:left-0 laptop:translate-x-0 
    translate-x-[-50%] bg-primary laptop:h-screen h-[220px] w-[420px] rounded-b-xl shadow-lg `}
    >
      <div className="routing_inp w-[400px] flex flex-col items-center justify-center">
        <i
          className="fa fa-times laptop:hidden fixed top-3 right-[5%] translate-x-[-5%] cursor-pointer"
          onClick={closeRoute}
        ></i>
        <h1 className="text-tertiary text-subHeadingText font-medium font-headingFont">
          Your Routes
        </h1>
        <div className="flex flex-row laptop:flex-col gap-5">
          <RouteLocations />
          <Physics />
        </div>
      </div>
      <div className="hidden laptop:block">
        <Charges />
      </div>
    </div>
  )
}

export default Routing
