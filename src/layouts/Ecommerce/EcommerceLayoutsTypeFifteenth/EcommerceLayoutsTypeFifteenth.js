import { Row, Col, Container } from "reactstrap";
import React, { Component } from "react";

import { Fade } from "react-awesome-reveal";
import classes from "./EcommerceLayoutsTypeFifteenth.module.css"
import placeholder from "../../../img/placeholder-gray.png";
import Product from "./Product/Product";
import Aside from "./Aside/Aside";

const title = "Your Cart";

class EcommerceLayoutsTypeFifteenth extends Component {

    constructor(props) {
        super(props);

        this.state = {
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
                }
            ]
        }

        this.decrease = this.decrease.bind(this);
        this.increase = this.increase.bind(this);
        this.findTotal = this.findTotal.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }


    decrease = (id) => {
        const { products } = this.state;
        const productsClone = [...products];

        let itemId = productsClone.find(item => item.id === id);

        let product = Object.assign({}, itemId);
        if (product.quantity > 0) {
            product.quantity = product.quantity - 1;
        }

        let position = productsClone.indexOf(itemId);
        productsClone[position] = product;

        this.setState({
            products: productsClone
        });
    }

    increase = (id) => {

        const { products } = this.state;
        const productsClone = [...products];

        let itemId = productsClone.find(item => item.id === id);

        let product = Object.assign({}, itemId);
        product.quantity = product.quantity + 1;

        let position = productsClone.indexOf(itemId);
        productsClone[position] = product;

        this.setState({
            products: productsClone
        });
    }

    findTotal() {
        const card = [...this.state.products];

        let initialValue = 0;
        let sum = card.reduce(function (accumulator, currentValue) {
            return accumulator + (currentValue.quantity * currentValue.priceForOne);
        }, initialValue);

        return sum.toFixed(2);
    }

    onDelete(id) {

        const { products } = this.state;
        const productsClone = [...products];


        let itemId = productsClone.find(item => item.id === id);
        let position = productsClone.indexOf(itemId);

        if (itemId) {
            productsClone.splice(position, 1);

            this.setState({
                products: productsClone
            });
        }
    }

    renderCards() {
        const card = this.state.products;
        const listItems = card.map((item, index) => {
            return (
                <Fade down delay={`${index}1`} triggerOnce={true}>
                    <Product
                        key={index}
                        dark={this.props.dark ? true : false}
                        index={item.id}
                        cover={item.cover}
                        title={item.name}
                        description={`Size: ${item.size} Color: ${item.color}`}
                        quantity={item.quantity}
                        priceForOne={item.priceForOne}
                        increase={this.increase}
                        decrease={this.decrease}
                        onDelete={this.onDelete}
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

        return (
            <section className={`section ${classes.ecommerce} ${(this.props.dark) ? `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col lg="5" md="6">
                                <Fade down delay={50} triggerOnce={true}>
                                    <h2 className="text-left">{title}</h2>
                                </Fade>
                            </Col>
                        </Row>
                        <Row className={classes.products}>
                            <Col lg={7}>
                                <div className={classes.productWrapper}>
                                    {this.renderCards()}
                                </div>
                            </Col>

                            <Col lg={5}>
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
                    </Container>
                </div>
            </section>
        )
    }
}

export default EcommerceLayoutsTypeFifteenth
