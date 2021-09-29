import React from "react";
import classes from "./Header.module.css"
import {Nav, Navbar, Form, FormControl} from "react-bootstrap";
import {MethodLogotype, Cart, UserBordered} from "../../../../components/Icons/Icons";
import Socials from "../Socials/Socials";
import {Input, Badge, Dropdown, List, Collapse} from 'antd';
import {Col, Container, Row} from "reactstrap";
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";
const { Search } = Input;
const { Panel } = Collapse;

/*data*/

const dataNew = [
    {
        title: "Our Favorites",
        href: "example/1"
    },
    {
        title: "New Arrivals",
        href: "example/2"
    },
    {
        title: "New Collections",
        href: "example/3"
    },
    {
        title: "At Home Comfort",
        href: "example/4"
    },
    {
        title: "Join the party",
        href: "example/5"
    },
    {
        title: "New Names at Neiman's",
        href: "example/6"
    },
    {
        title: "Luxe Essentials",
        href: "example/7"
    },
    {
        title: "Exclusives",
        href: "example/8"
    }
];

const dataClothing = [
    {
        title: "Coats",
        href: "example/1"
    },
    {
        title: "Suits & Jackets",
        href: "example/2"
    },
    {
        title: "Dresses and jumpsuits",
        href: "example/3"
    },
    {
        title: "Cardigans and sweaters",
        href: "example/4"
    },
    {
        title: "Sweatshirts",
        href: "example/5"
    },
    {
        title: "T-shirts and tops",
        href: "example/6"
    },
    {
        title: "Jumpsuits & Rompers",
        href: "example/7"
    },
    {
        title: "Pants & Shorts",
        href: "example/8"
    }
];

const dataAccessories = [
    {
        title: "Jewelry",
        href: "example/1"
    },
    {
        title: "Wallets and cases",
        href: "example/2"
    },
    {
        title: "Neckscarves",
        href: "example/3"
    },
    {
        title: "Hats and gloves",
        href: "example/4"
    },
    {
        title: "Face masks",
        href: "example/5"
    }
];

const dataOccasions = [
    {
        title: "Casual Weekend",
        href: "example/1"
    },
    {
        title: "Work From Home",
        href: "example/2"
    },
    {
        title: "Wedding Guest",
        href: "example/3"
    },
    {
        title: "Staycation",
        href: "example/4"
    },
    {
        title: "Virtual Date Night",
        href: "example/5"
    }
];

function callback(key) {
    console.log(key);
}

const menu = (
    <Container className={classes.menuContainer}>
        <Row>
            <Col lg={3} md={6} sm={6}>
                <List
                    header={
                        <div className={classes.listTitle}>New</div>
                    }
                    itemLayout="horizontal"
                    dataSource={dataNew}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                title={
                                    <a className={classes.listItem} href={item.href}>{item.title}</a>
                                }
                            />
                        </List.Item>
                    )}
                />
            </Col>
            <Col lg={3} md={6} sm={6}>
                <List
                    header={
                        <div className={classes.listTitle}>Clothing</div>
                    }
                    itemLayout="horizontal"
                    dataSource={dataClothing}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                title={
                                    <a className={classes.listItem} href={item.href}>{item.title}</a>
                                }
                            />
                        </List.Item>
                    )}
                />
            </Col>
            <Col lg={3} md={6} sm={6}>
                <List
                    header={
                        <div className={classes.listTitle}>Accessories</div>
                    }
                    itemLayout="horizontal"
                    dataSource={dataAccessories}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                title={
                                    <a className={classes.listItem} href={item.href}>{item.title}</a>
                                }
                            />
                        </List.Item>
                    )}
                />
            </Col>
            <Col lg={3} md={6} sm={6}>
                <List
                    header={
                        <div className={classes.listTitle}>Accessories</div>
                    }
                    itemLayout="horizontal"
                    dataSource={dataOccasions}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                title={
                                    <a className={classes.listItem} href={item.href}>{item.title}</a>
                                }
                            />
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
    </Container>
);

/*end data*/

const Header = (props) => {
    return (
        <section className={`${classes.header} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <Navbar collapseOnSelect expand="lg" className="p-0">
                <div className={classes.wrapper}>
                    <div className={classes.hiddenElement}>
                        <Navbar.Brand href="#home">
                            <MethodLogotype/>
                        </Navbar.Brand>
                    </div>

                    <div className={classes.search}>
                        <a onClick={props.trigger}>
                            <Badge dot={props.subtotal > 0}>
                                <Cart/>
                            </Badge>
                        </a>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />
                </div>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#work">Work</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                        </Nav>
                        <Navbar.Brand href="#home">
                            <MethodLogotype/>
                        </Navbar.Brand>
                        <div className={classes.active}>
                            <Dropdown overlay={menu} overlayClassName={`${classes.dropdown}  ${(props.dark) ? `${classes.dark}` : ''}`}>
                                <a className={classes.link} onClick={e => e.preventDefault()}>
                                    Shop
                                </a>
                            </Dropdown>
                            <a className={classes.link}>
                                Account
                            </a>
                            <a className={classes.link} onClick={props.trigger}>
                                Cart ({props.count})
                            </a>
                        </div>
                        <div className={classes.hiddenElements}>
                            <Collapse bordered={false} defaultActiveKey={['1']} expandIconPosition="right"  expandIcon={({ isActive }) => isActive ? <MinusOutlined/> : <PlusOutlined /> }>
                                <Panel header="New" key="1">
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={dataNew}
                                        renderItem={(item) => (
                                            <List.Item>
                                                <List.Item.Meta
                                                    title={
                                                        <a className={classes.listItem} href={item.href}>{item.title}</a>
                                                    }
                                                />
                                            </List.Item>
                                        )}
                                    />
                                </Panel>
                                <Panel header="Clothing" key="2">
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={dataClothing}
                                        renderItem={(item) => (
                                            <List.Item>
                                                <List.Item.Meta
                                                    title={
                                                        <a className={classes.listItem} href={item.href}>{item.title}</a>
                                                    }
                                                />
                                            </List.Item>
                                        )}
                                    />
                                </Panel>
                                <Panel header="Accessories" key="3">
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={dataAccessories}
                                        renderItem={(item) => (
                                            <List.Item>
                                                <List.Item.Meta
                                                    title={
                                                        <a className={classes.listItem} href={item.href}>{item.title}</a>
                                                    }
                                                />
                                            </List.Item>
                                        )}
                                    />
                                </Panel>
                                <Panel header="Accessories" key="4">
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={dataOccasions}
                                        renderItem={(item) => (
                                            <List.Item>
                                                <List.Item.Meta
                                                    title={
                                                        <a className={classes.listItem} href={item.href}>{item.title}</a>
                                                    }
                                                />
                                            </List.Item>
                                        )}
                                    />
                                </Panel>
                            </Collapse>

                            <a className={classes.user}>
                                <UserBordered/> Аccount
                            </a>
                            <Form className="form">
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            </Form>
                            <Socials />
                        </div>
                    </Navbar.Collapse>
            </Navbar>
        </section>
    )
}

export default Header