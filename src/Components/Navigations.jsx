import React, { useState } from "react"
import { navigations } from "../../data"
import { Link } from "react-router-dom"
import RouteLocations from "./RouteLocations"

const Navigations = () => {
  const mobileWidth = window.innerWidth <= 768

  return (
    <div className="h-screen">
      <label
        htmlFor=""
        className="text-grey text-lg font-medium mx-10"
      >
        Menu
      </label>
      <nav className="text-primary pl-10">
        <ul className="flex flex-col">
          {navigations.map((navigation, index) => (
            <Link
              key={index}
              className="mt-5"
              onClick={() => handleBookRouteModal(navigation.title)}
            >
              {navigation.title}
            </Link>
          ))}
        </ul>
      </nav>
      <button className="bg-danger text-primary w-[150px] h-[30px] rounded mt-[120px] ml-10">
        <i className="fa fa-logout"></i>
        <span>Logout</span>
      </button>
    </div>
  )
}

export default Navigations
