import React from "react";
import classes from "./Feature.module.css"

import { Location} from "../../../../components/Icons/Icons";


const Feature = (props) => {
  return (
    <div className={`${classes.feature} ${props.dark ? `${classes.dark}` : ''}`}>
      <h3>{props.title}</h3>
      <p className={classes.description}>
        <Location fill="rgba(0, 0, 0, 0.25)"/> {props.description}
      </p>
    </div>
  )
}

export default Feature