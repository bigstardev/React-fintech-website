import React from "react";

import {Container, Col , Row} from "reactstrap";

import {MethodLogotype, Google, LinkedIn, Twitter} from "../../../components/Icons/Icons";
import Socials from "../../../components/Socials/Socials";
import Divider from "../../../components/Divider/Divider";
import Button from "../../../components/Button/Button";
import classes from "./FootersLayoutsTypeSecond.module.css"
import {Fade} from "react-awesome-reveal";

const description = "High-quality digital resources which make your design workflow faster and easier";

function FootersLayoutsTypeSecond (props) {

    return (
        <React.Fragment>
            <section className={`section  ${classes.footer} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col lg="3" md="4">
                                <Fade top triggerOnce={true}>
                                    <a href="#" className={classes.logotype}>
                                        <MethodLogotype/>
                                    </a>
                                </Fade>
                                <Fade top delay={50} triggerOnce={true}>
                                    <p className={classes.description}>{description}</p>
                                </Fade>
                                <Fade top delay={100} triggerOnce={true}>
                                    <Button
                                        type={"submit"}
                                        classes={`primary small simple ${classes.button}`}
                                        value={"Ask Question"}
                                    />
                                </Fade>
                            </Col>
                            <Col lg={{ size: 7, offset: 2 }} md={{ size: 7, offset: 1 }} className={classes.rightColumn}>
                                <Row>
                                    <Col lg="4" md="6" sm="5" xs="6" className={classes.item}>
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
                                            </ul>
                                        </Fade>
                                    </Col>
                                    <Col lg="3" md="6" sm="4" xs="6" className={classes.item}>
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
                                    <Col lg="5" md="8" className={classes.item}>
                                        <Fade top delay={200} triggerOnce={true}>
                                            <header>Contacts</header>
                                            <div className={classes.content}>
                                                <p className={classes.shortDescription}>Fell free get in touch with us via phone or send us a message</p>
                                                <a href="tel:+12345678910" className={classes.boldLink}>+1 234 567 89 10</a>
                                                <a href="mailto:denis@craftwork.design" className={classes.boldLink}>denis@craftwork.design</a>
                                            </div>
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
                            <Col className="col-auto">
                                <Fade top delay={300} triggerOnce={true}>
                                    <p className={classes.copyright}>Copyright © 2015-2019 craftwork.design</p>
                                </Fade>
                            </Col>
                            <Col lg="3" md="3" sm="4" className={`ml-auto d-flex align-items-center ${classes.socials}`}>
                                <Fade top delay={350} triggerOnce={true}>
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
export default FootersLayoutsTypeSecond
