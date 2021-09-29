import React from "react";

import {Container, Col , Row} from "reactstrap";
import classes from "./FormsLayoutsTypeFirst.module.css"
import {Fade} from "react-awesome-reveal";
import Form from "../FormsLayoutsTypeFirst/SimpleForm/SimpleForm";
const title = "Try Method UI Kit For Free";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";
const shortDescription = "Join over 1000 web designers";

function FormsLayoutsTypeFirst (props) {

    return (
        <React.Fragment>
            <section className={`section ${classes.form} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.wrapper}>
                    <Container>
                        <Row>
                            <Col lg={8} md={8} className="mx-auto text-center">
                                <Fade down triggerOnce={true}>
                                    <h1>{title}</h1>
                                </Fade>
                                <Fade down delay={50} triggerOnce={true}>
                                    <p className={`normal-text ${classes.description}`}>{description}</p>
                                </Fade>
                            </Col>
                        </Row>
                        <Row className={classes.formsRow}>
                            <Col lg="12" md="8" className="mx-auto">
                                <Fade down delay={100} triggerOnce={true}>
                                    <Form
                                        dark={props.dark ? true : false}
                                    />
                                </Fade>
                            </Col>
                        </Row>
                        <Row className={classes.textRow}>
                            <Col lg={8} md={8} className="mx-auto text-center">
                                <Fade down delay={150} triggerOnce={true}>
                                    <p className="normal-text ">{shortDescription}</p>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </div>
                </section>
        </React.Fragment>
    )
}
export default FormsLayoutsTypeFirst