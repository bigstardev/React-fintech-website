import React from "react";
import classes from "./CTALayoutsTypeSeventh.module.css"

import Form from "./SimpleForm/SimpleForm";
import {Container, Col , Row} from "reactstrap";
import { Fade } from "react-awesome-reveal";

const title = "Make Made Maden";

function CTALayoutsTypeSeventh (props) {

    return (
        <React.Fragment>
            <section className={`section  ${classes.cta} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>

                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col lg={6} md={8} >
                                <Fade top triggerOnce={true}>
                                    <h1>{title}</h1>
                                </Fade>
                            </Col>
                            <Col lg={6} md={8}>
                                <Fade top delay={50} triggerOnce={true}>
                                    <div className={classes.customForm}>
                                        <Form
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
export default CTALayoutsTypeSeventh