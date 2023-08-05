import React from "react"
import viteLogo from "/vite.svg"
import { Typewriter } from "react-simple-typewriter"
import { useNavigate } from "react-router-dom"
import Car from "../assets/images/Car.png"

const Welcome = ({ imageSrc, text, imageSrc2 }) => {
  const navigate = useNavigate()
  const isMobile = window.innerHeight <= 768
  return (
    <div className="">
      <div className="relative">
        <div className="w-screen h-[40vh] absolute top-0 tablet:hidden">
          <img
            src={imageSrc2}
            alt=""
            className="w-screen h-[40vh] rounded-b-full"
          />
        </div>
        <img
          src={Car}
          alt=""
          className="absolute top-16 w-screen h-[250px] tablet:w-screen tablet:h-screen object-cover "
        />
        <div
          className="
          tablet:absolute tablet:top-0 tablet:left-0 tablet:w-screen 
          tablet:h-screen tablet:bg-secondary tablet:opacity-90"
        ></div>
        <div className="tablet:absolute tablet:top-0 relative">
          <img
            src={viteLogo}
            alt=""
            className="hidden tablet:block tablet:w-[150px] laptop:w-[200px]"
          />
          <div
            className="flex flex-col w-screen h-[100vh] tablet:h-[60vh] tablet:mt-0 
          items-center justify-center"
          >
            <h1
              className="text-dark text-subHeadingText font-bold font-headingFont mt-[200px]
            tablet:text-primary tablet:text-headingText tablet:mt-0"
            >
              Welcome to <span className="text-tertiary">Router</span>
            </h1>
            <span
              className="text-secondary text-bodyText mt-5 font-regular
              tablet:text-primary tablet:text-subHeadingText tablet:mt-10"
            >
              <Typewriter
                words={[
                  "Explore with Car Booking Made Easy!",
                  "Wherever You Go, We've Got Your Ride!",
                  "Discover Convenience with Router!",
                ]}
                loop
                cursor
              />
            </span>

            <p className="text-secondary text-bodyText px-8 mt-10 tablet:text-primary my-5 tablet:w-[500px] text-center">
              {text}
            </p>
            <div className="flex gap-5 tablet:gap-10 font-bodyFont font-regular text-bodyText -mb-20 mt-5">
              <button
                className="bg-tertiary text-primary w-[120px] h-[40px] rounded-md "
                onClick={() => {
                  navigate("/signup")
                }}
              >
                Create an account
              </button>
              <button
                className="border-2 border-tertiary w-[120px] text-tertiary rounded-lg"
                onClick={() => {
                  navigate("login")
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
