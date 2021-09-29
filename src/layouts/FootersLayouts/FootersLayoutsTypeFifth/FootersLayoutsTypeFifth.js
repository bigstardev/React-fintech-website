import React, {Component} from "react";

import {Container, Col , Row} from "reactstrap";
import {Google, LinkedIn, Twitter} from "../../../components/Icons/Icons";
import Socials from "../../../components/Socials/Socials";
import Divider from "../../../components/Divider/Divider";

import Tweet from "./Tweet/Tweet";
import Tweets from "./Tweets/Tweets";
import classes from "./FootersLayoutsTypeFifth.module.css"
import {Fade} from "react-awesome-reveal";


class FootersLayoutsTypeFifth extends Component  {

    state = {
        tweets: [
            {
                content: 'Introducing you YouTube redesign concept. There are 3 web screens, 3 mobile and dark mode. Sources compatible with Figma & Sketch. Enjoy for free and spread the word!',
            },
            {
                content: 'Introducing you YouTube redesign concept. There are 3 web screens, 3 mobile',
            },
        ]
    }

    renderTweets () {
        const card = this.state.tweets;
        const listItems = card.map((item, index) => {
                return (
                    <Tweet
                        key={index}
                        dark={this.props.dark ? true : false}
                        content={item.content}
                    />
                )
        });
        return (
            <div className={classes.tweets}>
                <Tweets>{listItems}</Tweets>
            </div>
        );
    }

    render() {

        return (
            <React.Fragment>
                <section className={`section  ${classes.footer} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row>
                                <Col lg="4" md="4">
                                    <Fade top triggerOnce={true}>
                                        <header>Latest Tweets</header>
                                        <div className={classes.tweets}>
                                            {this.renderTweets()}
                                        </div>
                                    </Fade>
                                </Col>
                                <Col lg={{ size: 7, offset: 1 }} md={{ size: 7, offset: 1 }} className={classes.rightColumn}>
                                    <Row>
                                        <Col lg="4" md="6" sm="5" xs="6" className={classes.item}>
                                            <Fade top delay={50} triggerOnce={true}>
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
                                                </ul>
                                            </Fade>
                                        </Col>
                                        <Col lg="3" md="6" sm="4" xs="6" className={classes.item}>
                                            <Fade top delay={100} triggerOnce={true}>
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
                                        <Col lg="5" md="8" className={classes.item}>
                                            <Fade top delay={150} triggerOnce={true}>
                                                <header>Contacts</header>
                                                <div className={classes.content}>
                                                    <p className={classes.shortDescription}>Fell free get in touch with us via phone or send us a message</p>
                                                    <a href="tel:+12345678910" className={classes.boldLink}>+1 234 567 89 10</a>
                                                    <a href="mailto:denis@craftwork.design" className={classes.boldLink}>denis@craftwork.design</a>
                                                </div>
                                            </Fade>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row className={classes.dividerRow}>
                                <Col>
                                    <Fade top delay={200} triggerOnce={true}>
                                        <Divider/>
                                    </Fade>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-auto">
                                    <Fade top delay={250} triggerOnce={true}>
                                        <p className={classes.copyright}>Copyright © 2015-2019 craftwork.design</p>
                                    </Fade>
                                </Col>
                                <Col lg="3" md="3" sm="4" className={`ml-auto d-flex align-items-center ${classes.socials}`}>
                                    <Fade top delay={300} triggerOnce={true}>
                                        <Socials dark={this.props.dark ? true : false}>
                                            <a href="#/some-link">
                                                <Twitter/>
                                            </a>
                                            <a href="#/some-link">
                                                <LinkedIn/>
                                            </a>
                                            <a href="#/some-link">
                                                <Google/>
                                            </a>
                                        </Socials>
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
export default FootersLayoutsTypeFifth
