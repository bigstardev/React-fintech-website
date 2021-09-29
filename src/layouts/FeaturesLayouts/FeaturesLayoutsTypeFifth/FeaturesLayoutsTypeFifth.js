import React from "react";
import classes from "./FeaturesLayoutsTypeFifth.module.css"

import {Col, Container, Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./Slider/Slider";

import widget01 from "../../../img/widget-01.png";
import widget02 from "../../../img/widget-02.png";
import widget03 from "../../../img/widget-03.png";
import widget04 from "../../../img/widget-04.png";

import widgetDark01 from "../../../img/widget-dark-01.png";
import widgetDark02 from "../../../img/widget-dark-02.png";
import widgetDark03 from "../../../img/widget-dark-03.png";
import widgetDark04 from "../../../img/widget-dark-04.png";
import { Fade } from "react-awesome-reveal";

import Button from "../../../components/Button/Button";
const title = "The easiest way to turn your passion into income";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";

const originalImages = [widget01, widget02, widget03, widget04, widget01, widget02, widget04];
const darkImages = [widgetDark01, widgetDark02, widgetDark03, widgetDark04, widgetDark01, widgetDark02, widgetDark04];

function FeaturesLayoutsTypeFifth (props) {

    return (
        <React.Fragment>
            <section className={`section ${classes.features} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <Container className={classes.container}>
                        <Row className={classes.headerRow}>
                                <Col lg="8" md="8" className={`mx-auto ${classes.col}`}>
                                    <div className={classes.gridWrapper}>
                                    <Fade top triggerOnce={true}>
                                        <h1 className={`title ${classes.title}`}>{title}</h1>
                                    </Fade>
                                    </div>
                                </Col>
                        </Row>

                        <Row className={classes.sliderRow}>
                            <Col className={classes.col}>
                                <Fade top delay={50} triggerOnce={true}>
                                    <Slider
                                        array={props.dark == true ? darkImages : originalImages}
                                    />
                                </Fade>
                            </Col>
                        </Row>

                        <Row className={classes.descriptionRow}>

                            <Col lg="8" md="8" className={`mx-auto ${classes.col}`}>
                                <div className={classes.gridWrapper}>
                                <Fade top delay={100} triggerOnce={true}>
                                    <p className={`normal-text ${classes.description}`}>{description}</p>
                                </Fade>
                                </div>
                            </Col>

                        </Row>

                        <Row className={classes.buttonRow}>
                            <Col lg="8" md="8" className={`mx-auto d-flex justify-content-center ${classes.col}`}>
                                <div className={classes.gridWrapper}>
                                <Fade top delay={150} triggerOnce={true}>
                                    <Button
                                        link={true}
                                        href={"#"}
                                        classes={`primary large simple ${classes.button}`}
                                        value={"Read More"}
                                    />
                                </Fade>
                                </div>
                            </Col>
                        </Row>
                    </Container>
            </section>
        </React.Fragment>
    )
}
export default FeaturesLayoutsTypeFifth