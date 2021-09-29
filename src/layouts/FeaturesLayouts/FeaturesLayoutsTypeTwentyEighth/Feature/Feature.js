import React from "react";
import classes from "./Feature.module.css"

const Feature = (props) => {
  return (
    <div className={`${classes.feature} ${props.dark ? `${classes.dark}` : ''}`}>
      {props.children}
      <h2 className={classes.title}>{props.title}</h2>
      <p className={classes.description}>{props.description}</p>
    </div>
  )
}

export default Feature