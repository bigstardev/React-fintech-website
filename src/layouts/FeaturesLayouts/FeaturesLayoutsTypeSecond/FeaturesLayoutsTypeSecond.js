import React from "react";
import classes from "./FeaturesLayoutsTypeSecond.module.css"

import {Container, Col , Row} from "reactstrap";
import Features from "./Features/Features";

import image from "../../../img/Safari.png"
import imageDark from "../../../img/Safari-dark.png"
import { Fade } from "react-awesome-reveal";


const title = "Method and the tools you love, united";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!"

function FeaturesLayoutsTypeSecond (props) {

    return (
        <React.Fragment>
            <section className={`section ${classes.features} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col lg="6" md="7" className={classes.leftColumn}>
                                <Fade top triggerOnce={true}>
                                    <h1 className={`title ${classes.title}`}>{title}</h1>
                                </Fade>

                                <Fade top delay={50} triggerOnce={true}>
                                    <p className={`normal-text ${classes.description}`}>{description}</p>
                                </Fade>

                                <Features
                                    dark={props.dark ? true : false}
                                />
                            </Col>
                            <Col lg="6" md="5" className={classes.rightColumn}>
                                <Fade  delay={50} triggerOnce={true}>
                                    {props.dark == true ?
                                        <>
                                            <img
                                                src={imageDark}
                                                alt=""
                                                width="990"
                                                height="610"
                                            />
                                        </>
                                        :
                                        <>
                                            <img
                                                src={image}
                                                alt=""
                                                width="990"
                                                height="610"
                                            />
                                        </>
                                    }
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}
export default FeaturesLayoutsTypeSecond