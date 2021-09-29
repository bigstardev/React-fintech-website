import React from "react";
import { Row, Col, Container} from "reactstrap";
import Oval from "../../../../components/Frame/Frame";
import {RightArrow} from "../../../../components/Icons/Icons";
import classes from "./PortfolioTypeFirst.module.css"


const PortfolioTypeFirst = (props) => {

    return (
        <div className={classes.portfolio}>
            <a href={props.link} className={classes.link}>
                {props.children}
            </a>
            <Row className={classes.bottomLevel}>
                <Col className={`col-auto ${classes.leftColumn} ${classes.col}`}>
                    <h3 className={`${classes.title} text-left`}>{props.name}</h3>
                </Col>
                <Col className={`col-auto ml-auto ${classes.rightColumn} ${classes.col}`}>
                    <a href={props.link} className={classes.arrowLink}>
                        <Oval
                            variant="small"
                        >
                            <RightArrow/>
                        </Oval>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default PortfolioTypeFirst