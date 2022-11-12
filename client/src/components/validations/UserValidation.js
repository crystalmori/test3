import * as yup from "yup";

export const userValSchema = yup.object().shape({
  email: yup.string().email("Invalid email input").required("Required"),
  password: yup
    .string()
    .min(6)
    .max(15)

    .required("required"),
});
