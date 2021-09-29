import React from "react";

import {Container, Col , Row} from "reactstrap";
import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import Slide from "./Slide/Slide";
import Button from "../../../components/Button/Button";
import {Flash, Google, LinkedIn, Twitter} from "../../../components/Icons/Icons";
import Socials from "../../../components/Socials/Socials";
import placeholder from "../../../img/IphoneXS.png";
import placeholderDark from "../../../img/IphoneXS-dark.png";
import classes from "./HeroLayoutsTypeSecond.module.css"
import { Fade } from "react-awesome-reveal";

const title = "Invite friends & earn rewards";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";

function HeroLayoutsTypeSecond (props) {


        return (
            <React.Fragment>
                <section className={`${classes.hero} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>

                    <Container>
                        <div className={classes.gridWrapper}>

                                    <Header
                                        dark={props.dark ? true : false}
                                    />
                        </div>
                    </Container>

                    <div className={classes.gridWrapper}>
                        <Container >
                            <Row>
                                <Col className={classes.slider}>
                                    <Slider>
                                        <Slide>
                                            <Row>
                                                <Col lg={{ size: 6}} md={{ size: 6}} sm={6} className={`left-column d-flex flex-column`}>
                                                        <h1 className="text-left">{title}</h1>
                                                        <p className={`normal-text description text-left`}>{description}</p>
                                                        <Button
                                                            link={true}
                                                            href={"#"}
                                                            classes={"primary large left-icon"}
                                                            value={"Get Started"}
                                                            leftIcon={<Flash fill="#ffffff"/>}
                                                        />

                                                    <div className="socials">
                                                            <Socials>
                                                                <a href="#">
                                                                    <Twitter/>
                                                                </a>
                                                                <a href="#">
                                                                    <LinkedIn/>
                                                                </a>
                                                                <a href="#">
                                                                    <Google/>
                                                                </a>
                                                            </Socials>
                                                    </div>
                                                </Col>
                                                <Col lg={{ size: 4, offset: 1}} md={{ size: 5}} sm={6} className="right-column">
                                                        {(props.dark == true) ?
                                                            <img src={placeholderDark} className={"w-100"}/> :
                                                            <img src={placeholder} className={"w-100"}/>
                                                        }
                                                </Col>
                                            </Row>
                                        </Slide>
                                        <Slide>
                                            <Row>
                                                <Col lg={{ size: 6}} md={{ size: 6}} sm={6} className={`left-column d-flex flex-column`}>
                                                        <h1 className="text-left">{title}</h1>
                                                        <p className={`normal-text description text-left`}>{description}</p>
                                                        <Button
                                                            link={true}
                                                            href={"#"}
                                                            classes={"primary large left-icon"}
                                                            value={"Get Started"}
                                                            leftIcon={<Flash fill="#ffffff"/>}
                                                        />

                                                    <div className="socials">
                                                            <Socials>
                                                                <a href="#">
                                                                    <Twitter/>
                                                                </a>
                                                                <a href="#">
                                                                    <LinkedIn/>
                                                                </a>
                                                                <a href="#">
                                                                    <Google/>
                                                                </a>
                                                            </Socials>
                                                    </div>
                                                </Col>
                                                <Col lg={{ size: 4, offset: 1}} md={{ size: 5}} sm={6} className="right-column">
                                                        {(props.dark == true) ?
                                                            <img src={placeholderDark} className={"w-100"}/> :
                                                            <img src={placeholder} className={"w-100"}/>
                                                        }

                                                </Col>
                                            </Row>
                                        </Slide>
                                        <Slide>
                                            <Row>
                                                <Col lg={{ size: 6}} md={{ size: 6}} sm={6} className={`left-column d-flex flex-column`}>
                                                        <h1 className="text-left">{title}</h1>
                                                        <p className={`normal-text description text-left`}>{description}</p>
                                                        <Button
                                                            link={true}
                                                            href={"#"}
                                                            classes={"secondary large left-icon"}
                                                            value={"Get Started"}
                                                            leftIcon={<Flash fill="#ffffff"/>}
                                                        />

                                                    <div className="socials">
                                                            <Socials>
                                                                <a href="#">
                                                                    <Twitter/>
                                                                </a>
                                                                <a href="#">
                                                                    <LinkedIn/>
                                                                </a>
                                                                <a href="#">
                                                                    <Google/>
                                                                </a>
                                                            </Socials>
                                                    </div>
                                                </Col>
                                                <Col lg={{ size: 4, offset: 1}} md={{ size: 5}} sm={6} className="right-column">
                                                        {(props.dark == true) ?
                                                            <img src={placeholderDark} className={"w-100"}/> :
                                                            <img src={placeholder} className={"w-100"}/>
                                                        }
                                                </Col>
                                            </Row>
                                        </Slide>
                                    </Slider>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </React.Fragment>
        )

}
export default HeroLayoutsTypeSecond