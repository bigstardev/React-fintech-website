import React from "react";

import {Col, Container, Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "../../../components/Button/Button";
import {Fire} from "../../../components/Icons/Icons";
import { Fade } from "react-awesome-reveal";
import firstWidget from "../../../img/widget-01.png"
import secondWidget from "../../../img/widget-02.png"
import firstWidgetDark from "../../../img/widget-dark-01.png"
import secondWidgetDark from "../../../img/widget-dark-02.png"
import classes from "./FeaturesLayoutsTypeThird.module.css"

const title = "The best awesome email marketing tool";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";

function FeaturesLayoutsTypeThird (props) {

    return (
        <React.Fragment>
            <section className={`section ${classes.features} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col lg="6" md="6" className={classes.leftColumn}>
                                <Row>
                                    <Col className={classes.col}>
                                        <div className="position-relative d-flex">
                                            {props.dark == true ?
                                                <>
                                                    <Fade left delay={100} triggerOnce={true}>
                                                        <img
                                                            src={firstWidgetDark}
                                                            style={{left: "-375px"}}
                                                            className="position-absolute first-image"
                                                            width="350"
                                                            height="400"
                                                            alt=""
                                                        />
                                                    </Fade>
                                                    <Fade left delay={50} triggerOnce={true}>
                                                        <img
                                                            src={secondWidgetDark}
                                                            className="ml-auto second-image"
                                                            width="350"
                                                            height="400"
                                                            alt=""
                                                        />
                                                    </Fade>
                                                </>
                                                :
                                                <>
                                                    <Fade left delay={100} triggerOnce={true}>
                                                        <img
                                                            src={firstWidget}
                                                            style={{left: "-375px"}}
                                                            className="position-absolute first-image"
                                                            width="350"
                                                            height="400"
                                                            alt=""
                                                        />
                                                    </Fade>
                                                    <Fade left delay={50} triggerOnce={true}>
                                                        <img
                                                            src={secondWidget}
                                                            className="ml-auto second-image"
                                                            width="350"
                                                            height="400"
                                                            alt=""
                                                        />
                                                    </Fade>
                                                </>
                                            }
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg="6" md="6" className={classes.rightColumn}>

                                <Fade top triggerOnce={true}>
                                    <h1 className={`title ${classes.title}`}>{title}</h1>
                                </Fade>

                                <Fade top delay={50} triggerOnce={true}>
                                    <p className={`normal-text ${classes.description}`}>{description}</p>
                                </Fade>

                                <Fade top delay={150} triggerOnce={true}>
                                    <Button
                                        link={true}
                                        href={"#"}
                                        classes={`primary large left-icon ${classes.button}`}
                                        value={"Get Started"}
                                        leftIcon={<Fire fill="#ffffff"/>}
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
export default FeaturesLayoutsTypeThird
