import React, {Component} from "react";
import {Container, Col , Row} from "reactstrap";

import {Google, LinkedIn, Twitter, MethodLogotype} from "../../../components/Icons/Icons";
import Socials from "../../../components/Socials/Socials";
import Divider from "../../../components/Divider/Divider";
import classes from "./FootersLayoutsTypeFourth.module.css"
import {Nav, Navbar} from "react-bootstrap";
import {Fade} from "react-awesome-reveal";


function FootersLayoutsTypeFourth (props) {

    return (
        <React.Fragment>
            <section className={`section  ${classes.footer} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col>
                                <Navbar expand="lg" className={`p-0 ${classes.navbar}`}>
                                    <Navbar.Brand href="#home" className={classes.navbarBrand}>
                                        <Fade top triggerOnce={true} >
                                            <MethodLogotype/>
                                        </Fade>
                                    </Navbar.Brand>
                                    <Nav className={`ml-auto ${classes.navbarNav}`}>
                                        <Fade top delay={50} triggerOnce={true}>
                                            <Nav.Link href="#about" className={classes.navLink}>About</Nav.Link>
                                            <Nav.Link href="#work" className={classes.navLink}>Work Process</Nav.Link>
                                            <Nav.Link href="#services" className={classes.navLink}>Services</Nav.Link>
                                            <Nav.Link href="#contacts" className={classes.navLink}>Contacts</Nav.Link>
                                        </Fade>
                                    </Nav>
                                    <div className={`${classes.socials} ml-auto`}>
                                        <Fade top delay={100} triggerOnce={true}>
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
                                    </div>
                                </Navbar>
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
                            <Col className="col-auto mx-auto">
                                <Fade top delay={200} triggerOnce={true}>
                                    <p className={classes.copyright}>Copyright © 2015-2019 craftwork.design</p>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}
export default FootersLayoutsTypeFourth