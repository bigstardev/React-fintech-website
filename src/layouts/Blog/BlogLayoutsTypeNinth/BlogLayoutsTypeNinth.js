import { Row, Col, Container } from "reactstrap";
import React, { Component } from "react";
import placeholder from "../../../img/placeholder-gray.png";
import classes from "./BlogLayoutsTypeNinth.module.css"
import { Fade } from "react-awesome-reveal";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import SocialsLinks from "../../../components/Socials/Socials";
import {Google, LinkedIn, Twitter, User} from "../../../components/Icons/Icons";
import {Avatar, List} from "antd";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const data = [
    {
        title: 'Looking at User Behavio with Analytics',
        link: '/link/1'
    },
    {
        title: 'Behavior Flow',
        link: '/link/2'
    },
    {
        title: 'How are people move around your site',
        link: '/link/3'
    },
    {
        title: 'Questions behavior flows answer',
        link: '/link/4'
    },
    {
        title: 'Event Tracking',
        link: '/link/5'
    },
];

class BlogLayoutsTypeNinth extends Component {

    state = {
        blog:{
            author: {
                name: 'Austin Henderson',
                post: 'Marketer',
                avatar: null,
                link: './some-link'
            },
            title: 'Using 6 Google Analytics Features to Improve User Experience',
            category: 'product',
            slug: 'Questions behavior flows answer',
            date: 'November 6, 2020',
            cover: placeholder,
            content: `<b>Analytics is a fantastic tool because it eliminates the guesswork as to how visitors behave on a website. Conversion rates are one of the top priorities for many marketing websites, and Analytics can certainly help give you insight as to why the conversion rate is what it is.</b>
                      <p>Google Analytics is a tool for improving products, not just marketing websites. It tells  you exactly what users are doing, where they’re coming from, how long they engaged, and so on.</p>
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
        const {title, cover, content, category, date, author ,slug} = this.state.blog;
        const {name, post, avatar, link} = author;
        const string = capitalizeFirstLetter(category);

        return (
            <div>
                <section className={`section  ${classes.blog} ${(this.props.dark) ? `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row >
                                <Col lg={5} className={classes.headerCol}>
                                    <Fade down triggerOnce={true}>
                                        <div className={classes.header}>
                                            <span>{string}</span>
                                            <span>{date}</span>
                                        </div>
                                    </Fade>
                                </Col>
                                <Col lg={10} className="mx-auto">
                                    <Fade down triggerOnce={true} delay={50}>
                                        <h1 className={classes.title}>
                                            {title}
                                        </h1>
                                    </Fade>
                                </Col>
                                <Col lg="12" >
                                    <Fade down triggerOnce={true} delay={100}>
                                        <img className={classes.cover} src={cover} alt=""/>
                                    </Fade>
                                </Col>
                            </Row>
                            <Row className={classes.contentRow}>
                                <Col lg={4} className={classes.leftColumn}>
                                    <Fade down triggerOnce={true} delay={150}>
                                        <List
                                            itemLayout="horizontal"
                                            dataSource={data}
                                            renderItem={item => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                        title={
                                                            <a
                                                                className={`${classes.listLink} ${item.title === slug ? `${classes.activeLink}` : ''}`}
                                                                href={item.link}
                                                            >
                                                                {item.title}
                                                            </a>
                                                        }
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                        <div className={classes.socials}>
                                            <div style={{marginBottom: '10px'}}>Share</div>
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
                                <Col lg={8}>
                                    <Fade down triggerOnce={true} delay={200}>
                                        { ReactHtmlParser(content) }
                                        <div className={classes.author}>
                                            <a href={link} className={classes.link}>
                                                {avatar ?
                                                    <Avatar
                                                        size={60}
                                                        src={avatar}
                                                    />
                                                    :
                                                    <Avatar
                                                        size={60}
                                                        icon={<User/>}
                                                        style={{
                                                            fontSize: 0,
                                                            backgroundColor: '#EFF2F6',
                                                        }}
                                                    />
                                                }
                                            </a>
                                            <div className={classes.info}>
                                                <div className={classes.name}>
                                                    <a href={link} className={classes.link}>
                                                        {name}
                                                    </a>
                                                </div>
                                                <div className={classes.post}>
                                                    {post}
                                                </div>
                                            </div>
                                            <div className={classes.hiddenSocials}>
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

export default BlogLayoutsTypeNinth
