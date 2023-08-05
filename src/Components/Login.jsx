import React, { useState } from "react"
import "./Styles/Signup.css"
import OtherOptions from "./OtherOptions"
import { imageSrc } from "../../data"
import viteLogo from "/vite.svg"
import AuthToggle from "./AuthToggle"
import axios from "axios"
import { Link } from "react-router-dom"

const Login = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password1: "",
  })
  const [isToggle, setIsToggle] = useState(true)

  const handleToggle = () => {
    setIsToggle(!isToggle)
  }

  const changeHandler = (event) => {
    const { name, value } = event.target
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .post("https://router-backend.onrender.com/user-details/login", userInput)
      .then((res) => {
        const token = res.data.token

        localStorage.setItem("token", token)

        window.location.href = "/home"
      })
      .catch((err) => {
        console.error("Login faild:", err)
      })
  }
  return (
    <div
      className="  
          laptop:h-auto w-auto relative flex flex-col items-center justify-center h-[80vh]"
    >
      <h1
        className=" text-subHeadingText font-medium font-headingFont 
             mt-10 text-tertiary"
      >
        Login your account
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-[400px] flex flex-col items-center justify-center mx-auto mt-5 rounded-lg "
      >
        <div className="form_child_container">
          <label htmlFor="firstname">Email</label>
          <input
            type="email"
            name="email"
            value={userInput.email}
            onChange={changeHandler}
          />
        </div>
        <div className="form_child_container">
          <div className="flex justify-between items-center">
            <label htmlFor="password">Password</label>
            <Link className="text-[10px] text-tertiary">Can't remember</Link>
          </div>

          <input
            type="password"
            name="password1"
            value={userInput.firstname}
            onChange={changeHandler}
          />
        </div>
        <AuthToggle
          isToggle={isToggle}
          handleToggle={handleToggle}
        />
        <div className="w-[200px] mx-auto mt-5">
          <button
            type="submit"
            className="bg-tertiary h-[30px] w-[200px] rounded 
                  text-primary font-regular"
          >
            Log in
          </button>
        </div>
        <OtherOptions />
      </form>
    </div>
  )
}

export default Login
