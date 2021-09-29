import React from "react";
import {Col, Row} from "reactstrap";
import Feature from "../Feature/FeaturesTypeFirst";
import { Fade } from "react-awesome-reveal";
import classes from "./Features.module.css"

const Features = (props) => {
    return (
        <React.Fragment>
            <Row className={classes.featuresRow}>
                <Col lg={6} md={6} className={classes.item}>
                    <Fade down triggerOnce={true}>
                        <Feature
                            title={"Property Managment"}
                            description={"Create screens directly in Method or add your images from Sketch"}
                        />
                    </Fade>
                </Col>
                <Col lg={6} md={6} className={classes.item}>
                    <Fade down delay={50} triggerOnce={true}>
                        <Feature
                            title={"Team Accounts"}
                            description={"Create screens directly in Method or add your images from Sketch"}
                        />
                    </Fade>
                </Col>
                <Col lg={6} md={6} className={classes.item}>
                    <Fade down delay={100} triggerOnce={true}>
                        <Feature
                            title={"User Administration"}
                            description={"Create screens directly in Method or add your images from Sketch"}
                        />
                    </Fade>
                </Col>
                <Col lg={6} md={6} className={classes.item}>
                    <Fade down delay={150} triggerOnce={true}>
                        <Feature
                            title={"API Reference"}
                            description={"Create screens directly in Method or add your images from Sketch"}
                        />
                    </Fade>
                </Col>
                <Col lg={6} md={6} className={classes.item}>
                    <Fade down delay={200} triggerOnce={true}>
                        <Feature
                            title={"Email Marketing"}
                            description={"Create screens directly in Method or add your images from Sketch"}
                        />
                    </Fade>
                </Col>
                <Col lg={6} md={6} className={classes.item}>
                    <Fade down delay={250} triggerOnce={true}>
                        <Feature
                            title={"Marketing Automation"}
                            description={"Create screens directly in Method or add your images from Sketch"}
                        />
                    </Fade>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Features