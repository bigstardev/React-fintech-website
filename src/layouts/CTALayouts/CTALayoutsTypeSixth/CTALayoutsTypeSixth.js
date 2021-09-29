import React  from "react";
import classes from "./CTALayoutsTypeSixth.module.css"

import Logos from "./Logos/Logos";
import Form from "./SimpleForm/SimpleForm";

import {Container, Col , Row} from "reactstrap";
import Divider from "../../../components/Divider/Divider";
import { Fade } from "react-awesome-reveal";

const title = "Invite friends & earn rewards";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";

function CTALayoutsTypeSixth (props) {

    return (
        <React.Fragment>
            <section className={`section  ${classes.cta} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>

                <div className={classes.gridWrapper}>
                    <Container>
                        <Row className={classes.textRow}>
                            <Col lg={8} md={8} className="mx-auto text-center">
                                <Fade top triggerOnce={true}>
                                    <h1 className="title">{title}</h1>
                                </Fade>
                                <Fade top delay={50} triggerOnce={true}>
                                    <p className={`normal-text ${classes.description}`}>{description}</p>
                                </Fade>
                            </Col>
                        </Row>
                        <Row className={classes.formRow}>
                            <Col className="col-12">
                                <Fade top delay={100} triggerOnce={true}>
                                    <Form
                                        dark={props.dark ? true : false}
                                    />
                                </Fade>
                            </Col>
                        </Row>
                        <Row className={classes.logosRow}>
                            <Col className="col-12">
                                <Fade top delay={150} triggerOnce={true}>
                                    <div className={classes.divider}>
                                        <Divider/>
                                    </div>
                                </Fade>
                            </Col>
                            <Col className="col-12">
                                <Fade top delay={200} triggerOnce={true}>
                                    <div className={classes.logos}>
                                        <Logos
                                            dark={props.dark ? true : false}
                                        />
                                    </div>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </section>
        </React.Fragment>
    )
}
export default CTALayoutsTypeSixth