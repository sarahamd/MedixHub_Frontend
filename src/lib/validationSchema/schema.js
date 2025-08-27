import * as Yup from "yup";
// Password
const passwordValidation = Yup.string()
  .trim()
  .required("Password is required")
  .min(8, "Password must be at least 8 characters")
  .matches(/[0-9]/, "Password must contain at least on number")
  .matches(/[a-z]/, "password must contain at least 1 lower case letter")
  .matches(/[A-Z]/, "password must contain at least 1 upper case letter")
  .matches(
    /[!@#$%^&*(),.?":{}|<>]/,
    "password must contain at least 1 special character"
  );

// Email
const emailValidation = Yup.string()
  .trim()
  .required("Email is required.")
  .email("Please enter a valid email address.");

// username
const usernameValidation = Yup.string()
  .trim()
  .required("Please enter your name")
  .matches(/^[a-zA-Z][\w]*$/gi, "Invalid name format")
  .min(3, "Name should be at least 3 characters.")
  .max(79, "Name should not exceed 79 characters.");

// phone
const phoneValidation = Yup.string()
  .matches(
    /^(?:\+2)?01[0125][0-9]{8}$/,
    "Phone number must be a valid Egyptian number."
  )
  .trim();
