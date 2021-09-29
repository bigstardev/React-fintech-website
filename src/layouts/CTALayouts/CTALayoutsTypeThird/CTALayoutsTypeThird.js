import React from "react";
import classes from "./CTALayoutsTypeThird.module.css"

import {Container, Col , Row} from "reactstrap";
import mockup from "../../../img/Safari.png"
import mockupDark from "../../../img/Safari-dark.png"
import Aside from "./Aside/Aside";
import { Fade } from "react-awesome-reveal";

function  CTALayoutsTypeThird (props)  {

    return (
            <React.Fragment>
                <section className={`section  ${classes.cta} ${(props.dark) ? 'dark' : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row>
                                <Col lg="6" md="7" className={classes.leftColumn}>
                                    <Aside
                                        dark={props.dark ? true : false}
                                    />
                                </Col>

                                <Col lg={{ size: 5, offset: 1 }} md={{ size: 4, offset: 1 }} className={classes.rightColumn}>
                                    <Fade right triggerOnce={true}>
                                                <img
                                                    src={ props.dark == true ? mockupDark : mockup}
                                                    width={1100}
                                                    height={685}
                                                    alt=""
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
export default CTALayoutsTypeThird