import React from "react"
import { Link } from "react-router-dom"

const AuthToggle = ({ isToggle, handleToggle }) => {
  return (
    <div className="text-bodyText text-dark flex gap-5 w-[300px] mx-auto">
      <span>
        {!isToggle ? "Already have an account?" : "Don't have an account yet?"}
      </span>
      <Link
        to={!isToggle ? "/login" : "/signup"}
        onClick={handleToggle}
      >
        {!isToggle ? "Login" : "Sign up"}
      </Link>
    </div>
  )
}

export default AuthToggle
