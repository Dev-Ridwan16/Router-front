import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router-dom"
import OtherOptions from "./OtherOptions"
import AuthToggle from "./AuthToggle"
import "./Styles/Signup.css"
import axios from "axios"

const Signup = () => {
  const [userInput, setUserInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  })
  const [isToggle, setIsToggle] = useState(false)
  const navigate = useNavigate()

  const changeHandler = (event) => {
    const { name, value } = event.target
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [name]: value,
    }))
  }

  const handleToggle = () => {
    setIsToggle(!isToggle)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .post("https://router-backend.onrender.com/sign-up", userInput)
      .then((res) => {
        console.log(res.data)

        if (res.status === 201) {
          toast.success(res.data.message)
          setTimeout(() => {
            navigate("/home")
          }, 6000)
        } else if (res.status === 500) {
          toast.error(res.data.message)
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 409) {
          toast.warning(err.response.data.message)
          setTimeout(() => {
            return
          }, 2000)
        } else {
        }
        console.error(err)
      })
  }

  return (
    <div className="">
      <h1
        className="text-subHeadingText font-medium font-headingFont 
             text-tertiary text-center "
      >
        Create account
      </h1>
      <form
        className="w-[400px] flex flex-col items-center justify-center mx-auto mt-5 rounded-lg "
        onSubmit={handleSubmit}
      >
        <ToastContainer />
        <div className="flex flex-row gap-10">
          <div className="form_child_container">
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              name="firstname"
              value={userInput.firstname}
              onChange={changeHandler}
              className="names"
            />
          </div>
          <div className="form_child_container">
            <label htmlFor="firstname">Lastname</label>
            <input
              type="text"
              name="lastname"
              value={userInput.lastname}
              onChange={changeHandler}
              className="names"
            />
          </div>
        </div>
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
          <label htmlFor="firstname">Password</label>
          <input
            type="password"
            name="password"
            value={userInput.password}
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
            text-primary text-bodyText font-regular"
          >
            Sign up
          </button>
        </div>
        <OtherOptions />
      </form>
    </div>
  )
}

export default Signup
