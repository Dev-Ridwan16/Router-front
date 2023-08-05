import React from "react"
import { useLocation } from "react-router-dom"
import "./Styles/SignbyComp.css"

const OtherOptions = () => {
  const location = useLocation()

  const currentPath = location.pathname

  let content
  currentPath === "/signup"
    ? (content = <span>Sign up</span>)
    : (content = <span>Sign in</span>)
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center items-center gap-3 my-5">
        <hr className=" border w-[50px]" />
        <p className="text-bodyText">or {content} using</p>
        <hr className=" border w-[50px]" />
      </div>
      <div className="flex flex-row gap-3 justify-center items-center text-bodyText font-bodyFont">
        <button className="app_goog ">
          <i className="fa-brands fa-apple"></i>
          <p>{content} with Apple</p>
        </button>
        <button className="app_goog">
          <i className="fa-brands fa-google"></i>
          <p>{content} with Google</p>
        </button>
      </div>
    </div>
  )
}

export default OtherOptions
