import React from "react";
import Form from "./SimpleForm/SimpleForm";
import Aside from "./Aside/Aside";

import {Container, Col , Row} from "reactstrap";
import {Google, Twitter} from "../../../components/Icons/Icons";
import ButtonSocial from "../../../components/Button-Social/ButtonSocial";
import Logos from "./Logos/Logos";
import classes from "./FormsLayoutsTypeEighth.module.css"
import {Fade} from "react-awesome-reveal";

function FormsLayoutsTypeEighth (props) {

    return (
        <React.Fragment>
            <section className={`${classes.form} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <Container fluid="true" className={classes.containerFluid}>
                    <div className={classes.outer}>
                        <Container>
                            <Row >
                                <Col lg="5" md="5" className={classes.leftColumn}>
                                        <div className={classes.customWrapper} style={{height: "100%"}}>
                                            <Fade triggerOnce={true}>
                                            <Aside
                                                title="Make more time for the work that matters most"
                                                subtitle="Product of the Year"
                                                description="Create screens directly in Method or add your images from Sketch or Figma."
                                            >
                                                <Logos
                                                    dark={props.dark ? true : false}
                                                />
                                            </Aside>
                                            </Fade>
                                        </div>
                                </Col>

                                <Col lg={{ size: 6, offset: 1 }} md={{ size: 7}} className={classes.rightColumn}>
                                    <Fade triggerOnce={true}>
                                        <div className={classes.wrapper}>
                                            <Row>
                                                <Col className={`col-12 ${classes.headerCol} d-flex justify-content-between align-items-center`}>
                                                    <h2>Get Method 3.0 Today</h2>
                                                    <a href="#" className={`text-right ${classes.loginLink}`}>Login</a>
                                                </Col>
                                                <Col className={`col-12 ${classes.formColumn}`}>
                                                    <Form
                                                        dark={props.dark ? true : false}
                                                    />
                                                </Col>
                                                <Col className="col-12">
                                                    <p className={`${classes.smallTextCustom } text-center`}>Or sign up with</p>
                                                    <div className={classes.linksRow}>
                                                          <ButtonSocial
                                                              link={true}
                                                              href={"#"}
                                                              classes={"primary large outline w-100"}
                                                              value={"Twitter"}
                                                              icon={<Twitter fill="#345DEE"/>}
                                                            />

                                                          <ButtonSocial
                                                              link={true}
                                                              href={"#"}
                                                              classes={"primary  large outline w-100"}
                                                              value={"Google"}
                                                              icon={<Google fill="#345DEE"/>}
                                                          />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Fade>
                                </Col>
                                <Col className={classes.hidden}>
                                    <Logos
                                        dark={props.dark ? true : false}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    )
}
export default FormsLayoutsTypeEighth
