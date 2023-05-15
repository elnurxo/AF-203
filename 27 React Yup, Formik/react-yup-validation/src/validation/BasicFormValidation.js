import * as yup from "yup";

const PASSWORD_RULES = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const BasicFormSchema = yup.object().shape({
  fullName: yup
    .string("invalid data type")
    .min(3, "full name cannot be less than 3 characters")
    .max(10, "name cannot be more than 10 characters")
    .required("name is required"),
  age: yup
    .number()
    .integer("age is not an integer")
    .positive("age cannot be negative number")
    .required("age is required"),
  email: yup.string().email("email not valid").required("email is required"),
  password: yup
    .string()
    .matches(PASSWORD_RULES,{message:'password is weak'})
    .min(5, "password length is not enough")
    .required("password is required"),
  confirmPassword: yup
    .string()
    .matches(PASSWORD_RULES,{message:'password is weak'})
    .oneOf(
      [yup.ref("password"), null],
      "confirm password doesn't match password"
    )
    .min(5, "confirm password length is not enough")
    .required("confirm password is required"),
    isSingle: yup.boolean().oneOf([true],"get evine eshiyine"),
    nationality: yup.string().oneOf(['az','ru','tr','ch',null],"invalid nationality")
});
