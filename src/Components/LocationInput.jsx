import React from "react"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"

import "./Styles/Signup.css"
import "./Styles/Routing.css"

const LocationSchema = Yup.object().shape({
  pickup: Yup.string().required("Required"),
  destination: Yup.string().required("Required"),
})

const LocationInput = () => {
  const sendRoute = () => {
    console.log("Routing")
  }
  return (
    <div>
      <Formik
        initialValues={{ pickup: "", destination: "" }}
        validationSchema={LocationSchema}
        onSubmit={sendRoute}
      >
        {({ errors, touched, isValidating }) => (
          <Form>
            <div>
              <div className="form_child_container">
                <label htmlFor="pickup">Pick-up location</label>
                <Field
                  name="pickup"
                  type="text"
                  id="pickup"
                  className="inputs"
                />
                {errors.pickup && touched.pickup ? (
                  <div className="field-error">{errors.pickup}</div>
                ) : null}
              </div>
              <div className="form_child_container">
                <label htmlFor="destination">Destination</label>
                <Field
                  name="destination"
                  type="text"
                  id="destination"
                  className="inputs"
                />
                {errors.destination && touched.destination ? (
                  <div className="field-error">{errors.destination}</div>
                ) : null}
              </div>
            </div>
            <div className="w-[200px] mx-auto mt-5">
              <button
                type="submit"
                className="bg-tertiary h-[30px] w-[200px] rounded 
            text-primary text-bodyText font-regular flex items-center justify-center gap-2"
              >
                <i>Calculate route</i>
                <i className="fa-solid fa-route"></i>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LocationInput
