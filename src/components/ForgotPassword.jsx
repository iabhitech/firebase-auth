import { MDBBtn, MDBCard, MDBCardBody, MDBContainer, MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Alert from "./CustomMDB/Alert";

export default function Login() {
  const { resetPassword } = useAuth();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);

  const handleChange = (props) => (event) => {
    setValues({ ...values, [props]: event.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(values.email);
      setMessage("Check your inbox for further instruction");
    } catch (e) {
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
            <h2 className="text-center mb-4">Password Reset</h2>
            <form onSubmit={handleSubmit}>
              {error ? <Alert danger>{error}</Alert> : ""}
              {message ? <Alert success>{message}</Alert> : ""}
              <MDBInput
                className="mb-4"
                size="lg"
                label="Email"
                id="email"
                type="email"
                onChange={handleChange("email")}
                required
              />

              <MDBBtn block type="submit" disabled={loading}>
                Reset Password
              </MDBBtn>
            </form>
            <div className="w-100 text-center mt-3">
              <Link to="/login">Login</Link>
            </div>
          </MDBCardBody>
        </MDBCard>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </MDBContainer>
    </>
  );
}
