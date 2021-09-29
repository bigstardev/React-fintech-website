import React, {Component} from "react";

import {Container, Col , Row} from "reactstrap";
import {AppLogo} from "../../../components/Icons/Icons";
import SimpleForm from "./SimpleForm/SimpleForm";
import {Nav, Navbar} from "react-bootstrap";
import classes from "./FootersLayoutsTypeSixth.module.css"
import {Fade} from "react-awesome-reveal";

function FootersLayoutsTypeSixth (props) {

    return (
        <React.Fragment>
            <section className={`section  ${classes.footer} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col lg="6" className={classes.leftColumn}>
                                <Navbar expand="lg" className="p-0">
                                    <Navbar.Brand href="#home" className={classes.navbarBrand}>
                                        <Fade top triggerOnce={true}>
                                            <AppLogo/>
                                        </Fade>
                                    </Navbar.Brand>
                                    <Nav className={classes.navbarNav}>
                                        <Fade top delay={50} triggerOnce={true}>
                                            <Nav.Link href="#about" className={classes.navLink}>About</Nav.Link>
                                            <Nav.Link href="#work" className={classes.navLink}>Work Process</Nav.Link>
                                            <Nav.Link href="#services" className={classes.navLink}>Services</Nav.Link>
                                            <Nav.Link href="#contacts" className={classes.navLink}>Contacts</Nav.Link>
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

                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}
export default FootersLayoutsTypeSixth