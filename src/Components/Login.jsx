import React, { useState } from "react"
import "./Styles/Signup.css"
import OtherOptions from "./OtherOptions"
import AuthToggle from "./AuthToggle"
import axios from "axios"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  })
  const [isToggle, setIsToggle] = useState(true)
  const navigate = useNavigate()

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
      .post(`https://router-backend.onrender.com/login`, userInput)
      .then((res) => {
        const token = res.data.token

        localStorage.setItem("token", token)
        if (res.status === 200) {
          toast.success(res.data.message)
          setTimeout(() => {
            navigate("/home")
          }, 6000)
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          toast.error(err.response.data.message)
        } else if (err.response && err.response.status === 401) {
          toast.warning(err.response.data.message)
        }
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
        <ToastContainer />
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
