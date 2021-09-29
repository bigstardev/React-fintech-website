import React from "react";
import classes from './Tweet.module.css';
import {Twitter} from "../../../../components/Icons/Icons";
import {Container, Col , Row} from "reactstrap";

const Tweet = (props) => {
    return (
        <div className={`${classes.wrapper}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <Row>
                <Col className={`col-auto pr-0 ${classes.col}`}>
                    <Twitter/>
                </Col>
                <Col className={classes.col}>
                    <p className={classes.text}>{props.content}</p>
                </Col>
            </Row>
        </div>
    )
}

export default Tweet