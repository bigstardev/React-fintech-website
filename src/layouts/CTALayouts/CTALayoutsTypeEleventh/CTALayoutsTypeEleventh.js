import React from "react";
import classes from "./CTALayoutsTypeEleventh.module.css"

import Button from "../../../components/Button/Button";
import mockup from "../../../img/IphoneXS.png"
import mockupDark from "../../../img/IphoneXS-dark.png"
import {Container, Col , Row} from "reactstrap";
import { Fade } from "react-awesome-reveal";

const title = "All Your Tools In One Connected Inbox";
const strong = "Product of the day";

function CTALayoutsTypeEleventh (props) {

    return (
        <React.Fragment>
            <section className={`section ${classes.cta} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>

                <Container>
                    <Row>
                        <Col lg={8} md={8} className="mx-auto text-center">
                            <Fade top triggerOnce={true}>
                                <strong>{strong}</strong>
                            </Fade>
                            <Fade top delay={50} triggerOnce={true}>
                                <h1 className="title">{title}</h1>
                            </Fade>
                        </Col>
                    </Row>
                    <Row className={classes.buttonRow}>
                        <Col lg={8} md={8} className="mx-auto d-flex justify-content-center">
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
                    <Row className={classes.imagesRow}>
                        <Col lg={8} md={8} className="mx-auto text-center">
                            <div className="position-relative images-wrapper">
                                {props.dark === true ?
                                    <>

                                            <img
                                                className="position-relative"
                                                style={{zIndex: 999 }}
                                                width={350}
                                                height={700}
                                                src={mockupDark}
                                                alt=""
                                            />


                                            <img
                                                className="position-absolute"
                                                style={{left: "50%", marginLeft: "-350px", top: "70px"}}
                                                width={350}
                                                height={700}
                                                src={mockupDark}
                                                alt=""
                                            />


                                            <img
                                                className="position-absolute"
                                                style={{left: "50%", top: "70px"}}
                                                width={350}
                                                height={700}
                                                src={mockupDark}
                                                alt=""
                                            />

                                    </>
                                    :
                                    <>

                                            <img
                                                className="position-relative"
                                                style={{zIndex: 999 }}
                                                width={350}
                                                height={700}
                                                src={mockup}
                                                alt=""
                                            />


                                            <img
                                                className="position-absolute"
                                                style={{left: "50%", marginLeft: "-350px", top: "70px"}}
                                                width={350}
                                                height={700}
                                                src={mockup}
                                                alt=""
                                            />


                                            <img
                                                className="position-absolute"
                                                style={{left: "50%", top: "70px"}}
                                                width={350}
                                                height={700}
                                                src={mockup}
                                                alt=""
                                            />
                                        
                                    </>
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}
export default CTALayoutsTypeEleventh
