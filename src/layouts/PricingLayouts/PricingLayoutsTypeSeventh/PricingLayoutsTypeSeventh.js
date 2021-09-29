import { Row, Col, Container } from "reactstrap";
import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";
import {
    firstColumns,
    secondColumns,
    thirdColumns,
    firstData,
    secondData,
    thirdData
} from "./data";
import { Table } from "antd";

import classes from "./PricingLayoutsTypeSeventh.module.css";
const title = `Feature comparison`;

class PricingLayoutsTypeSeventh extends Component {
    render() {
        return (
            <>
                <section
                    className={`section ${classes.pricing} ${
                        this.props.dark ? `dark ${classes.dark}` : ""
                    }`}
                >
                    <div className={classes.wrapper}>
                        <Container>
                            <Row>
                                <Col lg="12">
                                    <Fade top triggerOnce={true}>
                                        <h1 className={`title text-center ${classes.title}`}>
                                            {title}
                                        </h1>
                                    </Fade>
                                </Col>
                                <Col className={classes.tablesWrapper}>
                                    <Fade top triggerOnce={true} delay={50}>
                                        <Table columns={firstColumns} dataSource={firstData} />
                                    </Fade>
                                    <Fade top triggerOnce={true} delay={100}>
                                        <Table columns={secondColumns} dataSource={secondData} />
                                    </Fade>
                                    <Fade top triggerOnce={true} delay={150}>
                                        <Table columns={thirdColumns} dataSource={thirdData} />
                                    </Fade>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </>
        );
    }
}

export default PricingLayoutsTypeSeventh;
