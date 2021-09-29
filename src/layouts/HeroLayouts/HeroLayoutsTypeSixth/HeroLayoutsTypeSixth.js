import React, {Component} from "react";

import {Container, Col , Row} from "reactstrap";
import {ArrowLeft, ArrowRight, SimpleLeftArrow} from "../../../components/Icons/Icons";
import Button from "../../../components/Button/Button";

import firstMockup from "../../../img/IphoneXS.png";
import secondMockup from "../../../img/IpadPro.png";
import firstMockupDark from "../../../img/IphoneXS-dark.png";
import secondMockupDark from "../../../img/IpadPro-dark.png";

import Socials from "./Socials/Socials";
import Header from "./Header/Header";
import classes from "./HeroLayoutsTypeSixth.module.css"
import { Fade } from "react-awesome-reveal";

const titleText = 'Get the right products to market faster';
const descriptionText = 'Create screens directly in Method or add your images from Sketch or Figma.'
const baseLinkText = 'Get Started';

function HeroLayoutsTypeSixth(props) {


    return (
        <React.Fragment>
            <section className={`${classes.hero} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>

                <div className={classes.gridWrapper}>
                    <Container>
                        <Fade top triggerOnce={true}>
                            <Header
                                dark={props.dark ? true : false}
                            />
                        </Fade>
                    </Container>
                    <Container>
                        <Row className={classes.contentRow}>
                            <Col lg="12" md="12" className="position-relative">

                                <Fade right delay={50} triggerOnce={true}>
                                    {props.dark === true ?
                                        <>
                                            <img src={firstMockupDark}
                                                 style={{top: "80px" , right: "230px", zIndex: "999"}}
                                                 alt=""
                                                 className={`${classes.firstImage} position-absolute`}
                                                 width="350"
                                                 height="697"
                                            />
                                            <img
                                                style={{top: "-80px", right: "-800px"}}
                                                src={secondMockupDark}
                                                alt=""
                                                className={`${classes.secondImage} position-absolute`}
                                                width="1286"
                                                height="984"
                                            />
                                        </>
                                        :
                                        <>

                                            <img src={firstMockup }
                                                 style={{top: "80px" , right: "230px", zIndex: "999"}}
                                                 alt=""
                                                 className={`${classes.firstImage} position-absolute`}
                                                 width="350"
                                                 height="697"
                                            />
                                            <img
                                                style={{top: "-80px", right: "-800px"}}
                                                src={secondMockup }
                                                alt=""
                                                className={`${classes.secondImage} position-absolute`}
                                                width="1286"
                                                height="984"
                                            />
                                        </>
                                    }
                                </Fade>
                            </Col>

                            <Col lg="5" md="6" className={classes.rightColumn}>
                                <Fade top delay={50} triggerOnce={true}>
                                    <h1>{titleText}</h1>
                                </Fade>
                                <Fade top delay={100} triggerOnce={true}>
                                    <p className={`normal-text ${classes.description}`}>{descriptionText}</p>
                                </Fade>
                                <Fade top delay={150} triggerOnce={true}>
                                    <div className={classes.buttonElement}>
                                        <Button
                                            link={true}
                                            href={"#"}
                                            classes={"secondary large right-icon"}
                                            value={baseLinkText}
                                            rightIcon={<ArrowRight fill="#ffffff"/>}
                                        />
                                    </div>
                                </Fade>

                                <div className={classes.socials}>
                                    <Fade top delay={200} triggerOnce={true}>
                                        <Socials/>
                                    </Fade>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </section>
        </React.Fragment>
    )
}
export default HeroLayoutsTypeSixth