import React from "react";

import {Col, Container, Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./Slider/Slider";

import widget01 from "../../../img/IphoneXS.png";
import widgetDark01 from "../../../img/IphoneXS-dark.png";
import classes from "./PortfolioLayoutsTypeTenth.module.css"
import {Fade} from "react-awesome-reveal";

const originalImages = [widget01, widget01 , widget01, widget01, widget01, widget01, widget01];
const darkImages = [widgetDark01, widgetDark01 , widgetDark01, widgetDark01, widgetDark01, widgetDark01, widgetDark01];
const title = "Latest Awesome Works";
const strong = "Portfolio";


function PortfolioLayoutsTypeTenth (props) {


    return (
        <React.Fragment>
            <section className={`section ${classes.portfolio} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>

                <Container className={classes.container}>
                    <Row className={classes.headerRow}>
                        <Col lg="8" md="8" className="mx-auto text-center">
                            <Fade top triggerOnce={true}>
                                <strong style={{display: 'block'}}>{strong}</strong>
                            </Fade>
                            <Fade top delay={50} triggerOnce={true}>
                                <h1>{title}</h1>
                            </Fade>
                        </Col>
                    </Row>

                    <Row className={classes.sliderRow}>
                        <Col className={`p-0 ${classes.col}`}>
                                <Slider
                                    array={props.dark == true ? darkImages : originalImages}
                                />
                        </Col>
                    </Row>

                </Container>
            </section>
        </React.Fragment>
    )
}
export default PortfolioLayoutsTypeTenth