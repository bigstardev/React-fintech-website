import React from "react";
import classes from "./PricingTypeFourth.module.css"

const baseText = `per user ` + `\n` + `per month`;

const PricingTypeFourth = (props) => {

    return (
        <div className={`${classes.price} ${classes.find}  ${(props.classes)}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`} onClick={props.onClick} id={props.id}>
            <div className={classes.inner}>
                <div className={classes.top}>
                    <h3 className="text-center">{props.title}</h3>
                </div>
                <div className={classes.middle}>
                    <p className="normal-text text-center">{props.description}</p>
                </div>
                <div className={classes.bottom}>
                    <div className={classes.wrapper}>
                        <div className={classes.left}>
                            <p className={`large-text ${classes.largeText} text-right`}>{'$' + props.price}</p>
                        </div>
                        <div className={`${classes.right} d-flex align-items-center`}>
                            <p className={`small-text ${classes.smallText}`}>{baseText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingTypeFourth