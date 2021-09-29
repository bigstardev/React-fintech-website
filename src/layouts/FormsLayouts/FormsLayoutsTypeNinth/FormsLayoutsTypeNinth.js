import React from "react";

import Form from "./SimpleForm/SimpleForm";

import {Container, Col , Row} from "reactstrap";
import Oval from "../../../components/Frame/Frame";
import {Google, LinkedIn, Twitter} from "../../../components/Icons/Icons";
import Socials from "../../../components/Socials/Socials";
import classes from "./FormsLayoutsTypeNinth.module.css"
import {Fade} from "react-awesome-reveal";

const title = "Subscribe To Our Newsletter";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";

function FormsLayoutsTypeNinth (props) {


    return (
        <React.Fragment>
            <section className={`section ${classes.form} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.wrapper}>
                    <Container>
                        <Row>
                            <Col lg={8} md={8} className="mx-auto text-center">
                                <Fade down triggerOnce={true}>
                                    <h1 className={`title ${classes.title}`}>{title}</h1>
                                </Fade>
                                <Fade down delay={50} triggerOnce={true}>
                                    <p className={`normal-text ${classes.description}`}>{description}</p>
                                </Fade>
                            </Col>
                        </Row>
                        <Row className={classes.formsRow}>
                            <Col className="col-12">
                                <Fade down delay={100} triggerOnce={true}>
                                    <Form
                                        dark={props.dark ? true : false}
                                    />
                                </Fade>
                            </Col>
                        </Row>
                        <Row className={classes.linksRow}>
                            <Col lg={8} md={8} className="mx-auto d-flex justify-content-center">
                                <Fade down delay={150} triggerOnce={true}>
                                    <Socials
                                        dark={props.dark ? true : false}
                                    >
                                        <a href="#/some-link">
                                            <Oval variant="normal">
                                                <Twitter/>
                                            </Oval>
                                        </a>
                                        <a href="#/some-link">
                                            <Oval variant="normal">
                                                <LinkedIn/>
                                            </Oval>
                                        </a>
                                        <a href="#/some-link">
                                            <Oval variant="normal">
                                                <Google/>
                                            </Oval>
                                        </a>
                                    </Socials>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}
export default FormsLayoutsTypeNinth