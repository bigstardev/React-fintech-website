import React from "react";
import Form from "./SimpleForm/SimpleForm";
import firstMockup from "../../../img/IphoneXS.png";
import secondMockup from "../../../img/Safari.png";
import firstMockupDark from "../../../img/IphoneXS-dark.png";
import secondMockupDark from "../../../img/Safari-dark.png";

import {Container, Col , Row} from "reactstrap";
import classes from "./FormsLayoutsTypeSixth.module.css"
import {Fade} from "react-awesome-reveal";


function FormsLayoutsTypeSixth (props) {


    return (
        <React.Fragment>
            <section className={`${classes.form} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <Container fluid="true" className={classes.containerFluid}>
                        <div className={classes.outer}>
                            <Container>
                                <Row >
                                    <Col lg={5} md={7} className={classes.leftColumn}>
                                        <Fade triggerOnce={true}>
                                            <div className={classes.wrapper}>
                                                <Row>
                                                    <Col className={`col-12 d-flex ${classes.headerCol} justify-content-between align-items-center`}>
                                                        <h3>Get Method 3.0 Today</h3>
                                                        <a href="#" className={`text-right ${classes.loginLink}`}>Login</a>
                                                    </Col>
                                                    <Col className={`col-12 ${classes.formColumn}`}>
                                                        <Form
                                                            dark={props.dark ? true : false}
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Fade>
                                    </Col>

                                    <Col lg={7} md={5} className={classes.rightColumn}>
                                            <div className={`${classes.wrapper} ${classes.customWrapper}`}>
                                                <Fade triggerOnce={true}>
                                                <Row>
                                                    <Col className="col-12">
                                                        <h3>Method 3.0</h3>
                                                    </Col>

                                                    <Col className="col-12">
                                                        <Row className={classes.imagesRow}>
                                                            <Col>
                                                                {props.dark == true ?
                                                                    <>
                                                                        <img
                                                                            className={`position-absolute ${classes.firstImage}`}
                                                                            src={firstMockupDark}
                                                                            alt=""
                                                                            width="224"
                                                                            height="448"
                                                                        />
                                                                        <img
                                                                            className={`position-absolute ${classes.secondImage}`}
                                                                            style={{left: "260px", top: "-50px"}}
                                                                            src={secondMockupDark}
                                                                            alt=""
                                                                            width="840"
                                                                            height="518"
                                                                        />
                                                                    </>
                                                                    :
                                                                    <>
                                                                        <img
                                                                            className={`position-absolute ${classes.firstImage}`}
                                                                            src={firstMockup}
                                                                            alt=""
                                                                            width="224"
                                                                            height="448"
                                                                        />
                                                                        <img
                                                                            className={`position-absolute ${classes.secondImage}`}
                                                                            style={{left: "260px", top: "-50px"}}
                                                                            src={secondMockup}
                                                                            alt=""
                                                                            width="840"
                                                                            height="518"
                                                                        />
                                                                    </>
                                                                }
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                </Fade>
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
export default FormsLayoutsTypeSixth