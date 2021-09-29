import React from "react";
import {Container, Col , Row} from "reactstrap";
import {IconPlay, RightArrow} from "../../../components/Icons/Icons";
import TextButton from "../../../components/Text-Button/Text-Button";
import Oval from "../../../components/Frame/Frame";
import VerticalModal from "./VerticalModal/VerticalModal";

import Divider from "../../../components/Divider/Divider";
import Logos from "./Logos/Logos";
import classes from "./HeroLayoutsTypeFirst.module.css"
import Header from "./Header/Header";
import { Fade } from "react-awesome-reveal";

const titleText = 'Branding. Do you know who you are?';
const descriptionText = 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!'


function HeroLayoutsTypeFirst (props) {

    const [modalShow, setModalShow] = React.useState(false);

        return (
            <React.Fragment>
                <section className={`${classes.hero} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>

                    <div className={classes.gridWrapper}>
                        <Container className={`position-relative ${classes.positionRelative}`}>
                            <Header
                                dark={props.dark ? true : false}
                            />
                        </Container>
                    </div>

                    <Container fluid="true" className={`position-relative ${classes.positionRelative}`}>

                        <div className={classes.gridWrapper}>
                            <Container>
                                <Row>
                                    <Col lg="7" md="7" className={classes.leftColumn}>
                                        <Row>
                                            <Col>
                                                <Fade top triggerOnce={true}>
                                                    <h1>{titleText}</h1>
                                                </Fade>
                                                <Fade top delay={50} triggerOnce={true}>
                                                    <p className={`normal-text ${classes.description}`}>{descriptionText}</p>
                                                </Fade>

                                                <div className={`${classes.buttonsSection} d-flex`}>
                                                    <Fade top delay={100} triggerOnce={true}>
                                                        <TextButton
                                                            text={"Play Video"}
                                                            onClick={() => setModalShow(true)}
                                                        >
                                                            <IconPlay/>
                                                        </TextButton>
                                                    </Fade>

                                                    <Fade top delay={150} triggerOnce={true}>
                                                        <TextButton
                                                            link={"/link"}
                                                            text={"Read More"}>
                                                            <Oval variant="small">
                                                                <RightArrow />
                                                            </Oval>
                                                        </TextButton>
                                                    </Fade>
                                                </div>
                                            </Col>

                                            <Col className={`col-12 ${classes.bottomLevel}`}>
                                                <Fade top delay={200} triggerOnce={true}>
                                                    <Divider/>
                                                </Fade>
                                            </Col>

                                            <Col>
                                                <Fade top delay={250} triggerOnce={true}>
                                                    <Logos
                                                        dark={props.dark ? true : false}
                                                    />
                                                </Fade>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={{ size: 4, offset: 1 }} md={{ size: 4, offset: 1 }} className={classes.rightColumn}>
                                        <div className={`position-relative ${classes.positionRelative}`}>
                                            <div className={`position-absolute ${classes.positionAbsolute}`}>
                                                <Container>
                                                    <Row>
                                                        <Col>
                                                            <div className={classes.gridWrapper}>
                                                                <a href="#" className={`normal-text ${classes.hiddenLink} ${classes.link}`}>Contacts</a>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                    </Container>
                    <VerticalModal
                        dark={props.dark ? true : false}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </section>
            </React.Fragment>
        )
}
export default HeroLayoutsTypeFirst