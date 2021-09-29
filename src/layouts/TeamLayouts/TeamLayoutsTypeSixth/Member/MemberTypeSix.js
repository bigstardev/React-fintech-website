import React from "react";
import classes from "./MemberTypeSix.module.css"
import {Col, Row} from "reactstrap";

const MemberTypeSix = (props) => {

    return (
        <div className={classes.member}>
                <Row>
                    <Col lg="4" md="4" sm="12" xs="auto"  className={classes.leftColumn}>
                        <a href={props.link} className={classes.link}>
                            {props.avatar}
                        </a>
                    </Col>
                    <Col lg="8" md="8" sm="12" xs="12"  className={classes.rightColumn}>
                        <a href={props.link} className={classes.linkElement}>
                            <h3 className={`title ${classes.title}`}>{props.person}</h3>
                        </a>
                        <p className={`normal-text ${classes.post}`}>{props.post}</p>
                        <p className={`normal-text ${classes.description}`}>{props.description}</p>
                    </Col>
                </Row>
        </div>
    )
}
export default MemberTypeSix