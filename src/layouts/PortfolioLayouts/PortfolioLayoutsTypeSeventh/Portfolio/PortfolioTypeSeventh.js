import React from "react";
import { Row, Col} from "reactstrap";
import Button from "../../../../components/Button/Button";
import classes from "./PortfolioTypeSeventh.module.css"
import {RightArrow} from "../../../../components/Icons/Icons";


const PortfolioTypeSeventh = (props) => {

    return (
        <div className={classes.portfolio}>
            <Row>
                <Col lg="12" className={classes.col}>
                    <a href={props.link} className={classes.link}>
                        {props.children}
                    </a>
                </Col>
                <Col lg="10" md="10" className={`mx-auto text-left content-column ${classes.contentColumn} ${classes.col}`}>
                    <a href={props.link} className={classes.link}>
                        <h3 className={`${classes.title} text-left`}>{props.title}</h3>
                    </a>
                    <p className={`normal-text ${classes.description}`}>{props.descr}</p>
                </Col>
                <Col className={`col-12 ${classes.buttonColumn} ${classes.col}`}>
                    <Button
                        link={true}
                        classes={"primary big right-icon"}
                        value={"Open Case"}
                        rightIcon = {<RightArrow fill={"#ffffff"}/>}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default PortfolioTypeSeventh