import React from "react";
import classes from "./Header.module.css"
import {Nav, Navbar, Form, FormControl} from "react-bootstrap";
import {MethodLogotype, AppLogo} from "../../../../components/Icons/Icons";
import Button from "../../../../components/Button/Button";
import Socials from "../Socials/Socials";
import { Input } from 'antd';
import Fade from "react-reveal/Fade";
import {Col} from "reactstrap";
const { Search } = Input;

const Header = (props) => {
    return (
        <section className={`${classes.header} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <Navbar collapseOnSelect expand="md" className="p-0">
                <div className={classes.wrapper}>
                        <Navbar.Brand href="#home">
                            <AppLogo
                            />
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
                        <div className={classes.hiddenElements}>
                            <Form className="form">
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            </Form>
                            <Socials text="Follow us"/>
                        </div>
                    </Navbar.Collapse>
            </Navbar>
        </section>
    )
}

export default Header