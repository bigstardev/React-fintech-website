import React from "react";
import {Col, Row} from "reactstrap";
import classes from "./TestimonialTypeEighth.module.css"

const TestimonialsTypeEighth = (props) => {
    return (
        <div className={`${classes.testimonial}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <Row>
                <Col className={`col-auto p-0 ${classes.leftColumn}`}>
                    <a href={props.link} className={classes.link}>
                        {props.children}
                    </a>
                </Col>
                <Col className={`col-auto p-0 text-left ${classes.rightColumn}`}>
                    <div>
                        <p className={`normal-text ${classes.description}`}>{props.description}</p>
                    </div>
                    <div>
                        <a href={props.link} className={classes.link}>
                          <h3 className={`title text-left ${classes.title}`}>{props.person}</h3>
                        </a>
                        <p className={`small-text text-left ${classes.smallText}`}>{props.post}</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default TestimonialsTypeEighth