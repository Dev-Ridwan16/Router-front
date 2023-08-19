import React, { useState } from "react"
import Profile from "./Profile"
import Navigations from "./Navigations"
import "./Styles/Routing.css"

const Nav = () => {
  const [nav, setNav] = useState(true)
  const desktopWidth = window.innerWidth >= 1020

  const toggleNav = () => {
    setNav(!nav)
  }
  return (
    <div>
      {nav ? (
        <i
          className="fa fa-bars"
          onClick={toggleNav}
        ></i>
      ) : (
        <i
          className="fa fa-times z-50"
          onClick={toggleNav}
        ></i>
      )}
      {desktopWidth ? (
        <div className="hidden laptop:block bg-secondary w-[350px] pt-10">
          <div>
            <Profile />
          </div>
          <div className="mt-10">
            <Navigations />
          </div>
        </div>
      ) : (
        <div
          className={`${
            !nav
              ? "relative left-0 transition-all ease-in-out duration-500 laptop:block bg-secondary w-screen pt-10"
              : "fixed left-[-100%] transition-all ease-in-out duration-500"
          }`}
        >
          <div>
            <Profile />
          </div>
          <div className="mt-10">
            <Navigations />
          </div>
        </div>
      )}
    </div>
  )
}

export default Nav
