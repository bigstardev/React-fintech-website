import { Row, Col, Container } from "reactstrap";
import React, { Component } from "react";

import Card from "./Card/Card";
import Aside from "./Aside/Aside";
import SimpleForm from "./SimpleForm/SimpleForm";
import placeholder from "../../../img/placeholder-gray.png";
import classes from "./BlogLayoutsTypeSeventh.module.css"
import { Fade } from "react-awesome-reveal";

const postForView = 2;

class BlogLayoutsTypeSeventh extends Component {

    state = {
        postForView: postForView,
        posts: [
            {
                title: '6 Creative Ways to Use  Repeat Grids in Adobe XD',
                id: 1,
                link: '#/some-link#1',
                poster: null,
                latest: true,
                category: 'marketing',
                reading: '4'
            },
            {
                title: 'Using 6 Analytics Features to Improve User Experience',
                id: 2,
                link: '#/some-link#2',
                poster: null,
                latest: true,
                category: 'marketing',
                reading: '13'
            },
            {
                title: 'A Beginner’s Guide to Voice  UX Prototyping',
                id: 3,
                link: '#/some-link#1',
                poster: null,
                latest: true,
                category: 'design',
                reading: '4'
            },
            {
                title: 'The Design Side Of Conversion Rate Optimization',
                id: 4,
                link: '#/some-link#2',
                poster: null,
                latest: true,
                category: 'design',
                reading: '13'
            },
            {
                title: 'Using 6 Google Analytics Features to Improve User Experience',
                id: 5,
                link: '#/some-link#3',
                poster: null,
                latest: true,
                category: 'product',
                reading: '4'
            },
            {
                title: 'Understanding Learnability for Web Design: Tips and Best Practices',
                id: 6,
                link: '#/some-link#4',
                poster: null,
                latest: true,
                category: 'product',
                reading: '13'
            },
            {
                title: 'Using 6 Google Analytics Features to Improve User Experience',
                id: 7,
                link: '#/some-link#5',
                poster: null,
                latest: true,
                category: 'updates',
                reading: '4'
            },
            {
                title: 'Understanding Learnability for Web Design: Tips and Best Practices',
                id: 8,
                link: '#/some-link#6',
                poster: null,
                latest: true,
                category: 'updates',
                reading: '13'
            },
        ]
    }

    renderCards() {
        const card = this.state.posts;
        const listItems = card.filter((element, index) => {
                if (index < this.state.postForView) {
                    return true
                }
            }
        ).map((item, index) => {
            return (
                <Col lg={4} md={6} className={`${classes.item} d-flex`} key={index}>
                    <Fade down delay={`${index}1`} triggerOnce={true}>
                        <Card
                            title={item.title}
                            description={item.description}
                            category={item.category}
                            reading={item.reading}
                            cover={item.cover ? item.cover : placeholder}
                            dark={this.props.dark ? true : false}
                        />
                    </Fade>
                </Col>
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
            <div>
                <section className={`section  ${classes.blog} ${(this.props.dark) ? `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row className={classes.contentRow}>
                                {this.renderCards()}
                                <Col lg={4} md={6} className={classes.aside}>
                                    <Fade down delay={150} triggerOnce={true}>
                                        <Aside
                                            dark={this.props.dark ? true : false}
                                        >
                                            <SimpleForm
                                                dark={this.props.dark ? true : false}
                                            />
                                        </Aside>
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

export default BlogLayoutsTypeSeventh
