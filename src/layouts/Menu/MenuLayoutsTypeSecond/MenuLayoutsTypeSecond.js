import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";
import {Drawer} from 'antd';

import classes from "./MenuLayoutsTypeSecond.module.css"
import placeholder from "../../../img/placeholder-gray.png";
import Product from "./Product/Product";
import Aside from "./Aside/Aside";
import Header from "./Header/Header";
import {UserBordered} from "../../../components/Icons/Icons";
import {Form, FormControl} from "react-bootstrap";
import Socials from "./Socials/Socials";

class MenuLayoutsTypeSecond extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visibleCart: false,
            visibleMenu: false,
            products: [
                {
                    id: "1",
                    name: 'Nike Air Force',
                    cover: placeholder,
                    size: 'US 10.5',
                    color: 'Vast Grey',
                    quantity: 1,
                    priceForOne: '190.00'
                },
                {
                    id: "2",
                    name: 'Nike Zoom Pegasus Turbo',
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
        this.showDrawer = this.showDrawer.bind(this);
        this.onClose = this.onClose.bind(this);
        this.showMenuDrawer = this.showMenuDrawer.bind(this);
        this.onCloseMenuDrawer = this.onCloseMenuDrawer.bind(this);
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

    showDrawer() {
        this.setState({
            visibleCart: true
        });
    }

    onClose() {
        this.setState({
            visibleCart: false
        });
    }

    showMenuDrawer() {
        this.setState({
            visibleMenu: true
        });
    }

    onCloseMenuDrawer() {
        this.setState({
            visibleMenu: false
        });
    }

    render() {

        const {products} = this.state;

        return (
            <React.Fragment>
                <section className={`${classes.menu} ${(this.props.dark) ? `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                    <Container>
                        <Header
                            triggerCart={this.showDrawer}
                            triggerMenu={this.showMenuDrawer}
                            dark={this.props.dark ? true : false}
                            subtotal={this.findTotal()}
                        />
                    </Container>
                    <Container>
                        <Row>
                            <Col>
                                <Drawer
                                    title="Cart"
                                    placement="right"
                                    closable={false}
                                    onClose={this.onClose}
                                    visible={this.state.visibleCart}
                                    className={`${classes.drawer} ${(this.props.dark) ? `${classes.dark}` : ''}`}
                                    closable={true}
                                    mask={false}
                                >
                                    <div className={classes.products}>
                                        {products.map((item, index) => {
                                            return (
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
                                            )
                                        })}
                                    </div>
                                    <Aside
                                        subtotal={this.findTotal()}
                                        dark={this.props.dark ? true : false}
                                    />
                                </Drawer>
                            </Col>
                        </Row>
                    </Container>
                        <Container>
                            <Row>
                                <Col>
                                    <Drawer
                                        placement="left"
                                        closable={false}
                                        onClose={this.onCloseMenuDrawer}
                                        visible={this.state.visibleMenu}
                                        className={`${classes.drawer} ${classes.drawerMenu} ${(this.props.dark) ? `${classes.dark}` : ''}`}
                                        closable={true}
                                        mask={false}
                                    >
                                        <ul className={classes.listCategories}>
                                            <li>
                                                <a href="#">Shop</a>
                                            </li>
                                            <li>
                                                <a href="#">Women</a>
                                            </li>
                                            <li>
                                                <a href="#">Men</a>
                                            </li>
                                            <li>
                                                <a href="#">Kids</a>
                                            </li>
                                        </ul>
                                        <ul className={classes.listCustom}>
                                            <li>
                                                <a href="#">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">How it works</a>
                                            </li>
                                            <li>
                                                <a href="#">The jornal</a>
                                            </li>
                                            <li>
                                                <a href="#">Contact Us</a>
                                            </li>
                                        </ul>
                                        <a className={classes.user}>
                                            <UserBordered/> Аccount
                                        </a>
                                        <Form className="form">
                                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                        </Form>
                                        <Socials />
                                    </Drawer>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default MenuLayoutsTypeSecond