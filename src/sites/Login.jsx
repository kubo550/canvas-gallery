import React, { useState } from "react";
import app from "../firebase/app";
import { Container } from 'react-bootstrap'

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const err = await app.logIn(email, password);
    err ? console.log(err) : history.push("/");
  };

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);

  return (
    <Container>
      <h1>Login with Formik</h1>
      <form onSubmit={handleSubmit}>
        <label>
          E-mail:
          <input type='email' onChange={handleEmail} value={email} />
        </label>
        <label>
          Password:
          <input type='password' value={password} onChange={handlePassword} />
        </label>
        <button type='submit'>Sing in</button>
      </form>
    </Container>
  );
};

export default Login;
