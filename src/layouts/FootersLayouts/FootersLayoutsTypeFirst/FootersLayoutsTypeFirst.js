import React from "react";

import {Container, Col , Row} from "reactstrap";
import classes from "./FootersLayoutsTypeFirst.module.css"
import {AppLogo, Google, LinkedIn, Twitter} from "../../../components/Icons/Icons";
import SimpleForm from "./SimpleForm/SimpleForm";
import Oval from "../../../components/Frame/Frame";
import Socials from "../../../components/Socials/Socials";
import Divider from "../../../components/Divider/Divider";
import {Fade} from "react-awesome-reveal";

function FootersLayoutsTypeFirst (props) {


    return (
        <React.Fragment>
            <section className={`section  ${classes.footer} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col lg="1" md="1">
                                <Fade top triggerOnce={true}>
                                    <a href="#">
                                        <AppLogo/>
                                    </a>
                                </Fade>
                            </Col>
                            <Col lg={{ size: 8, offset: 3 }} md={{ size: 8, offset: 3 }} className={classes.formColumn}>
                                <Row>
                                    <Col lg="3" md="6" sm="6" xs="6" className={classes.item}>
                                        <Fade top delay={50} triggerOnce={true}>
                                            <header>About</header>
                                            <ul className={classes.companyList}>
                                                <li className={classes.companyItem}>
                                                    <a href="#">Become Affiliate</a>
                                                </li>
                                                <li className={classes.companyItem}>
                                                    <a href="#">Go Unlimited</a>
                                                </li>
                                                <li className={classes.companyItem}>
                                                    <a href="#">Services</a>
                                                </li>
                                            </ul>
                                        </Fade>
                                    </Col>
                                    <Col lg="3" md="6" sm="6" xs="6" className={classes.item}>
                                        <Fade top delay={100} triggerOnce={true}>
                                            <header>Products</header>
                                            <ul className={classes.companyList}>
                                                <li className={classes.companyItem}>
                                                    <a href="#">Design Systems</a>
                                                </li>
                                                <li className={classes.companyItem}>
                                                    <a href="#">Themes & Templates</a>
                                                </li>
                                                <li className={classes.companyItem}>
                                                    <a href="#">Mockups</a>
                                                </li>
                                                <li className={classes.companyItem}>
                                                    <a href="#">Presentations</a>
                                                </li>
                                                <li className={classes.companyItem}>
                                                    <a href="#">Wireframes Kits</a>
                                                </li>
                                                <li className={classes.companyItem}>
                                                    <a href="#">UI Kits</a>
                                                </li>
                                            </ul>
                                        </Fade>
                                    </Col>
                                    <Col lg="3" md="6" sm="6" xs="6" className={classes.item}>
                                        <Fade top delay={150} triggerOnce={true}>
                                            <header>Legals</header>
                                            <ul className={classes.companyList}>
                                                <li className={classes.companyItem}>
                                                    <a href="#">License</a>
                                                </li>
                                                <li className={classes.companyItem}>
                                                    <a href="#">Refund Policy</a>
                                                </li>
                                                <li className={classes.companyItem}>
                                                    <a href="#">About Us</a>
                                                </li>
                                                <li className={classes.companyItem}>
                                                    <a href="#">Contacts</a>
                                                </li>
                                            </ul>
                                        </Fade>
                                    </Col>
                                    <Col lg="3" md="6" sm="6" xs="6" className={classes.item}>
                                        <Fade top delay={200} triggerOnce={true}>
                                            <header>Blog</header>
                                            <ul className={classes.companyList}>
                                                <li className={classes.companyItem}>
                                                    <a href="#">Business Stories</a>
                                                </li>
                                                <li className={classes.companyItem}>
                                                    <a href="#">Digital Store</a>
                                                </li>
                                                <li className={classes.companyItem}>
                                                    <a href="#">Learning</a>
                                                </li>
                                                <li className={classes.companyItem}>
                                                    <a href="#">Social Media</a>
                                                </li>
                                            </ul>
                                        </Fade>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row className={classes.dividerRow}>
                            <Col>
                                <Fade top delay={250} triggerOnce={true}>
                                    <div className={classes.divider}>
                                        <Divider/>
                                    </div>
                                </Fade>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="5" md="7">
                                <Fade top delay={300} triggerOnce={true}>
                                    <SimpleForm
                                        dark={props.dark ? true : false}
                                        classes="big"
                                    />
                                </Fade>
                            </Col>
                            <Col lg="3" md="3" className={`ml-auto ${classes.socials}`}>
                                <Fade top delay={350} triggerOnce={true}>
                                    <Socials dark={props.dark ? true : false}>
                                            <a href="#/some-link">
                                                <Oval variant="normal">
                                                    <Twitter/>
                                                </Oval>
                                            </a>
                                            <a href="#/some-link">
                                                <Oval variant="normal">
                                                    <LinkedIn/>
                                                </Oval>
                                            </a>
                                            <a href="#/some-link">
                                                <Oval variant="normal">
                                                    <Google/>
                                                </Oval>
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
export default FootersLayoutsTypeFirst