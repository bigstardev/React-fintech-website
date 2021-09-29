import React from "react";

import classes from "./TestimonialsTypeThird.module.css"


const TestimonialTypeThird = (props) => {

    return (
        <div className={`${classes.testimonial}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={classes.inner}>
                <div className={classes.left}>
                    <div className={classes.wrapper}>
                        <div className={classes.top}>
                            <a href={props.link} className={classes.link}>
                                <h3 className="text-left">{props.person}</h3>
                            </a>
                            <p className={`text-left ${classes.smallText} ${classes.post}`}>{props.post}</p>
                        </div>
                        <div className={classes.bottom}>
                            <p className={`text-left bold-title ${classes.boldTitle}`}>{props.description}</p>
                        </div>
                    </div>
                </div>
                <div className={classes.right}>
                    <a href={props.link} className={classes.link}>
                        {props.avatar}
                    </a>
                </div>
            </div>
        </div>
    )
}
export default TestimonialTypeThird