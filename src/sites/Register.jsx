import React from "react";
import { Container } from 'react-bootstrap';
import { useFormik } from "formik";
import { validate } from '../validate'
import app from "../firebase/app";

const Register = ({ history }) => {
  // prettier-ignore
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
    initialValues: {
      login: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: validate,
    onSubmit: ({ email, password, login}) => {
      console.log("frontend"  + login);
      app.register(email, password, login, history)
    },
  });

  return (
    <Container>
      <h1>Register with Formik</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Login:
          <input type='text' name='login' onBlur={handleBlur} onChange={handleChange} value={values.login} />
          {touched.login && errors.login && <p>{errors.login}</p>}
        </label>
        <label>
          E-mail:
          <input id='email' type='email' onBlur={handleBlur} onChange={handleChange} value={values.email} />
          {touched.email && errors.email && <p>{errors.email}</p>}
        </label>
        <label>
          Password:
          <input id='password' type='password' onBlur={handleBlur} onChange={handleChange} value={values.password} />
          {touched.password && errors.password && <p>{errors.password}</p>}
        </label>
        <label>
          Repeat password:
          <input id='repeatPassword' type='password' onBlur={handleBlur} onChange={handleChange} value={values.repeatPassword}/>
          {touched.repeatPassword && errors.repeatPassword && (
            <p>{errors.repeatPassword}</p>
          )}
        </label>
        <button type='submit'>Sing in</button>
      </form>
    </Container>
  );
};

export default Register;
