import React, {Component} from "react";

import {Container, Col , Row} from "reactstrap";

import {Google, LinkedIn, Twitter, AppLogo} from "../../../components/Icons/Icons";
import Socials from "../../../components/Socials/Socials";
import Divider from "../../../components/Divider/Divider";
import SimpleForm from "./SimpleForm/SimpleForm";
import classes from "./FootersLayoutsTypeThird.module.css"
import {Nav, Navbar} from "react-bootstrap";
import {Fade} from "react-awesome-reveal";


function FootersLayoutsTypeThird (props) {

    return (
        <React.Fragment>
            <section className={`section  ${classes.footer} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col lg="6" className={classes.leftColumn}>
                                <Navbar expand="lg" className={`p-0`}>
                                    <Navbar.Brand href="#home" className={classes.navbarBrand}>
                                        <Fade top triggerOnce={true}>
                                            <AppLogo/>
                                        </Fade>
                                    </Navbar.Brand>

                                    <Nav className={classes.navbarNav}>
                                        <Fade top delay={50} triggerOnce={true}>
                                            <Nav.Link href="#about" className={classes.navbarLink}>About</Nav.Link>
                                            <Nav.Link href="#work" className={classes.navbarLink}>Work Process</Nav.Link>
                                            <Nav.Link href="#services" className={classes.navbarLink}>Services</Nav.Link>
                                            <Nav.Link href="#contacts" className={classes.navbarLink}>Contacts</Nav.Link>
                                        </Fade>
                                    </Nav>
                                </Navbar>
                            </Col>

                            <Col lg={{ size: 5, offset: 1 }} className={classes.rightColumn}>
                                <Fade top delay={100} triggerOnce={true}>
                                    <SimpleForm
                                        dark={props.dark ? true : false}
                                        classes="big"
                                    />
                                </Fade>
                            </Col>
                        </Row>

                        <Row className={classes.dividerRow}>
                            <Col>
                                <Fade top delay={150} triggerOnce={true}>
                                    <Divider/>
                                </Fade>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-auto">

                                <Fade top delay={200} triggerOnce={true}>
                                    <p className={classes.copyright}>Copyright © 2015-2019 craftwork.design</p>
                                </Fade>
                            </Col>
                            <Col lg="3" md="3" sm="4" className={`ml-auto d-flex align-items-center  ${classes.socials}`}>
                                <Fade top delay={250} triggerOnce={true}>
                                    <Socials dark={props.dark ? true : false}>
                                        <a href="#/some-link">
                                            <Twitter/>
                                        </a>
                                        <a href="#/some-link">
                                            <LinkedIn/>
                                        </a>
                                        <a href="#/some-link">
                                            <Google/>
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
export default FootersLayoutsTypeThird
