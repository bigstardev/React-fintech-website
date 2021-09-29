import React, {Component} from "react";

import {Container, Col , Row} from "reactstrap";
import image from '../../../img/block.png'
import imageDark from '../../../img/block-dark.png'
import { Fade } from "react-awesome-reveal";
import classes from "./FeaturesLayoutsTypeThirteen.module.css"

const title = "Perfect for sales, marketing and support";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";

function FeaturesLayoutsTypeThirteen (props) {

    return (
        <React.Fragment>
            <section className={`section ${classes.features} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row className={classes.topLevel}>
                            <Col lg={7} md={7}>
                                <Fade down triggerOnce={true}>
                                    <h1 className={classes.title}>{title}</h1>
                                </Fade>
                            </Col>
                            <Col lg={5} md={5}>
                                <Fade down delay={50} triggerOnce={true}>
                                    <p className={`normal-text ${classes.description}`}>{description}</p>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Container fluid={true} className={`container-fluid p-0 ${classes.containerFluid}`}>
                    <Fade up delay={100} triggerOnce={true}>
                        {props.dark == true ?
                            <>
                                <img
                                    src={imageDark}
                                    alt=""
                                    width="1400"
                                    height="615"
                                />
                            </>
                            :
                            <>
                                <img
                                    src={image}
                                    alt=""
                                    width="1400"
                                    height="615"
                                />
                            </>
                        }
                    </Fade>
                </Container>
            </section>
        </React.Fragment>
    )
}
export default FeaturesLayoutsTypeThirteen