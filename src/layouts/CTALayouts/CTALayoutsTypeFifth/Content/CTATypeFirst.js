import React from "react";
import { Row, Col } from "reactstrap";
import classes from "./CTATypeFirst.module.css"
import Badge from "../../../../components/Badges/Badges";
import { Fade } from "react-awesome-reveal";

const CTATypeFirst = (props) => {
    return (
        <div className={classes.cta}>
            <Row className={classes.topLevel}>
                <Col className={classes.col}>
                    <Fade top triggerOnce={true}>
                        {props.children}
                    </Fade>
                </Col>
            </Row>
            <Row className={classes.middleLevel}>
                <Col className={classes.col}>
                    <Fade top delay={50} triggerOnce={true}>
                        <h1>{props.title}</h1>
                    </Fade>
                    <Fade top delay={100} triggerOnce={true}>
                        <p className={`normal-text ${classes.description}`}>{props.description}</p>
                    </Fade>
                </Col>
            </Row>
            <div className={classes.buttonRow}>
                <Fade top delay={150} triggerOnce={true}>
                    <Badge
                        store={"app"}
                    />
                </Fade>
                <Fade top delay={200} triggerOnce={true}>
                    <Badge/>
                </Fade>
            </div>
        </div>
    )
}

export default CTATypeFirst