import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import { AuthToggle, HeaderToggle } from "./AuthToggle"
import { validateEmail, validatePassword } from "../../data"
import PasswordVisible from "./PasswordVisible"
import OtherOptions from "./OtherOptions"
import { Formik, Form, Field } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { showLoader, hideLoader } from "../feature/loader/loaderSlice"
import * as Yup from "yup"
import axios from "axios"
import "react-toastify/dist/ReactToastify.css"
import "./Styles/Signup.css"
// import "./Styles/PageTransition.css"
import Loader from "./Loader"

const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Too short!")
    .max(20, null)
    .required("Required"),

  lastname: Yup.string().min(2, "Too short!").max(5, null).required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),

  password: Yup.string().required("Required"),
})

const Signup = () => {
  const [userInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  })
  const [isToggle, setIsToggle] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.loader.isLoading)

  // const changeHandler = (event) => {
  //   const { name, value } = event.target
  //   setUserInput((prevUserInput) => ({
  //     ...prevUserInput,
  //     [name]: value,
  //   }))
  // }

  const handleToggle = () => {
    setIsToggle(!isToggle)
  }

  const handleSubmit = async (values) => {
    // event.preventDefault()

    dispatch(showLoader()) // Show loader

    try {
      const response = await axios.post(
        "https://router-backend.onrender.com/sign-up",
        values
      )

      if (response.status === 201) {
        toast.success(response.data.message)
        setTimeout(() => {
          navigate("/router")
        }, 6000)
      } else if (response.status === 500) {
        toast.error(response.data.message)
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.warning(error.response.data.message)
      } else {
        console.error(error)
      }
    } finally {
      dispatch(hideLoader()) // Hide loader after request completion
    }
  }
  const handlePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }
  return (
    <div className="laptop:h-[100vh] w-auto relative flex flex-col items-center justify-center h-[80vh]">
      {isLoading && <Loader />}

      <h1
        className="text-subHeadingText font-medium font-headingFont 
             text-tertiary text-center "
      >
        <HeaderToggle isToggle={isToggle} />
      </h1>
      <ToastContainer />
      <Formik
        initialValues={userInput}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isValidating }) => (
          <Form className="w-[400px] flex flex-col items-center justify-center mx-auto mt-5 rounded-lg ">
            <div className="flex flex-row gap-10">
              <div className="form_child_container">
                <label htmlFor="firstname">Firstname</label>
                <Field
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="w-[130px] h-8 border outline-none mt-2 bg-transparent p-3 text-bodyText text-dark]"
                />
                {errors.firstname && touched.firstname ? (
                  <div className="field-error">{errors.firstname}</div>
                ) : null}
              </div>
              <div className="form_child_container">
                <label htmlFor="lastname">Lastname</label>
                <Field
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="w-[130px]  h-8 border outline-none mt-2 bg-transparent p-3 text-bodyText text-dark"
                />
                {errors.lastname && touched.lastname ? (
                  <div className="field-error">{errors.lastname}</div>
                ) : null}
              </div>
            </div>
            <div className="form_child_container">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                validate={validateEmail}
                id="email "
                className="inputs"
              />
              {errors.email && touched.email ? (
                <div className="field-error">{errors.email}</div>
              ) : null}
            </div>
            <div className="form_child_container">
              <label htmlFor="password">Password</label>
              <div className="flex items-center justify-center">
                <Field
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  validate={validatePassword}
                  id="password"
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
            text-primary text-bodyText font-regular"
              >
                Sign up
              </button>
            </div>
            <OtherOptions />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Signup
