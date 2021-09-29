import React from "react";
import {Col, Row} from "reactstrap";
import classes from "./TestimonialTypeTenth.module.css"

const TestimonialsTypeTenth = (props) => {
    return (
        <div className={`${classes.testimonial}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <Row>
                <Col className="d-flex flex-column align-items-center">
                    <p className={`normal-text ${classes.description}`}>{props.description}</p>
                    <div className={classes.avatar}>
                        <a href={props.link} className={classes.link}>
                            {props.children}
                        </a>
                    </div>
                    <a href={props.link} className={classes.link}>
                        <h3 className={`title text-left ${classes.title}`}>{props.person}</h3>
                    </a>
                    <p className={`small-text text-left ${classes.smallText}`}>{props.post}</p>
                </Col>
            </Row>
        </div>
    )
}
export default TestimonialsTypeTenth