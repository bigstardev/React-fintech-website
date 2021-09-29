import React from "react";
import {Col, Row} from "reactstrap";
import Button from "../../../../components/Button/Button";
import {ArrowRight, Assigment, Bookmark, Email} from "../../../../components/Icons/Icons";
import {Tab, Nav} from "react-bootstrap";
import Features from "../Feature/FeatureTypeFourth";
import Oval from "../../../../components/Frame/Frame";
import { Fade } from "react-awesome-reveal";
import classes from "./Tabs.module.css"

const Tabs = (props) => {
    return (
        <div className={classes.tabs}>
            <Tab.Container id="left-tabs-example"  defaultActiveKey="first">
                <Row>
                    <Col sm={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    <Col lg={6} md={7} >
                                        <Fade top triggerOnce={true}>
                                            <h1 className={classes.title}>The best customer experiences are built with Method</h1>
                                        </Fade>
                                    </Col>
                                    <Col lg={5} md={5} className="ml-auto">
                                        <Fade top delay={50} triggerOnce={true}>
                                          <p className={`normal-text ${classes.description}`}>Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!</p>
                                        </Fade>
                                    </Col>
                                    <Col lg={3} md={3} className={classes.buttonColumn}>
                                        <Fade top delay={100} triggerOnce={true}>
                                        <Button
                                            link={true}
                                            href={"#"}
                                            classes={"primary large right-icon"}
                                            value={"Explore Products"}
                                            rightIcon={<ArrowRight fill="#ffffff"/>}
                                        />
                                        </Fade>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    <Col lg={6} md={7} >
                                        <Fade top triggerOnce={true}>
                                            <h1 className={classes.title}>The best customer experiences are built with Method</h1>
                                        </Fade>
                                    </Col>
                                    <Col lg={5} md={5} className="ml-auto" >
                                        <Fade top delay={50} triggerOnce={true}>
                                            <p className={`normal-text ${classes.description}`}>Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!</p>
                                        </Fade>
                                    </Col>
                                    <Col lg={3} md={3} className={classes.buttonColumn}>
                                        <Fade top delay={100} triggerOnce={true}>
                                        <Button
                                            link={true}
                                            href={"#"}
                                            classes={"secondary large right-icon"}
                                            value={"Explore Products"}
                                            rightIcon={<ArrowRight fill="#ffffff"/>}
                                        />
                                        </Fade>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row>
                                    <Col lg={6} md={7} >
                                        <Fade top triggerOnce={true}>
                                            <h1 className={classes.title}>The best customer experiences are built with Method</h1>
                                        </Fade>
                                    </Col>
                                    <Col lg={5} md={5} className="ml-auto" >
                                        <Fade top delay={50} triggerOnce={true}>
                                            <p className={`normal-text ${classes.description}`}>Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!</p>
                                        </Fade>
                                    </Col>
                                    <Col lg={3} md={3} className={classes.buttonColumn}>
                                        <Fade top delay={100} triggerOnce={true}>
                                        <Button
                                            link={true}
                                            href={"#"}
                                            classes={"primary large right-icon"}
                                            value={"Explore Products"}
                                            rightIcon={<ArrowRight fill="#ffffff"/>}
                                        />
                                        </Fade>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    <Col sm={12} className={classes.hiddenElement}>
                        <Nav variant="tabs" className="flex-column">
                            <Row>
                                <Col className="col-4">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">
                                        </Nav.Link>
                                    </Nav.Item>
                                </Col>
                                <Col className="col-4">
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">
                                        </Nav.Link>
                                    </Nav.Item>
                                </Col>
                                <Col className="col-4">
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">
                                        </Nav.Link>
                                    </Nav.Item>
                                </Col>
                            </Row>
                        </Nav>
                    </Col>

                    <Col sm={12} className={classes.tabColumn}>
                        <Fade top delay={200} triggerOnce={true}>
                            <Nav variant="tabs tabs-visible" className="flex-column">
                                <Row>
                                    <Col lg={4} md={4} className={classes.item}>
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">
                                                <Fade top delay={200} triggerOnce={true}>
                                                    <Features
                                                        title={"Property Managment"}
                                                        description={"You can even sync designs from your cloud storage!"}
                                                    >
                                                        <Oval variant={"normal"}>
                                                            <Bookmark/>
                                                        </Oval>
                                                    </Features>
                                                </Fade>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Col>
                                    <Col lg={4} md={4} className={classes.item}>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">
                                                <Fade top delay={300} triggerOnce={true}>
                                                <Features
                                                    title={"Email Marketing"}
                                                    description={"You can even sync designs from your cloud storage!"}
                                                >
                                                    <Oval variant={"normal"}>
                                                        <Email/>
                                                    </Oval>
                                                </Features>
                                                </Fade>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Col>
                                    <Col lg={4} md={4} className={classes.item}>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">
                                                <Fade top delay={400} triggerOnce={true}>
                                                <Features
                                                    title={"Engage Customers"}
                                                    description={"You can even sync designs from your cloud storage!"}
                                                >
                                                    <Oval
                                                        variant={"normal"}
                                                    >
                                                        <Assigment/>
                                                    </Oval>
                                                </Features>
                                                </Fade>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Col>
                                </Row>
                            </Nav>
                        </Fade>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default Tabs