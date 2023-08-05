import React from "react"
import { imageSrc } from "../../data"
import viteLogo from "/vite.svg"
import Signup from "./Signup"
import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import { useLocation } from "react-router-dom"

const Userjoin = () => {
  const location = useLocation()

  const currentPath = location.pathname

  let form
  currentPath === "/login" ? (form = <Login />) : (form = <Signup />)
  return (
    <div className="flex flex-row items-center justify-center py-10 mx-auto">
      {form}
    </div>
  )
}

export default Userjoin
