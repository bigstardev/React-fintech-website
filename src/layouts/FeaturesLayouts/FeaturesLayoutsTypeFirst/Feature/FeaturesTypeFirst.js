import React from "react";
import classes from "./FeaturesTypeFirst.module.css"


const FeaturesTypeFirst = (props) => {

    return (
        <div className={classes.feature}>
            <h3 className={`title ${classes.title}`}>{props.title}</h3>
            <p className="normal-text">{props.description}</p>
        </div>
    )
}

export default FeaturesTypeFirst