import React from "react";


import {Container, Col , Row} from "reactstrap";
import {AppStore} from "../../../components/Icons/Icons";
import {Nav, Navbar} from "react-bootstrap";
import Badge from "../../../components/Badges/Badges";
import classes from "./FootersLayoutsTypeNinth.module.css"
import {Fade} from "react-awesome-reveal";

function FootersLayoutsTypeNinth (props) {

    return (
        <React.Fragment>
            <section className={`section  ${classes.footer} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col className={`col-auto d-flex ${classes.leftColumn}`}>
                                <Navbar expand="lg" className={`p-0 ${classes.navbar}`}>
                                    <Nav className={`ml-auto ${classes.navbarNav}`}>
                                        <Fade top triggerOnce={true}>
                                            <Nav.Link href="#about" className={classes.navLink}>Privacy Policy</Nav.Link>
                                            <Nav.Link href="#work" className={classes.navLink}>License</Nav.Link>
                                            <Nav.Link href="#services" className={classes.navLink}>Refund Policy</Nav.Link>
                                        </Fade>
                                    </Nav>
                                </Navbar>
                            </Col>
                            <Col className={`col-auto ml-auto ${classes.rightColumn}`}>
                                <Fade top delay={50} triggerOnce={true}>
                                    <Badge
                                        store={"app"}
                                    >
                                        <AppStore/>
                                    </Badge>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}
export default FootersLayoutsTypeNinth