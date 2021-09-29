import React from "react";
import classes from "./EcommerceTypeSimilar.module.css"

const EcommerceTypeSimilar = (props) => {
    return (
        <div className={`${classes.similar}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={classes.outer}>
                <div className={classes.leftColumn}>
                    <a href={props.link} className={classes.link}>
                        {props.children}
                    </a>
                </div>
                <div className={classes.rightColumn}>
                    <p className={classes.description}>{props.title}</p>
                    <a href="" className={classes.price}>${(props.price).toFixed(2)}</a>
                </div>
            </div>
        </div>
    )
}

export default EcommerceTypeSimilar