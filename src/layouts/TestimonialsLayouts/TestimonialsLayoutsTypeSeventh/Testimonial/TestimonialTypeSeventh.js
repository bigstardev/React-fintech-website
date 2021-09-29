import React from "react";
import {Col, Row} from "reactstrap";
import classes from "./TestimonialTypeSeventh.module.css"
import {Rate} from "antd";

const TestimonialTypeSeventh = (props) => {

    return (
        <div className={`${classes.testimonial}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={classes.inner}>
                <div className={classes.header}>
                    <Rate defaultValue={props.stars} className={props.dark ? 'dark' : null}/>
                </div>
                <div className={classes.middle}>
                    <Row>
                        <Col lg="12" md="12" className={classes.col}>
                            <p className="normal-text">{props.description}</p>
                        </Col>
                    </Row>
                </div>
                <div className={classes.footer}>
                    <div className={classes.wrapper}>
                        <div className={classes.leftColumn}>
                            <a href={props.link} className={classes.link}>
                                {props.avatar}
                            </a>
                        </div>
                        <div className={classes.rightColumn}>
                            <a href={props.link} className={classes.link}>
                                <h3 className={`title text-left ${classes.title}`}>{props.person}</h3>
                            </a>
                            <p className={`small-text text-left ${classes.smallText}`}>{props.post}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TestimonialTypeSeventh