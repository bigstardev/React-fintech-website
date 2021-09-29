import React from "react";
import { Row, Col, Container } from "reactstrap";
import classes from "./Feature.module.css"

const Feature = (props) => {
    return (
        <div className={classes.feature}>
            <Row>
                <Col>
                    <span className={`${classes.action}`}>{props.action}</span>
                    <h2 className={`title text-left ${classes.title}`}>{props.title}</h2>
                    <p className={`normal-text text-left ${classes.description}`}>{props.description}</p>
                </Col>
            </Row>
        </div>
    )
}

export default Feature