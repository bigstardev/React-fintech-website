import React from "react";

import {Col, Row} from "reactstrap";
import Socials from "../../../../components/Socials/Socials";

import classes from "./TestimonialTypeNinth.module.css"
import {Twitter} from "../../../../components/Icons/Icons";

const TestimonialTypeNinth = (props) => {

    return (
        <div className={`${classes.testimonial}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={classes.inner}>
                <div className={classes.header}>
                        <div>
                            <a href={props.link} className={classes.link}>
                                {props.children}
                            </a>
                        </div>
                        <div>
                            <a href={props.link} className={classes.link}>
                                <h3 className={`title ${classes.title}`}>{props.person}</h3>
                            </a>
                            <p className={`small-text text-left`}>{props.post}</p>
                        </div>
                        <div className={classes.third}>
                            <Socials>
                                <a href={props.link}>
                                    <Twitter/>
                                </a>
                            </Socials>
                        </div>
                </div>
                <div className={classes.footer}>
                    <Row>
                        <Col lg="12" md="12" className={classes.col}>
                            <p className={`normal-text ${classes.normalText}`}>{props.descr}</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
export default TestimonialTypeNinth