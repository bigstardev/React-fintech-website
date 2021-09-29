import React from "react";

import classes from "./TestimonialsTypeSecond.module.css"

const TestimonialTypeSecond = (props) => {

    return (
        <div className={`${classes.testimonial}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={classes.wrapper}>
                <div className={classes.top}>
                    <a href={props.link} className={classes.link}>
                        {props.children}
                    </a>
                </div>
                <div className={classes.middle}>
                    <a href={props.link} className={classes.link}>
                        <h3>{props.person}</h3>
                    </a>
                    <p className={`small-text ${classes.smallText}`}>{props.post}</p>
                </div>
                <div className={classes.bottom}>
                    <p className={`normal-text ${classes.description}`}>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialTypeSecond