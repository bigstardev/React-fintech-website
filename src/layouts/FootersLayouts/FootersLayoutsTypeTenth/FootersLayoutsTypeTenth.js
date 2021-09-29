import React, {Component} from "react";
import {Container, Col , Row} from "reactstrap";

import {MethodLogotype, AppStore, Google, Twitter, LinkedIn} from "../../../components/Icons/Icons";
import Badge from "../../../components/Badges/Badges";
import placeholder from "../../../img/placeholder-gray.png";
import Divider from "../../../components/Divider/Divider";
import classes from "./FootersLayoutsTypeTenth.module.css"
import {Fade} from "react-awesome-reveal";

const description = "High-quality digital resources which make your design workflow faster and easier";

class FootersLayoutsTypeTenth extends Component {

    state = {
        pictures: [
            {picture: placeholder, link: '#1' },
            {picture: placeholder, link: '#1' },
            {picture: placeholder, link: '#1' },
            {picture: placeholder, link: '#1' },
            {picture: placeholder, link: '#1' },
            {picture: placeholder, link: '#1' },
            {picture: placeholder, link: '#1' },
            {picture: placeholder, link: '#1' },
            {picture: placeholder, link: '#1' },
        ],
    }

    renderPictures () {
        const card = this.state.pictures;
        const listItems = card.map((item, index) => {
            return (
                <a href={item.link} key={index} className={classes.pictureLink}>
                    <img src={item.picture} alt=""/>
                </a>
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
            <React.Fragment>
                <section className={`section  ${classes.footer} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row>
                                <Col lg="3" md="3">
                                    <a href="#" className={classes.logotype}>
                                        <Fade top triggerOnce={true}>
                                            <MethodLogotype/>
                                        </Fade>
                                    </a>
                                    <Fade top delay={50} triggerOnce={true}>
                                        <p className={classes.description}>{description}</p>
                                    </Fade>
                                    <div className={classes.badgeLink}>
                                        <Fade top delay={100} triggerOnce={true}>
                                            <Badge
                                                store={"app"}
                                            >
                                                <AppStore/>
                                            </Badge>
                                        </Fade>
                                    </div>
                                </Col>
                                <Col lg={{ size: 8, offset: 1 }} md={{ size: 8, offset: 1 }} className={classes.rightColumn}>
                                    <Row>
                                        <Col lg="3" md="6" sm="6" xs="6" className={classes.item}>
                                            <Fade top delay={150} triggerOnce={true}>
                                                <header>Products</header>
                                                <ul className={classes.companyList}>
                                                    <li className={classes.companyItem}>
                                                        <a href="#">Design Systems</a>
                                                    </li>
                                                    <li className={classes.companyItem}>
                                                        <a href="#">Themes & Templates</a>
                                                    </li>
                                                    <li className={classes.companyItem}>
                                                        <a href="#">Mockups</a>
                                                    </li>
                                                    <li className={classes.companyItem}>
                                                        <a href="#">Presentations</a>
                                                    </li>
                                                    <li className={classes.companyItem}>
                                                        <a href="#">Wireframes Kits</a>
                                                    </li>
                                                    <li className={classes.companyItem}>
                                                        <a href="#">UI Kits</a>
                                                    </li>
                                                </ul>
                                            </Fade>
                                        </Col>
                                        <Col lg="3" md="6" sm="6" xs="6" className={classes.item}>
                                            <Fade top delay={200} triggerOnce={true}>
                                                <header>Legals</header>
                                                <ul className={classes.companyList}>
                                                    <li className={classes.companyItem}>
                                                        <a href="#">License</a>
                                                    </li>
                                                    <li className={classes.companyItem}>
                                                        <a href="#">Refund Policy</a>
                                                    </li>
                                                    <li className={classes.companyItem}>
                                                        <a href="#">About Us</a>
                                                    </li>
                                                    <li className={classes.companyItem}>
                                                        <a href="#">Contacts</a>
                                                    </li>
                                                </ul>
                                            </Fade>
                                        </Col>
                                        <Col lg="5" md="6" className={`${classes.item} ml-auto`}>
                                            <Fade top delay={250} triggerOnce={true}>
                                                <header>Instagram</header>
                                                <div className={classes.pictures}>
                                                    {this.renderPictures()}
                                                </div>
                                            </Fade>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row className={classes.dividerRow}>
                                <Col>
                                    <Fade top delay={300} triggerOnce={true}>
                                        <Divider/>
                                    </Fade>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-auto">
                                    <Fade top delay={350} triggerOnce={true}>
                                        <p className={classes.copyright}>Copyright © 2015-2019 craftwork.design</p>
                                    </Fade>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </React.Fragment>
        )
    }

}
export default FootersLayoutsTypeTenth
