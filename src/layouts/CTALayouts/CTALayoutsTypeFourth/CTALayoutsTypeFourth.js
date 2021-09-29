import React from "react";
import classes from "./CTALayoutsTypeFourth.module.css"
import {Block, Upload, Download, Flash} from "../../../components/Icons/Icons";
import Content from "./Content/CTATypeFourth";
import Button from "../../../components/Button/Button";
import { Fade } from "react-awesome-reveal";

import {Container, Col , Row} from "reactstrap";

function CTALayoutsTypeFourth (props) {

    return (
        <React.Fragment>
            <section className={`section  ${classes.cta} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>

                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col lg={10} md={10} className="mx-auto">
                                <Row>
                                    <Col lg={5} md={5}>
                                        <Content
                                            icon={<Block/>}
                                            title={"Proxy Access"}
                                            description={"Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs"}
                                        >
                                            <Fade top delay={300} triggerOnce={true}>
                                                <Button
                                                    link={true}
                                                    href={"#"}
                                                    classes={"primary big left-icon"}
                                                    value={"Get Access"}
                                                    leftIcon={<Flash fill="#ffffff"/>}
                                                />
                                            </Fade>
                                        </Content>
                                    </Col>
                                    <Col lg={2} md={2} className={`d-flex justify-content-center ${classes.dividerColumn}`}>
                                        <Fade top triggerOnce={true}>
                                            <div className={classes.divider}></div>
                                        </Fade>
                                    </Col>
                                    <Col lg={5} md={5}>
                                        <Content
                                            icon={<Upload/>}
                                            title={"File Hosting"}
                                            description={"Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs"}
                                        >
                                            <Fade top delay={300} triggerOnce={true}>
                                                <Button
                                                    link={true}
                                                    href={"#"}
                                                    classes={"neutral big outline left-icon"}
                                                    value={"Download Free"}
                                                    leftIcon={<Download/>}
                                                />
                                            </Fade>
                                        </Content>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </section>
        </React.Fragment>
    )
}
export default CTALayoutsTypeFourth