import React from "react";
import classes from "./Feature.module.css"

const Feature = (props) => {
  return (
    <div className={`${classes.feature} ${props.dark ? `${classes.dark}` : ''}`}>
      <h3>{props.title}</h3>
      <p className={classes.description}>{props.description}</p>
    </div>
  )
}

export default Feature