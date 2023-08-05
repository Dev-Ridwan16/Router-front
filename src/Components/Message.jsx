import React from "react"

const Message = ({ icons, message, iconColor }) => {
  return (
    <div
      className={`flex w-screen items-end justify-end fixed top-5 bg-${iconColor} bg-opacity-20`}
    >
      <div
        className={`bg-${iconColor} bg-opacity-20 absolute top-0 flex items-center justify-center 
              text-center gap-5 rounded-lg shadow-lg w-[300px] h-[100px]`}
      >
        <i
          className={`fa-solid ${icons} text-${iconColor} text-headingText`}
        ></i>
        <span className="text-dark text-[16px]">{message}</span>
      </div>
    </div>
  )
}

export default Message
