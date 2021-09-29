import React from "react";

import Form from "./SimpleForm/SimpleForm";
import Aside from "./Aside/Aside";

import {Container, Col , Row} from "reactstrap";
import {Google, Twitter} from "../../../components/Icons/Icons";

import ButtonSocial from "../../../components/Button-Social/ButtonSocial";
import Logos from "./Logos/Logos";
import classes from "./FormsLayoutsTypeSecond.module.css"
import {Fade} from "react-awesome-reveal";

const features = ['30 Non-Commercial Site', 'Custom Branding', '100GB System Storage', 'Ticket Support']

function FormsLayoutsTypeSecond (props) {


    return (
        <React.Fragment>
            <section className={`section ${classes.form} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>

                <div className={classes.gridWrapper}>
                    <Container>

                        <Row >
                            <Col lg={{ size: 4, offset: 1 }} md={{ size: 5}}>
                                <Fade triggerOnce={true}>
                                    <Aside
                                        title="7 days free trial"
                                        subtitle="Starter"
                                        description="Go beyond email and customize your workflow"
                                        array={features}
                                        dark={props.dark ? true : false}
                                    >
                                        <Logos/>
                                    </Aside>
                                </Fade>
                            </Col>

                            <Col lg={{ size: 5, offset: 1 }} md={{ size: 7}} className={classes.rightColumn}>
                                <Fade triggerOnce={true}>
                                    <Row>
                                        <Col className="col-12 d-flex justify-content-between align-items-center">
                                            <h2>Create an account</h2>
                                            <a href="#" className={`text-right ${classes.loginLink}`}>Login</a>
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
export default FormsLayoutsTypeSecond