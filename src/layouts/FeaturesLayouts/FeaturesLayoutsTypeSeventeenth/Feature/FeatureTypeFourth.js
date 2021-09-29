import React from "react";
import { Row, Col, } from "reactstrap";
import classes from "./FeaturesTypeFourth.module.css"

const FeaturesTypeFourth = (props) => {
    return (
        <div className={`${classes.feature}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <Row>
                <Col className={`col-auto pr-0 ${classes.col}  ${classes.leftCol}`}>
                    {props.children}
                </Col>
                <Col className={classes.col}>
                    <h3 className={`title ${classes.title}`}>{props.title}</h3>
                    <p className="normal-text">{props.description}</p>
                </Col>
            </Row>
        </div>
    )
}

export default FeaturesTypeFourth