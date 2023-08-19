import React from "react"
import ProfilePic from "../assets/images/Profilepic.jpg"
import { Link } from "react-router-dom"

const Profile = () => {
  return (
    <div>
      <div className="flex flex-row items-center gap-3 ml-5">
        <img
          src={ProfilePic}
          className="w-[80px] h-[80px] rounded-full"
        />
        <div className="flex flex-col text-primary">
          {/* Axios will be used to get user details from database */}
          <span className="text-subHeadingText font-bodyFont font-medium">
            Olivia Mary
          </span>
          <span>maryolivia@gmail.com</span>
          <Link className="text-[10px] text-tertiary">View profile</Link>
        </div>
      </div>
    </div>
  )
}

export default Profile
