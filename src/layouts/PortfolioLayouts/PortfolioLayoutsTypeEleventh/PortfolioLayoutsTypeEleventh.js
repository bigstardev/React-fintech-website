import React from "react";
import { Col, Container, Row } from "reactstrap";

import Button from "../../../components/Button/Button";
import classes from "./PortfolioLayoutsTypeEleventh.module.css"
import { Fade } from "react-awesome-reveal";

function PortfolioLayoutsTypeEleventh(props) {

    return (
        <React.Fragment>
            <section className={`section ${classes.portfolio} ${(props.dark) ? `dark ${classes.dark}` : ''}`}>

                <Container className={classes.container}>
                    <Row className={classes.headerRow}>
                        <Col lg={6} md={6} className={classes.item}>
                            <Fade top triggerOnce={true}>
                                <div className={classes.card}>
                                    <h2>Men</h2>
                                    <Button
                                        link={true}
                                        href={"#"}
                                        classes={"neutral outline big simple"}
                                        value={"Shop"}
                                    />
                                </div>
                            </Fade>
                        </Col>
                        <Col lg={6} md={6} className={classes.item}>
                            <Fade top triggerOnce={true} delay={50}>
                                <div className={classes.card}>
                                    <h2>Women</h2>
                                    <Button
                                        link={true}
                                        href={"#"}
                                        classes={"neutral outline big simple"}
                                        value={"Shop"}
                                    />
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}
export default PortfolioLayoutsTypeEleventh 