import React from "react";

import Form from "./SimpleForm/SimpleForm";

import {Container, Col , Row} from "reactstrap";
import {Google, Twitter} from "../../../components/Icons/Icons";

import ButtonSocial from "../../../components/Button-Social/ButtonSocial";
import classes from "./FormsLayoutsTypeTwelfth.module.css"
import {Fade} from "react-awesome-reveal";


function FormsLayoutsTypeTwelfth (props) {


    return (
        <React.Fragment>
            <section className={`section ${classes.form} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>

                <div className={classes.gridWrapper}>
                    <Container>

                        <Row >
                           
                            <Col lg={{ size: 5}} md={{ size: 7}} className="mx-auto">
                                <Fade triggerOnce={true}>
                                    <Row>
                                        <Col className="col-12 d-flex justify-content-between align-items-center flex-wrap">
                                            <h2>Create an account</h2>
                                            <a href="#" className={`text-right ${classes.loginLink}`}>Sign in</a>
                                        </Col>
                                        <Col className={`col-12 ${classes.formColumn}`}>
                                            <Form
                                                dark={props.dark ? true : false}
                                            />
                                        </Col>
                                        <Col className="col-12">
                                            <p className={`${classes.smallTextCustom} text-center`}>Or sign up with</p>

                                            <div className={`${classes.links} d-flex`}>
                                                <ButtonSocial
                                                    link={true}
                                                    href={"#"}
                                                    classes={"primary large outline w-100 p-0"}
                                                    value={"With Twitter"}
                                                    icon={<Twitter fill="#345DEE"/>}
                                                />

                                                <ButtonSocial
                                                    link={true}
                                                    href={"#"}
                                                    classes={"primary large outline w-100 p-0"}
                                                    value={"With Google"}
                                                    icon={<Google fill="#345DEE"/>}
                                                />
                                            </div>
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
export default FormsLayoutsTypeTwelfth