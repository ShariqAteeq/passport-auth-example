import React from "react";
import { Form, Formik, Field } from "formik";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Formik initialValues={{ email: "", password: "" }}>
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

export default Login;
