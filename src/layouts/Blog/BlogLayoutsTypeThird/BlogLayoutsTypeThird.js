import { Row, Col, Container } from "reactstrap";
import React, { Component } from "react";

import Card from "./Card/Card";
import placeholder from "../../../img/placeholder-gray.png";

import classes from "./BlogLayoutsTypeThird.module.css";
import { Fade } from "react-awesome-reveal";

const postForView = 5;

class BlogLayoutsTypeThird extends Component {

    state = {
        postForView: postForView,
        posts: [
            {
                title: 'A Beginner’s Guide to Voice UX Prototyping',
                description: 'Create screens directly in Method or add your images\n' +
                    'from Sketch or Figma. ',
                id: 1,
                link: '#/some-link#1',
                poster: null,
                latest: true,
                category: 'marketing',
                reading: '4'
            },
            {
                title: '6 Creative Ways to Use  Repeat Grids in Adobe XD',
                description: 'Create screens directly in Method or add your images from Sketch or Figma.',
                id: 2,
                link: '#/some-link#2',
                poster: null,
                latest: true,
                category: 'marketing',
                reading: '13'
            },
            {
                title: 'Using 6 Analytics Features to Improve User Experience',
                description: 'Create screens directly in Method or add your images from Sketch or Figma.',
                id: 3,
                link: '#/some-link#1',
                poster: null,
                latest: true,
                category: 'design',
                reading: '4'
            },
            {
                title: 'The Design Side Of Conversion Rate Optimization',
                description: 'Create screens directly in Method or add your images from Sketch or Figma.',
                id: 4,
                link: '#/some-link#2',
                poster: null,
                latest: true,
                category: 'design',
                reading: '13'
            },
            {
                title: 'Using 6 Google Analytics Features to Improve User Experience',
                description: 'Create screens directly in Method or add your images from Sketch or Figma.',
                id: 5,
                link: '#/some-link#3',
                poster: null,
                latest: true,
                category: 'product',
                reading: '4'
            },
            {
                title: 'Using 6 Analytics Features to Improve User Experience',
                description: 'Create screens directly in Method or add your images from Sketch or Figma.',
                id: 6,
                link: '#/some-link#4',
                poster: null,
                latest: true,
                category: 'product',
                reading: '13'
            },
            {
                title: 'Using 6 Google Analytics Features to Improve User Experience',
                description: 'Create screens directly in Method or add your images from Sketch or Figma.',
                id: 7,
                link: '#/some-link#5',
                poster: null,
                latest: true,
                category: 'updates',
                reading: '4'
            },
            {
                title: 'Understanding Learnability for Web Design: Tips and Best Practices',
                description: 'Create screens directly in Method or add your images from Sketch or Figma.',
                id: 8,
                link: '#/some-link#6',
                poster: null,
                latest: true,
                category: 'updates',
                reading: '13'
            },
        ],
    }

    renderCard() {
        const card = this.state.posts;
        const listItem = card.filter((element, index) => {
                if (index === 0) {
                    return true
                }
            }
        ).map((item, index) => {
            return (
                <div className={classes.item} key={index}>
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
                </div>
            )
        });
        return (
            <>
                {listItem}
            </>
        );
    }

    renderCards() {
        const card = this.state.posts;
        const listItems = card.filter((element, index) => {
                if (index < this.state.postForView  && index != 0) {
                    return true
                }
            }
        ).map((item, index) => {
            return (
                <div className={classes.item} key={index}>
                    <Fade down delay={`${index}1`} triggerOnce={true}>
                        <Card
                            title={item.title}
                            description={item.description}
                            category={item.category}
                            reading={item.reading}
                            cover={item.cover ? item.cover : placeholder}
                            dark={this.props.dark ? true : false}
                            custom={true}
                        />
                    </Fade>
                </div>
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
                                <Col lg={6} md={6} className={classes.leftColumn}>
                                    {this.renderCard()}
                                </Col>
                                <Col lg={6} md={6} className={classes.rightColumn}>
                                    {this.renderCards()}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </div>
        )
    }
}

export default BlogLayoutsTypeThird
