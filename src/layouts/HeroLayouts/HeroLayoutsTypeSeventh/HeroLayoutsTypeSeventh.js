import React from "react";

import {Container, Col , Row} from "reactstrap";
import {IconPlay} from "../../../components/Icons/Icons";
import TextButton from "../../../components/Text-Button/Text-Button";
import Socials from "./Socials/Socials";
import Forms from "./Form/Form";
import Header from "./Header/Header";
import VerticalModal from "./VerticalModal/VerticalModal";
import classes from "./HeroLayoutsTypeSeventh.module.css"
import { Fade } from "react-awesome-reveal";

const titleText = 'Look like an expert right from the start';
const descriptionText = 'By signing up you confirm that you\'re agree with our Terms and Conditions of Use. ';
const strongText = 'Website Design';
const textLinkText = 'Play Video';


function HeroLayoutsTypeSeventh(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <React.Fragment>
            <section className={`${classes.hero} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <Container className={`position-relative ${classes.positionRelative}`} style={{zIndex: 999}}>
                        <Row>
                            <Col className={`p-0 position-absolute ${classes.positionAbsolute} ${classes.navWrapper}`}>
                                <div className={classes.outer}>
                                    <Fade down delay={50} triggerOnce={true}>
                                        <Header
                                            dark={props.dark ? true : false}
                                        />
                                    </Fade>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid={true} className={`p-0 position-relative ${classes.positionRelative}`}>
                        <Container>
                            <Row className={classes.contentRow}>
                                <Col lg="5" md="5" className={classes.leftColumn}>
                                    <div className={`position-relative ${classes.positionRelative}`}>
                                        <div className={`position-absolute ${classes.positionAbsolute}`}>

                                        </div>
                                    </div>
                                </Col>

                                    <Col lg="7" md="7" className={classes.rightСolumn}>
                                        <div className={classes.outer}>
                                            <Fade down delay={50} triggerOnce={true}>
                                                <strong style={{display: 'block'}}>{strongText}</strong>
                                            </Fade>
                                            <Fade down delay={100} triggerOnce={true}>
                                                <h1>{titleText}</h1>
                                            </Fade>
                                            <Fade down delay={150} triggerOnce={true}>
                                                <div className={classes.form}>
                                                    <Forms
                                                        dark={props.dark ? true : false}
                                                    />
                                                </div>
                                            </Fade>

                                            <Fade down delay={200} triggerOnce={true}>
                                                <p className={`normal-text ${classes.description}`}>{descriptionText}</p>
                                            </Fade>

                                            <Row className={classes.bottomSection}>
                                                <Col lg="6" md="6" sm="6" xs="6">
                                                    <Fade top delay={250} triggerOnce={true}>
                                                        <TextButton
                                                            text={textLinkText}
                                                            onClick={() => setModalShow(true)}
                                                        >
                                                            <IconPlay/>
                                                        </TextButton>
                                                    </Fade>

                                                </Col>
                                                <Col lg="6" md="6" sm="6" xs="12" className={classes.socials}>
                                                    <Fade top delay={300} triggerOnce={true}>
                                                        <Socials/>
                                                    </Fade>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                            </Row>
                        </Container>
                    </Container>
            </section>

            <VerticalModal
                dark={props.dark ? true : false}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </React.Fragment>
    )
}
export default HeroLayoutsTypeSeventh