import React from "react";
import {Col, Row} from "reactstrap";
import {
    Assigment,
    Basket,
    Bookmark,
    Email,
    Extension,
    Group,
    Home
} from "../../../../components/Icons/Icons";
import {Tab, Nav} from "react-bootstrap";
import Feature from "../Feature/FeaturesTypeEighth";
import Oval from "../../../../components/Frame/Frame";
import Divider from "../../../../components/Divider/Divider";
import { Fade } from "react-awesome-reveal";
import classes from  "./Tabs.module.css"

const Tabs = (props) => {
    return (
        <React.Fragment>
            <section className={`${classes.tabs} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={8}>
                            <Fade down triggerOnce={true}>
                                <Nav variant="tabs" className="flex-column">
                                    <Row>
                                        <Col lg="3" md="3" sm="4" xs="4">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">
                                                    Option 1
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Col>
                                        <Col lg="3" md="3" sm="4" xs="4">
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">
                                                    Option 2
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Col>
                                        <Col lg="3" md="3" sm="4" xs="4">
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">
                                                    Option 3
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Col>
                                    </Row>
                                </Nav>
                            </Fade>
                        </Col>
                        <Col sm={4} className="read-more text-right">
                            <a href="#" >Read More</a>
                        </Col>
                        <Col sm={12}>
                            <Fade down delay={100} triggerOnce={true}>
                                <Divider/>
                            </Fade>
                        </Col>

                        <Col sm={12} className="content">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row className="features-row">
                                        <Col lg={4} md={4} sm={6} className="item">
                                            <Fade down triggerOnce={true}>
                                                <Feature
                                                    title={"Property Managment"}
                                                    description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                                    dark={props.dark ? true : false}
                                                >
                                                    <Oval variant={"normal"}>
                                                        <Bookmark/>
                                                    </Oval>
                                                </Feature>
                                            </Fade>
                                        </Col>
                                        <Col lg={4} md={4} sm={6} className="item">
                                            <Fade down delay={50} triggerOnce={true}>
                                                <Feature
                                                    title={"User Administration"}
                                                    description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                                    dark={props.dark ? true : false}
                                                >
                                                    <Oval variant={"normal"}>
                                                        <Home/>
                                                    </Oval>

                                                </Feature>
                                            </Fade>
                                        </Col>
                                        <Col lg={4} md={4} sm={6} className="item">
                                            <Fade down delay={100} triggerOnce={true}>
                                                <Feature
                                                    title={"Engage Customers"}
                                                    description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                                    dark={props.dark ? true : false}
                                                >
                                                    <Oval variant={"normal"}>
                                                        <Basket/>
                                                    </Oval>
                                                </Feature>
                                            </Fade>
                                        </Col>
                                        <Col lg={4} md={4} sm={6} className="item">
                                            <Fade down delay={150} triggerOnce={true}>
                                                <Feature
                                                    title={"API Reference"}
                                                    description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                                    dark={props.dark ? true : false}
                                                >
                                                    <Oval variant={"normal"}>
                                                        <Extension/>
                                                    </Oval>
                                                </Feature>
                                            </Fade>
                                        </Col>
                                        <Col lg={4} md={4} sm={6} className="item">
                                            <Fade down delay={200}>
                                                <Feature
                                                    title={"Team Accounts"}
                                                    description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                                    dark={props.dark ? true : false}
                                                >
                                                    <Oval variant={"normal"}>
                                                        <Group/>
                                                    </Oval>
                                                </Feature>
                                            </Fade>
                                        </Col>
                                        <Col lg={4} md={4} sm={6} className="item">
                                            <Fade down delay={250}>
                                                <Feature
                                                    title={"Email Marketing"}
                                                    description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                                    dark={props.dark ? true : false}
                                                >
                                                    <Oval variant={"normal"}>
                                                        <Email/>
                                                    </Oval>
                                                </Feature>
                                            </Fade>
                                        </Col>
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <Row className="features-row">
                                        <Col lg={4} md={4} sm={6} className="item">
                                            <Fade down triggerOnce={true}>
                                                <Feature
                                                    title={"Property Managment"}
                                                    description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                                    dark={props.dark ? true : false}
                                                >
                                                    <Oval variant={"normal"}>
                                                        <Bookmark/>
                                                    </Oval>
                                                </Feature>
                                            </Fade>
                                        </Col>
                                        <Col lg={4} md={4} sm={6} className="item">
                                            <Fade down delay={50}>
                                                <Feature
                                                    title={"User Administration"}
                                                    description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                                    dark={props.dark ? true : false}
                                                >
                                                    <Oval variant={"normal"}>
                                                        <Home/>
                                                    </Oval>

                                                </Feature>
                                            </Fade>
                                        </Col>
                                        <Col lg={4} md={4} sm={6} className="item">
                                            <Fade down delay={100}>
                                                <Feature
                                                    title={"Engage Customers"}
                                                    description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                                    dark={props.dark ? true : false}
                                                >
                                                    <Oval variant={"normal"}>
                                                        <Basket/>
                                                    </Oval>
                                                </Feature>
                                            </Fade>
                                        </Col>
                                        <Col lg={4} md={4} sm={6} className="item">
                                            <Fade down delay={200}>
                                                <Feature
                                                    title={"API Reference"}
                                                    description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                                    dark={props.dark ? true : false}
                                                >
                                                    <Oval variant={"normal"}>
                                                        <Extension/>
                                                    </Oval>
                                                </Feature>
                                            </Fade>
                                        </Col>
                                        <Col lg={4} md={4} sm={6} className="item">
                                            <Fade down delay={250}>
                                                <Feature
                                                    title={"Team Accounts"}
                                                    description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                                    dark={props.dark ? true : false}
                                                >
                                                    <Oval variant={"normal"}>
                                                        <Group/>
                                                    </Oval>
                                                </Feature>
                                            </Fade>
                                        </Col>
                                        <Col lg={4} md={4} sm={6} className="item">
                                            <Fade down delay={300}>
                                                <Feature
                                                    title={"Email Marketing"}
                                                    description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                                    dark={props.dark ? true : false}
                                                >
                                                    <Oval variant={"normal"}>
                                                        <Email/>
                                                    </Oval>
                                                </Feature>
                                            </Fade>
                                        </Col>
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <Row className="features-row">
                                        <Col lg={4} md={4} sm={6} className="item">
                                            <Fade down triggerOnce={true}>
                                                <Feature
                                                    title={"Property Managment"}
                                                    description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                                    dark={props.dark ? true : false}
                                                >
                                                    <Oval variant={"normal"}>
                                                        <Bookmark/>
                                                    </Oval>
                                                </Feature>
                                            </Fade>
                                        </Col>
                                        <Col lg={4} md={4} sm={6} className="item">
                                            <Fade down delay={50}>
                                                <Feature
                                                    title={"User Administration"}
                                                    description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                                    dark={props.dark ? true : false}
                                                >
                                                    <Oval variant={"normal"}>
                                                        <Home/>
                                                    </Oval>

                                                </Feature>
                                            </Fade>
                                        </Col>
                                        <Col lg={4} md={4} sm={6} className="item">
                                            <Fade down delay={100}>
                                                <Feature
                                                    title={"Engage Customers"}
                                                    description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                                    dark={props.dark ? true : false}
                                                >
                                                    <Oval variant={"normal"}>
                                                        <Basket/>
                                                    </Oval>
                                                </Feature>
                                            </Fade>
                                        </Col>
                                        <Col lg={4} md={4} sm={6} className="item">
                                            <Fade down delay={150}>
                                                <Feature
                                                    title={"API Reference"}
                                                    description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                                    dark={props.dark ? true : false}
                                                >
                                                    <Oval variant={"normal"}>
                                                        <Extension/>
                                                    </Oval>
                                                </Feature>
                                            </Fade>
                                        </Col>
                                        <Col lg={4} md={4} sm={6} className="item">
                                            <Fade down delay={200}>
                                                <Feature
                                                    title={"Team Accounts"}
                                                    description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                                    dark={props.dark ? true : false}
                                                >
                                                    <Oval variant={"normal"}>
                                                        <Group/>
                                                    </Oval>
                                                </Feature>
                                            </Fade>
                                        </Col>
                                        <Col lg={4} md={4} sm={6} className="item">
                                            <Fade down delay={250}>
                                                <Feature
                                                    title={"Email Marketing"}
                                                    description={"Create screens directly in Method or add your images from Sketch or Figma."}
                                                    dark={props.dark ? true : false}
                                                >
                                                    <Oval variant={"normal"}>
                                                        <Email/>
                                                    </Oval>
                                                </Feature>
                                            </Fade>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </section>

        </React.Fragment>
    )
}

export default Tabs