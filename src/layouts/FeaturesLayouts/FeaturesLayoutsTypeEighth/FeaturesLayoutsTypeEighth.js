import React from "react";
import classes from "./FeaturesLayoutsTypeEighth.module.css"
import Features from "./Feature/FeaturesTypeEighth";

import {Container, Col , Row} from "reactstrap";

import {Bookmark, Email, Home , Basket, Extension, Group} from "../../../components/Icons/Icons";
import Oval from "../../../components/Frame/Frame";
import Slider from "./Slider/Slider";
import Slide from "./Slide/Slide";
import { Fade } from "react-awesome-reveal";

const title = "Get awesome email maketing tool";
function FeaturesLayoutsTypeEighth (props) {


    return (
        <React.Fragment>
            <section className={`section ${classes.features} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>

                <Container>
                    <Row className={classes.headerRow}>
                        <Col lg={7} md={7} >
                            <div className={classes.gridWrapper}>
                                <Fade top triggerOnce={true}>
                                    <h1 className={`title ${classes.title}`}>{title}</h1>
                                </Fade>
                            </div>
                        </Col>
                    </Row>

                    <Row className={classes.sliderRow}>
                        <Col className={`p-0 ${classes.col}`}>
                            <Slider>
                                <Slide>
                                    <Row className="flex-column">
                                        <Col className={`col-lg-12 ${classes.item}`}>
                                            <Fade down triggerOnce={true}>
                                            <Features
                                                title={"Property Managment"}
                                                description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                            >
                                                <Oval variant={"normal"}>
                                                    <Bookmark/>
                                                </Oval>
                                            </Features>
                                            </Fade>
                                        </Col>
                                        <Col className={`col-lg-12 ${classes.item}`}>
                                            <Fade down delay={50} triggerOnce={true}>
                                            <Features
                                                title={"User Administration"}
                                                description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                            >
                                                <Oval variant={"normal"}>
                                                    <Home/>
                                                </Oval>
                                            </Features>
                                            </Fade>
                                        </Col>
                                    </Row>
                                </Slide>
                                <Slide>
                                    <Row className="flex-column">
                                        <Col className={`col-lg-12 ${classes.item}`}>
                                            <Fade down delay={100} triggerOnce={true}>
                                            <Features
                                                title={"Engage Customers"}
                                                description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                            >
                                                <Oval variant={"normal"}>
                                                    <Basket/>
                                                </Oval>
                                            </Features>
                                            </Fade>
                                        </Col>
                                        <Col className={`col-lg-12 ${classes.item}`}>
                                            <Fade down delay={150} triggerOnce={true}>
                                            <Features
                                                title={"API Reference"}
                                                description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                            >
                                                <Oval variant={"normal"}>
                                                    <Extension/>
                                                </Oval>
                                            </Features>
                                            </Fade>
                                        </Col>
                                    </Row>
                                </Slide>
                                <Slide>
                                    <Row className="flex-column">
                                        <Col className={`col-lg-12 ${classes.item}`}>
                                            <Fade down delay={200} triggerOnce={true}>
                                            <Features
                                                title={"Team Accounts"}
                                                description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                            >
                                                <Oval variant={"normal"}>
                                                    <Group/>
                                                </Oval>
                                            </Features>
                                            </Fade>
                                        </Col>
                                        <Col className={`col-lg-12 ${classes.item}`}>
                                            <Fade down delay={250} triggerOnce={true}>
                                            <Features
                                                title={"Email Marketing"}
                                                description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                            >
                                                <Oval variant={"normal"}>
                                                    <Email/>
                                                </Oval>
                                            </Features>
                                            </Fade>
                                        </Col>
                                    </Row>
                                </Slide>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}
export default FeaturesLayoutsTypeEighth