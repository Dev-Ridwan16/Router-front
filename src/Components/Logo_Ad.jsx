import React from "react"
import { imageSrc } from "../../data"

const Logo_Ad = () => {
  return (
    <div>
      <h1 className="text-headingText font-bold font-bodyFont text-primary">
        Router
      </h1>
      <span className="text-primary text-bodyText font-medium font-bodyFont tracking-wider laptop:fixed w-[400px] mt-[380px] px-3">
        {imageSrc.text}
      </span>
    </div>
  )
}

export default Logo_Ad
