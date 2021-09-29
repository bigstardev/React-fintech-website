import React from "react";
import classes from './EcommerceTypeEleventh.module.css';

const EcommerceTypeEleventh = (props) => {

    return (
        <React.Fragment>
            <a href={props.link} className={classes.link}>
                <img src={props.children} alt=""/>
            </a>
            <a href={props.link} className={classes.link}>
                <h3 className={classes.title}>{props.title}</h3>
            </a>

            <p className={classes.text}>${props.price}</p>
        </React.Fragment>
    )
}

export default EcommerceTypeEleventh