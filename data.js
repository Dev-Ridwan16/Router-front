export const imageSrc = {
  image1:
    "https://i.pinimg.com/564x/3a/82/91/3a82915baf3bdc7d6c29f1225885040a.jpg",
  image2:
    "https://i.pinimg.com/236x/97/16/7c/97167cfeed0c40ca46a9128fba68bba6.jpg",
  text: "Whether you're commuting to work, meeting friends, or exploring new places, we've got you covered!",
}

export const validateEmail = (value) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

  let error

  if (!emailRegex) {
    error = "Invalid email address"
  }
  return error
}

export const validatePassword = (value) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*_?&])[A-Za-z\d@$!%*_?&]{8,}$/

  let error
  if (!passwordRegex.test(value)) {
    error =
      "Password should be atleast 8 character and must contain atleast one uppercase, one lowercase, one number and a special character"
  }
  return error
}
