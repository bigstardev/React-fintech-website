import React from "react";
import {Col, Row} from "reactstrap";
import widget01 from "../../../../img/widget-01.png";
import widget02 from "../../../../img/widget-02.png";
import widget03 from "../../../../img/widget-03.png";
import widget04 from "../../../../img/widget-04.png";

import widgetDark01 from "../../../../img/widget-dark-01.png";
import widgetDark02 from "../../../../img/widget-dark-02.png";
import widgetDark03 from "../../../../img/widget-dark-03.png";
import widgetDark04 from "../../../../img/widget-dark-04.png";

import classes from "./Widgets.module.css"

import { Fade } from "react-awesome-reveal";

const Widgets = (props) => {
    return (
        <React.Fragment>
            <Row className={`${classes.imagesRow}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <Col lg={6} md={6} sm={6} xs={6} className={classes.leftColumn}>
                    <Row xs={1}>
                        <Col className={classes.item}>
                            {props.dark == true ?
                                <>
                                <Fade top delay={50} triggerOnce={true}>
                                    <img
                                        src={widgetDark01}
                                        alt=""
                                    />
                                </Fade>
                                </>
                                :
                                <>
                                <Fade top delay={50} triggerOnce={true}>
                                    <img
                                        src={widget01}
                                        alt=""
                                    />
                                </Fade>
                                </>
                            }
                        </Col>
                        <Col className={classes.item}>
                            {props.dark == true ?
                                <>
                                <Fade top delay={100} triggerOnce={true}>
                                    <img
                                        src={widgetDark02}
                                        alt=""
                                    />
                                </Fade>
                                </>
                                :
                                <>
                                <Fade top delay={100} triggerOnce={true}>
                                    <img
                                        src={widget02}
                                        alt=""
                                    />
                                </Fade>
                                </>
                            }
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} className={classes.rightColumn}>
                    <Row xs={1}>
                        <Col className={classes.item}>
                            {props.dark == true ?
                                <>
                                <Fade top delay={100} triggerOnce={true}>
                                    <img
                                        src={widgetDark03}
                                        alt=""
                                    />
                                </Fade>
                                </>
                                :
                                <>
                                <Fade top delay={100} triggerOnce={true}>
                                    <img
                                        src={widget03}
                                    />
                                </Fade>
                                </>
                            }
                        </Col>
                        <Col className={classes.item}>
                            {props.dark == true ?
                                <>
                                <Fade top delay={150} triggerOnce={true}>
                                    <img
                                        src={widgetDark04}
                                        alt=""
                                    />
                                </Fade>
                                </>
                                :
                                <>
                                <Fade top delay={150} triggerOnce={true}>
                                    <img
                                        src={widget04}
                                        alt=""
                                    />
                                </Fade>
                                </>
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Widgets