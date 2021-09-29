import React from "react";

import {Container, Col , Row} from "reactstrap";
import {IconPlay} from "../../../components/Icons/Icons";
import TextButton from "../../../components/Text-Button/Text-Button";
import Button from "../../../components/Button/Button";
import VerticalModal from "./VerticalModal/VerticalModal";

import mockup from "../../../img/Safari.png";
import mockupDark from "../../../img/Safari-dark.png";
import classes from "./HeroLayoutsTypeThird.module.css"
import { Fade } from "react-awesome-reveal";
import Header from "./Header/Header";
const title = "The fast & visual way to understand your users";
const description = "Create screens directly in Method or add your images from Sketch or Figma."

function HeroLayoutsTypeThird(props) {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <React.Fragment>
            <section className={`${classes.hero} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.wrapper}>
                    <Container >
                        <Fade top triggerOnce={true}>
                            <Header
                                dark={props.dark ? true : false}
                            />
                        </Fade>
                    </Container>

                    <Container>
                        <Row className={classes.contentRow}>
                            <Col lg="12" md="12" className="position-relative">
                                <Row>
                                    <Fade right delay={50} triggerOnce={true}>
                                    <Col>
                                        {props.dark === true ?
                                            <>
                                                <img src={mockupDark}
                                                     alt=""
                                                     className={`${classes.secondImage} position-absolute`}
                                                     width="1202"
                                                     height="739"
                                                />

                                                <img
                                                    src={mockupDark}
                                                    alt=""
                                                    className={`${classes.firstImage} position-absolute`}
                                                    width="1202"
                                                    height="739"
                                                />
                                            </>
                                            :
                                            <>
                                                <img src={mockup}
                                                     alt=""
                                                     className={`${classes.secondImage} position-absolute`}
                                                     width="1202"
                                                     height="739"
                                                />
                                                <img
                                                    src={mockup}
                                                    alt=""
                                                    className={`${classes.firstImage} position-absolute`}
                                                    width="1202"
                                                    height="739"
                                                />
                                            </>

                                        }
                                    </Col>
                                    </Fade>
                                </Row>
                            </Col>


                            <Col lg={7} md={7} className={classes.rightColumn}>
                                <Fade top delay={50} triggerOnce={true}>
                                    <h1 >{title}</h1>
                                </Fade>
                                <Fade top delay={100} triggerOnce={true}>
                                    <p className={`normal-text ${classes.description}`}>{description}</p>
                                </Fade>

                                <div className={classes.buttonElement}>
                                    <Fade top delay={150} triggerOnce={true}>
                                        <Button
                                            link={true}
                                            href={"#"}
                                            classes={"primary large simple"}
                                            value={"Get Started"}
                                        />
                                    </Fade>
                                </div>

                                <div className={classes.socials}>
                                    <Fade top delay={200} triggerOnce={true}>
                                        <TextButton
                                            text={"Play Video"}
                                            onClick={() => setModalShow(true)}
                                        >
                                            <IconPlay/>
                                        </TextButton>
                                    </Fade>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <VerticalModal
                    dark={props.dark ? true : false}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </section>
        </React.Fragment>
    )
}
export default HeroLayoutsTypeThird