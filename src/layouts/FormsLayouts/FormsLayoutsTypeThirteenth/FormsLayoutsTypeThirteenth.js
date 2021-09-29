import React from "react";

import Form from "./SimpleForm/SimpleForm";
import { Container, Col, Row } from "reactstrap";
import { Google, Twitter } from "../../../components/Icons/Icons";

import ButtonSocial from "../../../components/Button-Social/ButtonSocial";
import classes from "./FormsLayoutsTypeThirteenth.module.css"
import { Fade } from "react-awesome-reveal";

const title = "Restore password";


function FormsLayoutsTypeThirteenth(props) {

    return (
        <React.Fragment>
            <section className={`section ${classes.form} ${(props.dark) ? `dark ${classes.dark}` : ''}`}>

                <div className={classes.gridWrapper}>
                    <Container>

                        <Row >

                            <Col lg={{ size: 5 }} md={{ size: 7 }} className="mx-auto">
                                <Fade triggerOnce={true}>
                                    <Row>
                                        <Col className="col-12 d-flex justify-content-between align-items-center flex-wrap">
                                            <h2>{title}</h2>
                                            <a href="#" className={`text-right ${classes.loginLink}`}>Sign in</a>
                                        </Col>
                                        <Col className={`col-12 ${classes.formColumn}`}>
                                            <Form
                                                dark={props.dark ? true : false}
                                            />
                                        </Col>
                                    </Row>
                                </Fade>
                            </Col>

                        </Row>
                    </Container>
                </div>

            </section>
        </React.Fragment>
    )
}
export default FormsLayoutsTypeThirteenth