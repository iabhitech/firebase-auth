import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
export default function Main(props) {
  return (
    <>
      <Navbar />
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Redirect to="/signup" />
      </Switch>
    </>
  );
}
