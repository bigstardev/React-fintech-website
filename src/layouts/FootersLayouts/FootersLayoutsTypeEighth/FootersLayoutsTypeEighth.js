import React, {Component} from "react";
import {Container, Col , Row} from "reactstrap";

import {Google, LinkedIn, Twitter, AppLogo} from "../../../components/Icons/Icons";
import Socials from "../../../components/Socials/Socials";
import Divider from "../../../components/Divider/Divider";
import {Nav, Navbar} from "react-bootstrap";
import classes from "./FootersLayoutsTypeEighth.module.css"
import {Fade} from "react-awesome-reveal";

function FootersLayoutsTypeEighth (props) {

    return (
        <React.Fragment>
            <section className={`section  ${classes.footer} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row className={classes.headerRow}>
                            <Col>
                                <Navbar expand="lg" className="p-0 position-relative">
                                    <Nav className={classes.navbarNav}>
                                        <Fade top triggerOnce={true}>
                                            <Nav.Link href="#about" className={classes.navLink}>About</Nav.Link>
                                            <Nav.Link href="#contacts" className={classes.navLink}>Contacts</Nav.Link>
                                        </Fade>
                                    </Nav>
                                    <Navbar.Brand
                                        style={{left: "50%", marginLeft: "-25px"}}
                                        className={`${classes.navbarBrand}`}
                                        href="#home">
                                        <Fade top delay={50} triggerOnce={true}>
                                            <AppLogo/>
                                        </Fade>
                                    </Navbar.Brand>
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
                        <Row className={classes.bottomRow}>
                            <Col className={`col-auto ${classes.col}`}>
                                <Fade top delay={200} triggerOnce={true}>
                                    <p className={classes.copyright}>Copyright © 2015-2019 craftwork.design</p>
                                </Fade>
                            </Col>
                            <Col className={`col-auto ml-auto ${classes.col}`}>
                                <Navbar expand="lg" className="p-0">
                                    <Nav className={classes.navbarNav}>
                                        <Fade top delay={250} triggerOnce={true}>
                                            <Nav.Link href="#work-process" className={classes.navLink}>Work Process</Nav.Link>
                                            <Nav.Link href="#services" className={classes.navLink}>Services</Nav.Link>
                                        </Fade>
                                    </Nav>
                                </Navbar>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}
export default FootersLayoutsTypeEighth
