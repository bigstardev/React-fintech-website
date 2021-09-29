import React from "react";
import {Col, Row} from "reactstrap";
import Feature from "../Feature/FeaturesTypeFirst";
import { Fade } from "react-awesome-reveal";
import classes from "./Features.module.css"

const Features = (props) => {
    return (
        <React.Fragment>
            <Row className={classes.featuresRow}>
                <Col lg="4" md="4" className={classes.feature}>
                    <Fade top delay={200} triggerOnce={true}>
                        <Feature
                            title={"Email Marketing"}
                            description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "}
                        />
                    </Fade>
                </Col>
                <Col lg="4" md="4" className={classes.feature}>
                    <Fade top delay={250} triggerOnce={true}>
                        <Feature
                            title={"Marketing Automation"}
                            description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  "}
                        />
                    </Fade>
                </Col>
                <Col lg="4" md="4" className={classes.feature}>
                    <Fade top delay={300} triggerOnce={true}>
                        <Feature
                            title={"Email Marketing"}
                            description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "}
                        />
                    </Fade>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Features