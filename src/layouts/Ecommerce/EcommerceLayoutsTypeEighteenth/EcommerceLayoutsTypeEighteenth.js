import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";

import SimpleForm from "./SimpleForm/SimpleForm";
import PasswordForm from "./PasswordForm/PasswordForm";
import Nav from "./Nav/Nav";

import { Fade } from "react-awesome-reveal";
import classes from "./EcommerceLayoutsTypeEighteenth.module.css"

const title = "Settings";
const secondTitle = "Password change";

class EcommerceLayoutsTypeEighteenth extends Component {

    render() {

        return (
            <section className={`section ${classes.ecommerce} ${(this.props.dark) ? `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row className={classes.headerRow}>
                            <Col lg={2} md={2}>
                                <Nav dark={this.props.dark ? true : false} />
                            </Col>
                            <Col lg={9} md={9}>
                                <Fade down delay={50} triggerOnce={true}>
                                    <h2 className={classes.title}>{title}</h2>
                                </Fade>
                                <Fade down delay={100} triggerOnce={true}>
                                    <SimpleForm
                                        dark={this.props.dark ? true : false}
                                    />
                                </Fade>
                                <Fade down delay={150} triggerOnce={true}>
                                    <h3>{secondTitle}</h3>
                                    <PasswordForm
                                        dark={this.props.dark ? true : false}
                                    />
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        )
    }
}

export default EcommerceLayoutsTypeEighteenth