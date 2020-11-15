import * as Yup from "yup";

export const validate = Yup.object({
  login: Yup.string()
    .max(15, "Must be less than 15")
    .min(3, "Login must have at least 3 chars")
    .required("Login is required")
    .trim("Invalide Login"),
  email: Yup.string().email("Invalide email provided").required().trim(),
  password: Yup.string()
    .min(6, "Password is too short")
    .max(32, "Password is too long")
    .required("Password is required")
    .trim("Invalide Password")
    .matches(/(?=.*[0-9])/, {
      message: "Require that at least one digit appear anywhere in the string",
    })
    .matches(/(?=.*[a-z])/, {
      message:
        "Require that at least one lowercase letter appear anywhere in the string",
    }),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Passwords must match"),
});
