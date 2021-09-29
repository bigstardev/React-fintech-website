import React from "react";
import Features from "./Features/Features";

import {Container, Col , Row} from "reactstrap";
import { Fade } from "react-awesome-reveal";
import Button from "../../../components/Button/Button";
import classes from "./FeaturesLayoutsTypeNinth.module.css"

const title = "We believe in helping people pay attention to what matters";
const description = "Create screens directly in Method or add your images from Sketch or Figma.";


function FeaturesLayoutsTypeNinth (props) {
    return (
        <React.Fragment>
            <section className={`section ${classes.features} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col lg={6} md={6} className={`d-flex flex-column ${classes.headerColumn}`}>
                                <Fade top triggerOnce={true}>
                                    <h1 className={`title ${classes.title}`}>{title}</h1>
                                </Fade>
                                <Fade down delay={50} triggerOnce={true}>
                                    <p className={`normal-text ${classes.description}`}>{description}</p>
                                </Fade>
                                <Fade down delay={100} triggerOnce={true}>
                                    <Button
                                        link={true}
                                        href={"#"}
                                        classes={`primary large simple ${classes.button}`}
                                        value={"Read More"}
                                    />
                                </Fade>
                            </Col>
                            <Col lg={{ size: 1, offset:1}} md={{ size: 1}}>
                                <Fade down delay={100} triggerOnce={true}>
                                    <div className={classes.divider}></div>
                                </Fade>
                            </Col>

                            <Col lg={{ size: 4}} md={{ size: 5}} className={classes.featuresColumn}>
                                <Features/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}
export default FeaturesLayoutsTypeNinth