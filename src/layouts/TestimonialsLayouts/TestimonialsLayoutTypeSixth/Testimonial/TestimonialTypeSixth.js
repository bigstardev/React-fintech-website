import React from "react";
import {Col, Row} from "reactstrap";
import classes from "./TestimonialTypeSixth.module.css"


const TestimonialTypeSixth = (props) => {

    return (
        <div className={`${classes.testimonial}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.header}>
                    <div className={classes.wrapper}>
                        <div className={classes.first}>
                            <a href={props.link} className={classes.link}>
                                {props.children}
                            </a>
                        </div>
                        <div className={classes.second}>
                            <p className={classes.description}>{props.descr}</p>
                        </div>
                        <div className={classes.third}>
                            <a href={props.link} className={classes.link}>
                                <h3 className={`title text-left ${classes.title}`}>{props.person}</h3>
                            </a>
                            <p className={classes.post}>{props.post}</p>
                        </div>
                    </div>
                </div>

        </div>
    )
}
export default TestimonialTypeSixth