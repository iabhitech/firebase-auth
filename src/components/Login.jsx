import { MDBBtn, MDBCard, MDBCardBody, MDBContainer, MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Alert from "./CustomMDB/Alert";

export default function Login() {
  const { login } = useAuth();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleChange = (props) => (event) => {
    setValues({ ...values, [props]: event.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
   
    try {
      setError("");
      setLoading(true);
      await login(values.email, values.password);
      history.push('/');
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
            <h2 className="text-center mb-4">Log In</h2>
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
              
              <MDBBtn block type="submit" disabled={loading}>
                Login
              </MDBBtn>
            </form>
        <div className="w-100 text-center mt-3"><Link to="/forgot-password">Forgot Password?</Link></div>

          </MDBCardBody>
        </MDBCard>
        <div className="w-100 text-center mt-2">Need an account? <Link to="/signup">Sign Up</Link></div>
      </MDBContainer>
    </>
  );
}
