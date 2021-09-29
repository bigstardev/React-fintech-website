import React, {Component} from "react";
import classes from "./CTALayoutsTypeSecond.module.css"
import TextButton from "../../../components/Text-Button/Text-Button";
import {RightArrow} from "../../../components/Icons/Icons";
import Oval from "../../../components/Frame/Frame";
import { Fade } from "react-awesome-reveal";
import {Container, Col , Row} from "reactstrap";

const title = "The easiest way to turn your passion into income";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";

function CTALayoutsTypeSecond (props) {

    return (
        <React.Fragment>
            <section className={`section ${classes.cta} ${(props.dark) ? 'dark' : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col lg={8} md={8} className="mx-auto text-center">
                                <Fade top triggerOnce={true}>
                                    <h1 className="title">{title}</h1>
                                </Fade>
                                <Fade top delay={50} triggerOnce={true}>
                                    <p className={`normal-text ${classes.description}`}>{description}</p>
                                </Fade>
                            </Col>
                        </Row>
                        <Row className={classes.buttonRow}>
                            <Col lg={8} md={8} className="mx-auto d-flex justify-content-center">
                                <Fade top delay={100} triggerOnce={true}>
                                    <TextButton
                                        position={"right"}
                                        link={"#1"}
                                        text={"Read More"}
                                    >
                                        <Oval
                                            variant={"small"}
                                        >
                                            <RightArrow/>
                                        </Oval>
                                    </TextButton>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}
export default CTALayoutsTypeSecond