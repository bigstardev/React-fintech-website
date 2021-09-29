import React from "react";
import classes from "./CTALayoutsTypeTenth.module.css"

import Content from "./Content/CTATypeFirst";
import Oval from "../../../components/Frame/Frame";
import { Fade } from "react-awesome-reveal";
import {Container, Col , Row} from "reactstrap";
import {
    Basket,
    Bookmark,
    Camera,
    Carousel,
    Dashboard,
    Clock,
    Document,
    Assigment,
    Search
} from "../../../components/Icons/Icons";


const title = "The fast & visual way to understand your users";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";

function CTALayoutsTypeTenth(props) {

    return (
        <React.Fragment>
            <section className={`${classes.cta} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>

                <Container className={classes.iconContainer}>
                    <Row>
                        <Col className="col-12">
                            <div className={`position-relative ${classes.iconsFirst}`}>
                                <div className={`position-absolute ${classes.item}`} style={{top: "-140px", left: "50%", marginLeft: "-65px"}}>
                                    <Fade top triggerOnce={true}>
                                        <Oval variant={"large"}>
                                            <Basket/>
                                        </Oval>
                                    </Fade>
                                </div>
                                <div className={`position-absolute ${classes.item}`} style={{top: "-80px", right: "120px"}}>
                                    <Fade top triggerOnce={true}>
                                        <Oval variant={"large"}>
                                            <Bookmark/>
                                        </Oval>
                                    </Fade>
                                </div>
                                <div className={`position-absolute ${classes.item}`} style={{top: "95px", right: "50px"}}>
                                    <Fade top triggerOnce={true}>
                                        <Oval variant={"custom"}>
                                            <Camera/>
                                        </Oval>
                                    </Fade>
                                </div>
                                <div className={`position-absolute ${classes.item}`} style={{top: "-80px", left: "120px"}}>
                                    <Fade top triggerOnce={true}>
                                        <Oval variant={"small"}>
                                            <Search/>
                                        </Oval>
                                    </Fade>
                                </div>
                                <div className={`position-absolute ${classes.item}`} style={{top: "95px", left: "50px"}}>
                                    <Fade top triggerOnce={true}>
                                        <Oval variant={"large"}>
                                            <Assigment/>
                                        </Oval>
                                    </Fade>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col lg={8} md={8} className="mx-auto text-center">
                            <div className={classes.gridWrapper}>
                                <Content
                                    title={title}
                                    description={description}
                                >
                                </Content>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className={classes.iconContainer}>
                    <Row>
                        <Col className="col-12">
                            <div className={`position-relative ${classes.iconsSecond}`}>
                                <div className={`position-absolute ${classes.item}`} style={{top: "50px", right: "100px"}}>
                                    <Fade top triggerOnce={true}>
                                        <Oval variant={"large"}>
                                            <Carousel/>
                                        </Oval>
                                    </Fade>
                                </div>
                                <div className={`position-absolute ${classes.item}`} style={{top: "80px", left: "50%"}}>
                                    <Fade top triggerOnce={true}>
                                        <Oval variant={"small"}>
                                            <Dashboard/>
                                        </Oval>
                                    </Fade>
                                </div>
                                <div className={`position-absolute ${classes.item}`} style={{top: "50px", left: "150px"}}>
                                    <Fade top triggerOnce={true}>
                                        <Oval variant={"large"}>
                                            <Clock/>
                                        </Oval>
                                    </Fade>
                                </div>
                                <div className={`position-absolute ${classes.item}`} style={{top: "-50px", left: "0"}}>
                                    <Fade top triggerOnce={true}>
                                        <Oval variant={"small"}>
                                            <Document/>
                                        </Oval>
                                    </Fade>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}
export default CTALayoutsTypeTenth