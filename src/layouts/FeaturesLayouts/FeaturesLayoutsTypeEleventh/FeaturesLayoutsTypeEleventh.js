import React from "react";
import {Container, Col , Row} from "reactstrap";

import VerticalModal from "./VerticalModal/VerticalModal";
import Divider from "../../../components/Divider/Divider";
import Slider from "./Slider/Slider";
import PlayButton from "../../../components/Play-Button/Play-Button";
import { Fade } from "react-awesome-reveal";
import widget01 from "../../../img/widget-01.png";
import widget02 from "../../../img/widget-02.png";
import widget03 from "../../../img/widget-03.png";
import widget04 from "../../../img/widget-04.png";
import widgetDark01 from "../../../img/widget-dark-01.png";
import widgetDark02 from "../../../img/widget-dark-02.png";
import widgetDark03 from "../../../img/widget-dark-03.png";
import widgetDark04 from "../../../img/widget-dark-04.png";
import classes from "./FeaturesLayoutsTypeEleventh.module.css"

const title = "Go beyond email marketing with true marketing automation";
const description = "You can even sync designs from your cloud storage!"

const originalImages = [widget01, widget02, widget03, widget04, widget01, widget02, widget04];
const darkImages = [widgetDark01, widgetDark02, widgetDark03, widgetDark04, widgetDark01, widgetDark02, widgetDark04];


function FeaturesLayoutsTypeEleventh (props) {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <React.Fragment>
            <section className={`${classes.features} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>

                <div className={classes.gridWrapper}>
                    <Container className={classes.container}>
                        <Row>
                            <Col lg="10" className="mx-auto">
                                <Row>
                                    <Col lg={5} md={6}  className={classes.imagesColumn}>
                                        <Slider
                                            array={props.dark == true ?darkImages : originalImages}
                                        />
                                    </Col>
                                    <Col lg={6} md={6}  className={`${classes.headerColumn} ml-auto`}>
                                        <Fade top triggerOnce={true}>
                                            <h1 className={`title ${classes.title}`}>{title}</h1>
                                        </Fade>
                                        <Fade top delay={50} triggerOnce={true}>
                                            <p className={`normal-text ${classes.description}`}>{description}</p>
                                        </Fade>
                                        <Fade top delay={50} triggerOnce={true}>
                                            <Divider/>
                                        </Fade>

                                        <div className={`${classes.bottomLevel} d-flex align-items-center`}>
                                            <Fade top delay={100} triggerOnce={true}>
                                                <PlayButton
                                                    size="normal"
                                                    click={() => setModalShow(true)}
                                                />
                                            </Fade>
                                            <div className={`d-inline-block ${classes.textContent}`}>
                                                <Fade top delay={150} triggerOnce={true}>
                                                    <p className={classes.firstDescription}>See how it works.</p>
                                                    <p className={classes.secondDescription}>Watch video</p>
                                                </Fade>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
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
export default FeaturesLayoutsTypeEleventh