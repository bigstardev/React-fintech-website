import React from "react";
import classes from './EcommerceTypeSixth.module.css';

const EcommerceTypeTenth = (props) => {

    return (
        <React.Fragment>
                <a href={props.link} className={classes.link}>
                    {props.children}
                </a>
                <a href={props.link} className={classes.link}>
                    <h3 className={`title text-center ${classes.title}`}>{props.title}</h3>
               </a>

                <p className={classes.text}>{props.description}</p>
        </React.Fragment>
    )
}

export default EcommerceTypeTenth