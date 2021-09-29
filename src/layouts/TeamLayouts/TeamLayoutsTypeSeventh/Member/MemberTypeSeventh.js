import React from "react";
import classes from "./MemberTypeSeventh.module.css"
import {Col, Row} from "reactstrap";
import Divider from "../../../../components/Divider/Divider";

const MemberTypeSeventh = (props) => {

    return (
        <div className={classes.member}>
            <Row>
                <Col lg="5" md="6" className={classes.leftColumn}>
                    {props.avatar}
                </Col>
                <Col lg="7" md="6" className={classes.rightColumn}>
                    <div className="row">
                        <Col lg="6" md="12" sm="6" xs="7" className={`d-flex align-items-center ${classes.col}`}>
                            <p className={`normal-text text-left ${classes.post}`}>{props.post}</p>
                        </Col>
                        <Col className={`col-auto ml-auto ${classes.socials} ${classes.col}`}>
                            {props.socials}
                        </Col>
                        <Col className={`col-12 ${classes.col}`}>
                            <div className={classes.divider}>
                                <Divider/>
                            </div>
                        </Col>
                    </div>
                    <p className={`normal-text text-left ${classes.description}`}>{props.description}</p>
                    <h3 className={`title text-left ${classes.title}`}>{props.person}</h3>
                </Col>
            </Row>
        </div>
    )
}
export default MemberTypeSeventh