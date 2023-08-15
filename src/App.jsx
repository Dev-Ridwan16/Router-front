import { useState } from "react"
import "./App.css"
import Userjoin from "./Components/Userjoin"
import Welcome from "./Components/Welcome"
import { Route, Routes } from "react-router-dom"
import { imageSrc } from "../data"
import Router from "./Components/Router"

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Welcome
              imageSrc={imageSrc.image1}
              imageSrc2={imageSrc.image2}
              text={imageSrc.text}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <div className=" flex h-screen items-center justify-center">
              <Userjoin />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className=" flex items-center justify-center">
              <Userjoin />
            </div>
          }
        />
        <Route
          path="/router"
          element={<Router />}
        />
      </Routes>
      {/* <Loader /> */}
    </>
  )
}

export default App
