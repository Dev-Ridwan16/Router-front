import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import { AuthToggle, HeaderToggle } from "./AuthToggle"
import { Formik, Form, Field } from "formik"
import { validateEmail, validatePassword } from "../../data"
import * as Yup from "yup"
import OtherOptions from "./OtherOptions"
import axios from "axios"
import "react-toastify/dist/ReactToastify.css"
import "./Styles/Signup.css"
import PasswordVisible from "./PasswordVisible"

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
  const [userInput, setUserInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  })
  const [isToggle, setIsToggle] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
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
    // event.preventDefault()

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
        }
        console.error(err)
      })
  }
  const handlePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }
  return (
    <div className="signup-container">
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
