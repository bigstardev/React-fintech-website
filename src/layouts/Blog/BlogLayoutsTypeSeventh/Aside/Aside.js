import React from "react";
import classes from "./Aside.module.css"

const title = "Subscribe to our newsletter";
const description = "Create screens directly in Method  or add your images from Sketch "
const hint = "No spam. Unsubscribe anytime"

const Aside = (props) => {

    return (
        <div className={`${classes.aside} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <h2>{title}</h2>
            <p className={classes.description}>{description}</p>
            {props.children}
            <div className={classes.hint}>{hint}</div>
        </div>
    )
}

export default Aside