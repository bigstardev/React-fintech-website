import React from "react";
import { Row, Col} from "reactstrap";

import Button from "../../../../components/Button/Button";

import classes from "./PortfolioTypeEighth.module.css"
import {RightArrow} from "../../../../components/Icons/Icons";

const PortfolioTypeEighth = (props) => {

    return (
        <div className={classes.portfolio}>
            <Row>
                <Col lg="7" md="6" sm="6" className={classes.col}>
                    {props.children}
                </Col>
                <Col lg="5" md="6" sm="6" className={`mx-auto text-left content-column ${classes.contentColumn} ${classes.col}`}>
                    <h3 className={`${classes.title} text-left`}>{props.title}</h3>
                    <p className={`normal-text ${classes.description}`}>{props.descr}</p>
                    <Button
                        link={true}
                        href={props.link}
                        classes={`primary big right-icon ${classes.button}`}
                        value={"Open Case"}
                        rightIcon = {<RightArrow fill={"#ffffff"}/>}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default PortfolioTypeEighth