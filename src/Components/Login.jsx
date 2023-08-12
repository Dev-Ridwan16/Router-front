import React, { useState } from "react"
import { AuthToggle, HeaderToggle } from "./AuthToggle"
import { ToastContainer, toast } from "react-toastify"
import { Formik, Form, Field } from "formik"
import { useNavigate } from "react-router-dom"
import { validateEmail, validatePassword } from "../../data"
import { useDispatch, useSelector } from "react-redux"
import { showLoader, hideLoader } from "../feature/loader/loaderSlice"
import { Link } from "react-router-dom"
import OtherOptions from "./OtherOptions"
import axios from "axios"
import * as Yup from "yup"
import "react-toastify/dist/ReactToastify.css"
import "./Styles/Signup.css"
import PasswordVisible from "./PasswordVisible"
import Loader from "./Loader"
// import loaderSlice from "../feature/loader/loaderSlice"

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
})

const Login = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  })
  const [isToggle, setIsToggle] = useState(true)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.loader.isLoading)

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

  const handlePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const handleSubmit = async (values) => {
    dispatch(showLoader())
    try {
      const response = await axios.post(
        `https://router-backend.onrender.com/login`,
        values
      )
      const token = response.data.token
      localStorage.setItem("token", token)
      if (response.status === 200) {
        toast.success(response.data.message)
        setTimeout(() => {
          navigate("/home")
        }, 6000)
      }
    } catch (err) {
      if (err.response && err.response.status === 404) {
        toast.error(err.response.data.message)
      } else if (err.response && err.response.status === 401) {
        toast.warning(err.response.data.message)
      }
      console.error("Login faild:", err)
    } finally {
      dispatch(hideLoader())
    }
  }
  return (
    <div
      className="  
    laptop:h-[100vh] w-auto relative flex flex-col items-center justify-center h-[80vh]"
    >
      {isLoading && <Loader />}
      <h1
        className=" text-subHeadingText font-medium font-headingFont 
             mt-10 text-tertiary"
      >
        <HeaderToggle isToggle={isToggle} />
      </h1>
      <ToastContainer />
      <Formik
        initialValues={userInput}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isValidating }) => (
          <Form className="w-[400px] flex flex-col items-center justify-center mx-auto mt-5 rounded-lg">
            <div className="form_child_container">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                id="email"
                validate={validateEmail}
                className="inputs"
              />
              {errors.email && touched.email ? (
                <div className="field-error">{errors.email}</div>
              ) : null}
            </div>
            <div className="form_child_container">
              <div className="flex justify-between items-center">
                <label htmlFor="password">Password</label>
                <Link className="text-[10px] text-tertiary">
                  Can't remember
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <Field
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  validate={validatePassword}
                  className="inputs"
                />
                <PasswordVisible
                  handlePasswordVisible={handlePasswordVisible}
                  isPasswordVisible={isPasswordVisible}
                />
              </div>

              {errors.password && touched.password ? (
                <div className="field-error w-[300px]">{errors.password}</div>
              ) : null}
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
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login
