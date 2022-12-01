import { MDBBtn, MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Alert from "./CustomMDB/Alert";

export default function Dashboard() {
  const [error, setError] = useState();
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError('');
    try{
      await logout();
      history.push('/login');
    }
    catch(e) {
      setError(e.message);
      console.log(e.message);
    }
  }

  return (
    <>
      <MDBContainer className="mt-5">
        <MDBCard style={{ maxWidth: "460px" }} className="m-auto border">
          <MDBCardBody>
            <h2 className="text-center mb-4">Profile</h2>
            {error ? <Alert danger>{error}</Alert> : ""}
            <strong>Email: </strong> {currentUser.email}
            <MDBBtn block>Update Profile</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <div className="w-100 text-center mt-2">
          <MDBBtn onClick={handleLogout} color="link">Logout</MDBBtn>
        </div>
      </MDBContainer>
    </>
  );
}
