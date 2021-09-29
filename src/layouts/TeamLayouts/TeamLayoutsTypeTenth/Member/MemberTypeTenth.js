import React from "react";
import classes from "./MemberTypeTenth.module.css"
import {Col, Row} from "reactstrap";


const MemberTypeTenth = (props) => {

    return (
        <div className={`${classes.member} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={`d-flex flex-column ${classes.inner}`}>
                    <Row className={classes.headerRow}>
                        <Col className={`col-auto p-0 ${classes.leftColumn}`}>
                            {props.avatar}
                        </Col>
                        <Col className={`col-auto p-0 ${classes.rightColumn} ${classes.col}`}>
                            <h3 className={`title ${classes.title}`}>{props.person}</h3>
                            <p className={classes.post}>{props.post}</p>
                        </Col>
                    </Row>
                <Row style={{height: "inherit"}}>
                    <Col className={`col-12 ${classes.descriptionColumn} ${classes.col}`}>
                        <p className={classes.description}>{props.description}</p>
                    </Col>
                    <Col className={`col-12 ${classes.socialsColumn} ${classes.col}`}>
                        {props.socials}
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default MemberTypeTenth