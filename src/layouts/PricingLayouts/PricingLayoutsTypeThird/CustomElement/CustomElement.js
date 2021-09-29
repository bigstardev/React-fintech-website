import React from "react";
import classes from  "./CustomElement.module.css"

const CustomElement = (props) => {
    return (
        <div className={`${classes.custom}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            {props.children}
        </div>
    )
}

export default CustomElement