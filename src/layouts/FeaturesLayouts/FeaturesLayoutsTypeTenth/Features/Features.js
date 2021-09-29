import React from "react";
import {Col, Row} from "reactstrap";
import Feature from "../Feature/FeaturesTypeEighth";
import {Basket, Bookmark, Email, Extension, Group, Home} from "../../../../components/Icons/Icons";
import Oval from "../../../../components/Frame/Frame";
import { Fade } from "react-awesome-reveal";
import classes from "./Features.module.css"

const Features = (props) => {
    return (
        <React.Fragment>
            <Row className={classes.featuresRow}>
                <Col lg="4" md="6" sm="6" className={classes.item}>
                    <Fade top delay={100} triggerOnce={true}>
                        <Feature
                            title={"Property Managment"}
                            description={"Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs"}
                        >
                            <Oval variant={"large"}>
                                <Bookmark/>
                            </Oval>
                        </Feature>
                    </Fade>
                </Col>
                <Col lg="4" md="6" sm="6" className={classes.item}>
                    <Fade top delay={150} triggerOnce={true}>
                        <Feature
                            title={"User Administration"}
                            description={"Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs"}
                        >
                            <Oval variant={"large"}>
                                <Home/>
                            </Oval>

                        </Feature>
                    </Fade>
                </Col>
                <Col lg="4" md="6" sm="6" className={classes.item}>
                    <Fade top delay={200} triggerOnce={true}>
                        <Feature
                            title={"Engage Customers"}
                            description={"Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs"}
                        >
                            <Oval variant={"large"}>
                                <Basket/>
                            </Oval>
                        </Feature>
                    </Fade>
                </Col>
                <Col lg="4" md="6" sm="6" className={classes.item}>
                    <Fade top delay={250} triggerOnce={true}>
                        <Feature
                            title={"API Reference"}
                            description={"Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs"}
                        >
                            <Oval variant={"large"}>
                                <Extension/>
                            </Oval>
                        </Feature>
                    </Fade>
                </Col>
                <Col lg="4" md="6" sm="6" className={classes.item}>
                    <Fade top delay={300} triggerOnce={true}>
                        <Feature
                            title={"Team Accounts"}
                            description={"Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs"}
                        >
                            <Oval variant={"large"}>
                                <Group/>
                            </Oval>
                        </Feature>
                    </Fade>
                </Col>
                <Col lg="4" md="6" sm="6" className={classes.item}>
                    <Fade top delay={400} triggerOnce={true}>
                        <Feature
                            title={"Email Marketing"}
                            description={"Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs"}
                        >
                            <Oval variant={"large"}>
                                <Email/>
                            </Oval>
                        </Feature>
                    </Fade>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Features