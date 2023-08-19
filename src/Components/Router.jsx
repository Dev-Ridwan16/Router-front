import React, { useState } from "react"
import Routing from "./Routing"
import Map from "./Map"
import Nav from "./Nav"
import RouteLocations from "./RouteLocations"
import Navigations from "./Navigations"

const Router = () => {
  const [isRoutingVisible, setIsRoutingVisible] = useState(false)
  const laptopOnly = window.innerWidth >= 1020

  const toggleRoutingVisiblity = () => {
    setIsRoutingVisible(!isRoutingVisible)
  }

  return (
    <div className="laptop:flex laptop:flex-row w-screen h-screen">
      {/* {!isRoutingVisible && (
        <button
          className="absolute z-50 left-[50%] translate-x-[-50%] laptop:hidden bg-gradient-to-tr from-tertiary to-secondary text-primary h-[30px] w-[150px] rounded"
          onClick={toggleRoutingVisiblity}
        >
          Want to book?
        </button>
      )}
      {!laptopOnly ? (
        isRoutingVisible && <Routing closeRoute={toggleRoutingVisiblity} />
      ) : (
        <Routing />
      )} */}
      {/* <RouteLocations /> */}
      <div className="absolute z-50">
        <Nav />
      </div>
      <RouteLocations />
    </div>
  )
}

export default Router
