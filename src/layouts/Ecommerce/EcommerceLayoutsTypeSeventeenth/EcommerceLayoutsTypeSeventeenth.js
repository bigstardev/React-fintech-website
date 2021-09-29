import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";

import { Fade } from "react-awesome-reveal";
import classes from "./EcommerceLayoutsTypeSeventeenth.module.css";
import Info from "./Info/Info";
import Product from "./Product/Product";
import Aside from "./Aside/Aside";

import placeholder from "../../../img/placeholder-gray.png";
import Nav from "./Nav/Nav";

class EcommerceLayoutsTypeSeventeenth extends Component {

    constructor(props) {
        super(props);

        this.state = {
            delivery: {
                track: '2345678-01',
                date: 'January 6, 2021',
                recipient: {
                    person: 'Bakhtiyar Sattarov',
                    phone: '+1 234 567 89 10',
                    email: 'info@florence.com'
                },
                address: {
                    place: '2464 Royal Ln. Mesa, New Jersey 45463'
                },
                payment: {
                    type: 'Payed by card',
                    property: '2154'
                }
            },
            products: [
                {
                    id: "1",
                    name: 'Nike Air Zoom Pegasus 36 Premium',
                    cover: placeholder,
                    size: 'US 10.5',
                    color: 'Vast Grey',
                    quantity: 1,
                    priceForOne: '190.00'
                },
                {
                    id: "2",
                    name: 'Nike Zoom Pegasus Turbo 2',
                    cover: placeholder,
                    size: 'US 9.5',
                    color: 'Gray Fog',
                    quantity: 1,
                    priceForOne: '160.00'
                },
            ],
        }
    }

    findTotal() {
        const card = [...this.state.products];

        let initialValue = 0;
        let sum = card.reduce(function (accumulator, currentValue) {
            return accumulator + (currentValue.quantity * currentValue.priceForOne);
        }, initialValue);

        return sum.toFixed(2);
    }

    renderCards() {
        const card = this.state.products;
        const listItems = card.map((item, index) => {
            return (
                <Fade down delay={`${index}1`} triggerOnce={true} key={index}>
                    <Product
                        dark={this.props.dark ? true : false}
                        index={item.id}
                        cover={item.cover}
                        title={item.name}
                        description={`Size: ${item.size} Color: ${item.color}`}
                        quantity={item.quantity}
                        priceForOne={item.priceForOne}
                    >
                    </Product>
                </Fade>
            )
        });
        return (
            <>
                {listItems}
            </>
        );
    }

    render() {

        const { track, date } = this.state.delivery;

        return (
            <section className={`section ${classes.ecommerce} ${(this.props.dark) ? `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row className={classes.headerRow}>
                            <Col lg={2} md={2}>
                                <Nav dark={this.props.dark ? true : false} />
                            </Col>
                            <Col lg={9} md={9}>
                                <div className={classes.orderInfo}>
                                    <div className={classes.firstTitle}>Order list</div>
                                    <div className={classes.track}>№{track}</div>
                                    <div className={classes.secondTitle}>Delivery: {date}</div>
                                </div>
                                <Info
                                    data={this.state.delivery}
                                    dark={this.props.dark ? true : false}
                                />
                            </Col>
                            <Col lg={{ size: 9, offset: 2 }} md={{ size: 9, offset: 2 }}>
                                <Row className={classes.ordersRow}>
                                    <Col lg={12}>
                                        <h3 className={classes.title}>Order</h3>
                                    </Col>
                                    <Col lg={6}>
                                        <div className={classes.productWrapper}>
                                            {this.renderCards()}
                                        </div>
                                    </Col>
                                    <Col lg={{ size: 5, offset: 1 }} className={classes.aside}>
                                        {this.state.products.length >= 1 &&
                                            <Fade down delay={100} triggerOnce={true}>
                                                <Aside
                                                    subtotal={this.findTotal()}
                                                    dark={this.props.dark ? true : false}
                                                />
                                            </Fade>
                                        }
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        )
    }
}

export default EcommerceLayoutsTypeSeventeenth