import React from "react";

import {Col, Row} from "reactstrap";
import classes from "./TestimonialTypeFifth.module.css"
import { Rate } from 'antd';


const TestimonialTypeFifth = (props) => {

    return (
        <div className={`${classes.testimonial}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={classes.inner}>
                <div className={classes.header}>
                    <Row>
                        <Col lg="5" md="5" className={classes.leftColumn}>
                            <a href={props.link} className={classes.link}>
                                {props.avatar}
                            </a>
                        </Col>
                        <Col lg="7" md="7" className={`text-left ${classes.rightColumn }`}>
                            <Rate disabled defaultValue={props.stars} className={props.dark ? 'dark' : null}/>
                            <p className={`large-text ${classes.largeText}`}>{props.description}</p>

                            <div className={classes.bottomlevel}>
                                <a href={props.link} className={classes.link}>
                                    <p className={`normal-text ${classes.normalText}`}>{props.person}</p>
                                </a>
                                <p className={`small-text text-left ${classes.smallText}`}>{props.post}</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
export default TestimonialTypeFifth