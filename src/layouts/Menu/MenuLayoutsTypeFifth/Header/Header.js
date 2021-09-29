import React from "react";
import classes from "./Header.module.css"
import {Nav, Navbar, Form, FormControl} from "react-bootstrap";
import {AppLogo, MethodLogotype} from "../../../../components/Icons/Icons";
import Socials from "../Socials/Socials";
import { Input } from 'antd';
const { Search } = Input;

const Header = (props) => {
    return (
        <section className={`${classes.header} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <Navbar collapseOnSelect expand="lg" className="p-0">
                    <div className={classes.wrapper}>
                        <Navbar.Brand href="#home">
                            <MethodLogotype/> <span>Blog</span>
                        </Navbar.Brand>
                        <div className={classes.search}>
                            <Search
                                onSearch={value => console.log(value)}
                                style={{ width: 150 }}
                            />
                        </div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#marketing">Marketing</Nav.Link>
                            <Nav.Link href="#design">Design</Nav.Link>
                            <Nav.Link href="#product">Product</Nav.Link>
                            <Nav.Link href="#updates">Updates</Nav.Link>
                            <Nav.Link href="#development">Development</Nav.Link>
                        </Nav>
                        <div className="hidden-element">
                            <Search
                                onSearch={value => console.log(value)}
                                style={{ width: 150 }}
                            />
                        </div>
                        <div className={classes.hiddenElements}>
                            <Form className="form">
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            </Form>
                            <Socials/>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
        </section>
    )
}

export default Header