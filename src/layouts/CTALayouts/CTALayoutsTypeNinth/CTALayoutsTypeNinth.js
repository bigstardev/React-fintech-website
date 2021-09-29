import React from "react";

import {Container, Col , Row} from "reactstrap";
import mockup from "../../../img/Safari.png"
import mockupDark from "../../../img/Safari-dark.png"
import Aside from "./Aside/Aside";
import backgroundImage from "../../../img/example.png";
import { Fade } from "react-awesome-reveal";
import classes from "./CTALayoutsTypeNinth.module.css"

function CTALayoutsTypeNinth (props) {

    return (
        <React.Fragment>
            <section className={`${classes.cta} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>

                <Container fluid={true} className={`container-fluid ${classes.containerFluid}`} style={{backgroundImage: `url(${backgroundImage})`}}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row>
                                <Col className="col-12">
                                    <div className={classes.wrapper}>
                                        <Row>
                                            <Col lg={{ size: 5, offset: 1 }} md={{ size: 6, offset: 1 }} className={classes.leftColumn}>
                                                <Aside
                                                    dark={props.dark ? true : false}
                                                />
                                            </Col>
                                            <Col lg={{ size: 5, offset: 1 }} md={{ size: 4, offset: 1 }} className={classes.rightColumn}>
                                                <div className="position-relative">
                                                    {props.dark == true ?
                                                        <>
                                                            <Fade right triggerOnce={true}>
                                                                <img
                                                                    className="position-absolute"
                                                                    src={mockupDark}
                                                                    width={1100}
                                                                    height={685}
                                                                    alt=""
                                                                />
                                                            </Fade>
                                                        </>
                                                        :
                                                        <>
                                                            <Fade right triggerOnce={true}>
                                                                <img
                                                                    className="position-absolute"
                                                                    src={mockup}
                                                                    width={1100}
                                                                    height={685}
                                                                    alt=""
                                                                />
                                                            </Fade>
                                                        </>
                                                    }
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    )
}
export default CTALayoutsTypeNinth