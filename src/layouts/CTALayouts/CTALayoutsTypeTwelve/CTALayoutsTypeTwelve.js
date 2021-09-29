import React, {Component} from "react";
import classes from "./CTALayoutsTypeTwelve.module.css"

import Button from "../../../components/Button/Button";
import Logos from "./Logos/Logos";
import {Container, Col , Row} from "reactstrap";
import { Fade } from "react-awesome-reveal";

const description = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here, making it look like readable English.";
function CTALayoutsTypeTwelve (props) {

    return (
        <React.Fragment>
            <section className={`section ${classes.cta} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>

                <div className={classes.gridWrapper}>
                    <Container>
                        <Row className={classes.logosRow}>
                            <Col lg={10} md={10} className="mx-auto">
                                <Fade top triggerOnce={true}>
                                    <Logos
                                        dark={props.dark ? true : false}
                                    />
                                </Fade>
                            </Col>
                        </Row>
                        <Row className={classes.textRow}>
                            <Col lg={10} md={10} className="mx-auto">
                                <Fade top delay={50} triggerOnce={true}>
                                    <p className={`normal-text text-center ${classes.description }`}>{description}</p>
                                </Fade>
                            </Col>
                        </Row>
                        <Row className={classes.buttonsRow}>
                            <Col lg={10} md={10} className="mx-auto d-flex justify-content-center">
                                <Fade top delay={100} triggerOnce={true}>
                                    <Button
                                        link={true}
                                        href={"#"}
                                        classes={`primary large simple ${classes.button}`}
                                        value={"Get Started"}
                                    />
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}
export default CTALayoutsTypeTwelve