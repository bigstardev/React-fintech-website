import { Row, Col, Container } from "reactstrap";
import React, { Component } from "react";

import { Fade } from "react-awesome-reveal";
import classes from "./EcommerceLayoutsTypeSixteenth.module.css";
import { Table } from 'antd';
import Nav from "./Nav/Nav";
const title = "Orders";

const columns = [
    {
        title: 'Order',
        key: 'order',
        render: (text, record) => (
            <span>№{record.order}</span>
        ),
    },
    {
        title: 'Delivery',
        key: 'delivery',
        render: (text, record) => (
            <span>{record.delivery}</span>
        ),
        responsive: ['sm'],
    },
    {
        title: 'Total',
        key: 'total',
        render: (text, record) => (
            <span>${record.total}</span>
        ),
        responsive: ['sm'],
    },
    {
        title: 'Details',
        key: 'details',
        render: (text, record) => (
            <a href={record.link} className={classes.more}>View</a>
        ),
        width: 100,
    },
];

const data = [
    {
        key: '1',
        order: '2345678-01',
        delivery: `March 10, 2021`,
        total: '789',
        link: `#/link-1`,
    },
    {
        key: '2',
        order: '2345678-02',
        delivery: `April 10, 2021`,
        total: '800',
        link: `#/link-2`,
    },
    {
        key: '2',
        order: '2345678-02',
        delivery: `Delivered`,
        total: '900',
        link: `#/link-3`,
    },
    {
        key: '4',
        order: '2345678-03',
        delivery: `Delivered`,
        total: '900',
        link: `#/link-20`,
    },
    {
        key: '5',
        order: '2345678-02',
        delivery: `Delivered`,
        total: '900',
        link: `#/link-30`,
    },
];


class EcommerceLayoutsTypeSixteenth extends Component {

    render() {
        return (
            <div>
                <section className={`${classes.ecommerce} ${(this.props.dark) ? `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row>
                                <Col lg={2} md={2}>
                                    <Fade down triggerOnce={true}>
                                        <Nav dark={this.props.dark ? true : false} />
                                    </Fade>
                                </Col>
                                <Col lg={9} md={9}>
                                    <Fade down triggerOnce={true} delay={50}>
                                        <h2>{title}</h2>
                                    </Fade>
                                    <Fade down triggerOnce={true} delay={100}>
                                        <Table columns={columns} dataSource={data} pagination={false} />
                                    </Fade>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </div>
        )
    }
}

export default EcommerceLayoutsTypeSixteenth