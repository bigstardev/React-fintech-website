import React from "react";
import {Col, Row} from "reactstrap";
import Feature from "../Feature/FeatureTypeFourth";
import {Bookmark, Email, Group} from "../../../../components/Icons/Icons";
import Oval from "../../../../components/Frame/Frame";
import { Fade } from "react-awesome-reveal";
import classes from "./Features.module.css"

const Features = (props) => {
    return (
        <React.Fragment>
            <Row xs="1" className={classes.featuresRow}>
                <Col className={classes.item}>
                    <Fade down delay={100} triggerOnce={true}>
                        <Feature
                            title={"Email Marketing"}
                            description={"You can even sync designs from your cloud storage!"}
                        >
                            <Oval variant={"normal"}>
                                <Email/>
                            </Oval>
                        </Feature>
                    </Fade>
                </Col>
                <Col className={classes.item}>
                    <Fade down delay={150} triggerOnce={true}>
                        <Feature
                            title={"Team Accounts"}
                            description={"You can even sync designs from your cloud storage!"}
                        >
                            <Oval variant={"normal"}>
                                <Group/>
                            </Oval>
                        </Feature>
                    </Fade>
                </Col>
                <Col className={classes.item}>
                    <Fade down delay={200} triggerOnce={true}>
                        <Feature
                            title={"Property Managment"}
                            description={"You can even sync designs from your cloud storage!"}
                        >
                            <Oval variant={"normal"}>
                                <Bookmark/>
                            </Oval>
                        </Feature>
                    </Fade>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Features