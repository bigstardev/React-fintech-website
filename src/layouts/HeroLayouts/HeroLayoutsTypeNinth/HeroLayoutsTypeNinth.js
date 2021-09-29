import React, {Component} from "react";

import {Container, Col , Row} from "reactstrap";
import {IconPlay} from "../../../components/Icons/Icons";
import TextButton from "../../../components/Text-Button/Text-Button";

import placeholder from '../../../img/placeholder.png';
import placeholderDark from '../../../img/placeholder-dark.png';

import Forms from "./Form/Form";
import Header from "./Header/Header";
import VerticalModal from "./VerticalModal/VerticalModal";
import Socials from "./Socials/Socials";
import classes from "./HeroLayoutsTypeNinth.module.css"
import { Fade } from "react-awesome-reveal";

const titleText = 'Make more time for the work that matters most';
const descriptionText = 'By clicking the button you confirm that you\'re agree with our Terms and Conditions of Use.'
const strongText = 'Method 3.0';
const textLinkText = 'Play Video';

function HeroLayoutsTypeNinth(props) {

    const [modalShow, setModalShow] = React.useState(false);

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
                            <Col lg="6">
                                <Fade top delay={50} triggerOnce={true}>
                                    <strong  style={{display: 'block'}}>{strongText}</strong>
                                </Fade>
                                <Fade top delay={100} triggerOnce={true}>
                                    <h1 >{titleText}</h1>
                                </Fade>
                                <div className={classes.form}>
                                    <Fade top delay={150} triggerOnce={true}>
                                        <Forms dark={props.dark ? true : false}/>
                                    </Fade>
                                </div>
                                <Fade top delay={200} triggerOnce={true}>
                                    <p className={`normal-text ${classes.description}`}>{descriptionText}</p>
                                </Fade>
                            </Col>

                            <Col lg="6" className={classes.leftColumn}>
                                <Fade right delay={50} triggerOnce={true}>
                                    {props.dark === true ?
                                        <img src={placeholderDark} alt=""/>
                                        :
                                        <img src={placeholder} alt=""/>
                                    }
                                </Fade>

                            </Col>

                            <Col className={classes.bottomSection}>
                                <Row>
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
                                    <Col lg="6" md="6" sm="6" xs="12">
                                        <Fade top delay={300} triggerOnce={true}>
                                            <Socials/>
                                        </Fade>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <VerticalModal
                dark={props.dark ? true : false}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </React.Fragment>
    )
}
export default HeroLayoutsTypeNinth