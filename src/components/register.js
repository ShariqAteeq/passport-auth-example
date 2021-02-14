import React from "react";
import { Form, Formik, Field } from "formik";
import Axios from "axios";

const Register = () => {
  const registerHandler = (values) => {
    const { email, password } = values;
    console.log("val", values)
    Axios({
        method: "POST",
      data: {
        email: email,
        password: password,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => console.log(res)).catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Register</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={registerHandler}
      >
        {({}) => (
          <Form>
            <Field type="email" name="email" placeholder="Email" />
            <Field type="password" name="password" placeholder="Password" />
            <button type={"submit"}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
