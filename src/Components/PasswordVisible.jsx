import React from "react"

const PasswordVisible = ({ handlePasswordVisible, isPasswordVisible }) => {
  return (
    <div>
      <div
        onClick={handlePasswordVisible}
        className={`text-grey text-bodyText absolute -ml-5 -mt-1`}
      >
        {!isPasswordVisible ? (
          <i className="fa fa-eye"></i>
        ) : (
          <i className="fa fa-eye-slash"></i>
        )}
      </div>
    </div>
  )
}

export default PasswordVisible
