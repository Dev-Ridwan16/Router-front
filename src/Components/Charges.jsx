import React from "react"
import Car from "../assets/images/Car.png"
import { routerOptions } from "../../data"

const Charges = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-[420px] h-[300px] 
        absolute bottom-0 shadow-xl shadow-secondary rounded-t-[2.5rem]"
    >
      <h3 className="text-lg text-secondary font-medium font-headingFont">
        What's your option?
      </h3>
      <ul className="flex flex-col items-center justify-center w-[400px] mr-10">
        {routerOptions.map((option, index) => (
          <li className="flex flex-row items-center justify-between gap-32">
            <img
              src={option.Car}
              alt=""
              className="w-[100px] h-[70px]"
            />
            <div className=" font-headingFont text-xl font-medium text-secondary">
              {option.price}
            </div>
          </li>
        ))}
      </ul>
      <button className="bg-tertiary text-primary w-[150px] py-2 rounded-lg">
        Book a Route
      </button>
    </div>
  )
}

export default Charges
