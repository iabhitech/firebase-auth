import React from "react";
import PropTypes from 'prop-types';

export default function Alert(props){
  const rootStyles = {
    alert: {
      position: "relative",
      padding: ".5rem 1rem",
      marginBottom: "1rem",
      border: "1px solid transparent",
      borderRadius: "4px"
    },
    alertDanger: {
      color: "#951d32",
      backgroundColor: "#fed6dd",
      borderColor: "#fdc1cc"
    },
    alertSuccess: {
      color: "#006e2c",
      backgroundColor: "#ccf1db",
      borderColor: "#b3e9c9"
    }
  };

  let classes = rootStyles.alert;
  if(props.danger){
    Object.assign(classes, rootStyles.alertDanger);
  }
  else if(props.success){
    Object.assign(classes, rootStyles.alertSuccess);
  }
  if(props.className){
    Object.assign(classes,props.className);
  }
  return (
    <div style={classes} role="alert" data-mdb-color="danger">
     {props.children}
    </div>
  );
}

Alert.propTypes = {
  className: PropTypes.string,
  danger: PropTypes.bool,
  success: PropTypes.bool
};