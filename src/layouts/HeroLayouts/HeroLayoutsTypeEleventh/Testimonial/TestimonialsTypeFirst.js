import React from "react";

import { Row, Col} from "reactstrap";
import Divider from "../../../../components/Divider/Divider";
import classes from "./TestimonialsTypeFirst.module.css"

const TestimonialTypeFirst = (props) => {

    return (
        <div className={classes.testimonial}>
            <Row>
                <Col lg="12" md="12" className={classes.topLevel}>
                    <h2 className={classes.boldTitle}>{props.title}</h2>
                    <p className={`normal-text ${classes.description}`}>{props.descr}</p>
                </Col>
                <Col lg="8" md="8" className={`mx-auto ${classes.middleLevel}`}>
                    <Divider/>
                </Col>
                <Col lg="6" md="6" className={`mx-auto ${classes.bottomLevel}`}>
                    <a href={props.link} className={classes.link}>
                        {props.children}
                    </a>
                    <a href={props.link} className={classes.link}>
                        <h3 className={classes.title}>{props.person}</h3>
                    </a>
                    <p className={classes.smallText}>{props.post}</p>
                </Col>
            </Row>
        </div>
    )
}

export default TestimonialTypeFirst