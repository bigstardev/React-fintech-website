import React, {Component} from "react";

import {Google, LinkedIn, Twitter} from "../../../components/Icons/Icons";
import {Container, Col , Row} from "reactstrap";
import Socials from "../../../components/Socials/Socials";
import SimpleForm from "./SimpleForm/SimpleForm";
import Frame from "../../../components/Frame/Frame";
import classes from "./FootersLayoutsTypeTwelfth.module.css"
import {Fade} from "react-awesome-reveal";

const title = "Contact us";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";
const phone = "+1 234 567 89 10";
const email = "denis@craftwork.design";

function FootersLayoutsTypeTwelfth (props) {

    return (
        <React.Fragment>
            <section className={`section ${classes.footer} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col lg={7} md={7} className={classes.leftColumn}>
                                <Fade triggerOnce={true}>
                                <h2>{title}</h2>
                                <p className={classes.description}>{description}</p>
                                <SimpleForm
                                    dark={props.dark ? true : false}
                                />
                                </Fade>
                            </Col>

                            <Col lg={5} md={5} className={classes.rightColumn}>
                                <Fade top triggerOnce={true} delay={50}>
                                    <div className={classes.contacts}>
                                        <div className={classes.item}>
                                            <div className={classes.label}>Phone</div>
                                            <a href={`tel:${phone}`} className={classes.target}>{phone}</a>
                                        </div>
                                        <div className={classes.item}>
                                            <div className={classes.label}>Phone</div>
                                            <a href={`mailto:${email}`} className={classes.target}>{email}</a>
                                        </div>
                                    </div>
                                    <Socials dark={props.dark ? true : false}>
                                        <a href={"./example"}>
                                            <Frame size="48" color="#EFF2F6">
                                                <Twitter />
                                            </Frame>
                                        </a>
                                        <a href={"./example"}>
                                            <Frame size="48" color="#EFF2F6">
                                                <Google  />
                                            </Frame>
                                        </a>
                                        <a href={"./example"}>
                                            <Frame size="48" color="#EFF2F6">
                                                <LinkedIn />
                                            </Frame>
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
export default FootersLayoutsTypeTwelfth
