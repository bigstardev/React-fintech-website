import React from "react";
import classes from "./FeaturesLayoutsTypeSeventh.module.css"

import {Container, Col , Row} from "reactstrap";

import VerticalModal from "./VerticalModal/VerticalModal";
import Divider from "../../../components/Divider/Divider";

import Widgets from "./Widgets/Widgets";
import PlayButton from "../../../components/Play-Button/Play-Button";
import { Fade } from "react-awesome-reveal";

const title = "Save time managing social media for your business";
const description = "You can even sync designs from your cloud storage!";

function FeaturesLayoutsTypeSeventh (props) {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <React.Fragment>
            <section className={`section ${classes.features} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col lg={5} md={6} className={classes.headerColumn}>
                                <Fade top triggerOnce={true}>
                                    <h1 className={`title ${classes.title}`}>{title}</h1>
                                </Fade>
                                <Fade top delay={50} triggerOnce={true}>
                                    <p className={`normal-text ${classes.description}`}>{description}</p>
                                </Fade>
                                <Fade top delay={100} triggerOnce={true}>
                                    <div className={classes.divider}>
                                        <Divider/>
                                    </div>
                                </Fade>

                                <div className={`d-flex align-items-center ${classes.bottomLevel}`}>
                                    <Fade top delay={200} triggerOnce={true}>
                                        <PlayButton
                                            size="normal"
                                            click={() => setModalShow(true)}
                                        />
                                    </Fade>
                                    <Fade top delay={250} triggerOnce={true}>
                                        <div className={`d-inline-block ${classes.textContent}`}>
                                            <p className={classes.firstDescription}>See how it works.</p>
                                            <p className={classes.secondDescription}>Watch video</p>
                                        </div>
                                    </Fade>
                                </div>
                            </Col>
                            <Col lg={{ size: 6, offset: 1 }} md={{ size: 6}} className={classes.imagesColumn}>
                                {props.dark == true ?
                                    <Widgets
                                        dark={true}
                                    /> :
                                    <Widgets
                                    />
                                }
                            </Col>
                        </Row>
                        <VerticalModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            dark={props.dark ? true : false}
                        />
                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}
export default FeaturesLayoutsTypeSeventh