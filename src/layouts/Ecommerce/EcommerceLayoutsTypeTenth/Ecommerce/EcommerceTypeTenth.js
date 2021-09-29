import React from "react";
import classes from "./EcommerceTypeTenth.module.css"


const EcommerceTypeTenth = (props) => {

    return (
        <React.Fragment>
            <div className={`${classes.ecommerce}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.wrapper}>
                    <a href={props.link} className={classes.link}>
                        {props.children}
                    </a>
                     <a href={props.link} className={classes.link}>
                        <h3 className={classes.header}>{props.title}</h3>
                     </a>

                    <p className={classes.price}>${props.price}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EcommerceTypeTenth