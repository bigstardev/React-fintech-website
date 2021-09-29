import { Row, Col, Container } from "reactstrap";
import React, { Component } from "react";
import StickyBox from "react-sticky-box";

import placeholder from "../../../img/placeholder-gray.png";
import classes from "./BlogLayoutsTypeEighth.module.css"
import { Fade } from "react-awesome-reveal";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import SocialsLinks from "../../../components/Socials/Socials";
import {Google, LinkedIn, Twitter} from "../../../components/Icons/Icons";
import Oval from "../../../components/Frame/Frame";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class BlogLayoutsTypeEighth extends Component {

    state = {
        blog:{
            title: 'Using 6 Google Analytics Features to Improve User Experience',
            category: 'product',
            reading: '4',
            date: 'November 6, 2020',
            subtitle: 'Take a look at the behavior flow is a great way to analyze the current user journey to optimize further.',
            cover: placeholder,
            content: `
                      <h3>Behavior Flow</h3>
                      <p>Behavior flow in Google Analytics identifies pages, volume of traffic, and paths of traffic, such as the most common routes visitors take to get in and out of specific pages. You can get a great view of the overall flow of traffic surrounding a specific page, customer journey, or funnel. When you compare the behavior flow against the time spent on your site, you can quickly identify pages that are bridges and areas of the site, which are conversion hubs.</p>
                      <h3>Looking at User Behavior with Analytics</h3>
                      <p>When you compare the behavior flow against the time spent on your site, you can quickly identify pages that are bridges and areas of the site, which are conversion hubs.</p>
                      <ul>
                        <li>Which pages do visitors land on?</li>
                        <li> Where do they exit the site?</li>
                        <li>Whether or not they converted?</li>
                      </ul>
`
        }
    }

    render() {
        const {title, subtitle, cover, content, category, reading, date} = this.state.blog;
        const string = capitalizeFirstLetter(category);

        return (
            <div>
                <section className={`section  ${classes.blog} ${(this.props.dark) ? `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row style={{alignItems: 'start'}}>
                                <StickyBox offsetTop={50} offsetBottom={50} style={{marginTop: '30%'}} className={classes.sticky}>
                                    <SocialsLinks>
                                        <a href="#">
                                            <Oval
                                                variant="normal"
                                            >
                                                <Twitter/>
                                            </Oval>

                                        </a>
                                        <a href="#">
                                            <Oval
                                                variant="normal"
                                            >
                                                <LinkedIn/>
                                            </Oval>
                                        </a>
                                        <a href="#">
                                            <Oval
                                                variant="normal"
                                            >
                                                <Google/>
                                            </Oval>
                                        </a>
                                    </SocialsLinks>
                                </StickyBox>
                                <Col lg="8" sm="10" className="mx-auto">
                                    <Fade down triggerOnce={true}>
                                        <div className={classes.header}>
                                            <span>{string}</span>
                                            <span>{reading} min read</span>
                                            <span>{date}</span>
                                        </div>
                                        <h1 className={classes.title}>
                                            {title}
                                        </h1>
                                        <p className={classes.subtitle}>
                                            {subtitle}
                                        </p>
                                        <img className={classes.cover} src={cover} alt=""/>
                                        { ReactHtmlParser(content) }

                                        <div className={classes.bottom}>
                                            <SocialsLinks  dark={this.props.dark ? true : false}>
                                                <a href="#">
                                                    <Twitter/>
                                                </a>
                                                <a href="#">
                                                    <LinkedIn/>
                                                </a>
                                                <a href="#">
                                                    <Google/>
                                                </a>
                                            </SocialsLinks>
                                        </div>
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

export default BlogLayoutsTypeEighth
