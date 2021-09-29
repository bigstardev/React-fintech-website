import React from "react";
import classes from "./FeaturesLayoutsTypeFirst.module.css"

import VerticalModal from "./VerticalModal/VerticalModal";
import Features from "./Features/Features";
import {Container, Col , Row} from "reactstrap";
import Button from "../../../components/Button/Button";
import {SimpleLeftArrow} from "../../../components/Icons/Icons";
import placeholder from "../../../img/placeholder-gray.png";
import placeholderDark from "../../../img/placeholder-gray-dark.png";
import Divider from "../../../components/Divider/Divider";
import { Fade } from "react-awesome-reveal";
import PlayButton from "../../../components/Play-Button/Play-Button";

const title = "A new and better way to acquire engage and retain customers";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";


function FeaturesLayoutsTypeFirst (props) {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <React.Fragment>
            <section className={`section ${classes.features} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col lg="6" md="6" className={classes.leftColumn}>
                                <Fade top triggerOnce={true}>
                                    <h1 >{title}</h1>
                                </Fade>
                                <Fade top delay={50} triggerOnce={true}>
                                    <p className={`normal-text ${classes.description}`}>{description}</p>
                                </Fade>

                                <div className={classes.playButton}>
                                    <Fade top delay={100} triggerOnce={true}>
                                        <Button
                                            link={true}
                                            href={"#"}
                                            classes={`primary large right-icon ${classes.button}`}
                                            value={"Learn More"}
                                            rightIcon={<SimpleLeftArrow fill="#ffffff" />}
                                        />
                                    </Fade>
                                </div>
                            </Col>
                            <Col lg="6" md="6" className={`position-relative ${classes.rightColumn}`}>
                                <Fade top triggerOnce={true}>
                                            <img
                                                width="475"
                                                height="380"
                                                src={props.dark === true ? placeholderDark : placeholder }
                                                alt=""
                                            />
                                </Fade>
                                <div className={`position-absolute ${classes.buttonsSection} `}>
                                    <Fade top triggerOnce={true}>
                                    <PlayButton
                                        size="large"
                                        click={() => setModalShow(true)}
                                    />
                                    </Fade>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col lg="12" md="12">
                                <Fade top delay={150} triggerOnce={true}>
                                    <div className={classes.divider}>
                                        <Divider/>
                                    </div>
                                </Fade>
                            </Col>
                        </Row>
                        <Features/>
                        <VerticalModal
                            dark={props.dark ? true : false}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}

export default FeaturesLayoutsTypeFirst