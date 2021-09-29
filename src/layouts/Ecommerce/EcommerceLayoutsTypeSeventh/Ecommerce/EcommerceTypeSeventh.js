import React from "react";
import classes from "./EcommerceTypeSeventh.module.css"

const EcommerceTypeSeventh = (props) => {

    return (
        <React.Fragment>
            <div className={`${classes.ecommerce}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.wrapper}>
                    <div className={classes.leftColumn}>
                        <a href={props.link} className={classes.link}>
                            {props.poster}
                        </a>
                    </div>
                    <div className={classes.rightColumn}>
                        <a href={props.link} className={classes.link}>
                            <h3 className={classes.title}>{props.title}</h3>
                        </a>
                        <p className={classes.price}>${props.price}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EcommerceTypeSeventh