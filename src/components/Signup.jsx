import { MDBBtn, MDBCard, MDBCardBody, MDBContainer, MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Alert from "./CustomMDB/Alert";

export default function Signup() {
  const { signup } = useAuth();
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleChange = (props) => (event) => {
    setValues({ ...values, [props]: event.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (values.password !== values.confirmPassword) {
      return setError("Password do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(values.email, values.password);
      history.push('/login');

    } catch(e) {
      setError(e.message);
      console.log(e.message);
      setLoading(false);
    }
  }
  return (
    <>
      <MDBContainer className="mt-5">
        <MDBCard style={{ maxWidth: "460px" }} className="m-auto border">
          <MDBCardBody>
            <h2 className="text-center mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              {error ? <Alert danger>{error}</Alert> : ""}
              <MDBInput
                className="mb-4"
                size="lg"
                label="Email"
                id="email"
                type="email"
                onChange={handleChange("email")}
                required
              />
              <MDBInput
                className="mb-4"
                label="Password"
                id="password"
                size="lg"
                type="password"
                onChange={handleChange("password")}
                required
              />
              <MDBInput
                className="mb-4"
                label="Confirm Password"
                id="cpassword"
                type="password"
                size="lg"
                onChange={handleChange("confirmPassword")}
                required
              />
              <MDBBtn block type="submit" disabled={loading}>
                Sign Up
              </MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
        <div className="w-100 text-center mt-2">Already have an account? <Link to="/login">Login</Link></div>
      </MDBContainer>
    </>
  );
}
