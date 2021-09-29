import { Row, Col, Container } from "reactstrap";
import React, { Component } from "react";

import Card from "./Card/Card";
import placeholder from "../../../img/placeholder-gray.png";
import classes from "./BlogLayoutsTypeSixth.module.css"
import { Fade } from "react-awesome-reveal";

const postForView = 5;
const title = "Marketing";

class BlogLayoutsTypeSixth extends Component {

    state = {
        posts: [
            {
                title: '6 Creative Ways to Use  Repeat Grids in Adobe XD',
                description: 'Create screens directly in Method or add your images from Sketch or Figma.',
                id: 1,
                link: '#/some-link#1',
                poster: null,
                latest: true,
                category: 'marketing',
                reading: '4',
                preview: false
            },
            {
                title: 'Using 6 Analytics Features to Improve User Experience',
                description: 'Create screens directly in Method or add your images from Sketch or Figma.',
                id: 2,
                link: '#/some-link#2',
                poster: null,
                latest: true,
                category: 'marketing',
                reading: '13',
                preview: false
            },
            {
                title: 'A Beginner’s Guide to Voice  UX Prototyping',
                description: 'Create screens directly in Method or add your images from Sketch or Figma.',
                id: 3,
                link: '#/some-link#1',
                poster: null,
                latest: true,
                category: 'design',
                reading: '4',
                preview: false
            },

            {
                title: 'Using 6 Google Analytics Features to Improve User Experience',
                description: 'Create screens directly in Method or add your images from Sketch or Figma.',
                id: 5,
                link: '#/some-link#3',
                poster: null,
                latest: true,
                category: 'product',
                reading: '4',
            },
            {
                title: 'Understanding Learnability for Web Design: Tips and Best Practices',
                description: 'Create screens directly in Method or add your images from Sketch or Figma.',
                id: 6,
                link: '#/some-link#4',
                poster: null,
                latest: true,
                category: 'product',
                reading: '13',
            },
        ]
    }

    renderCustomCards() {
        const card = this.state.posts;
        const listItems = card.filter((element, index) => {
                if (element.preview === false) {
                    return true
                }
            }
        ).map((item, index) => {
            return (
                <div className={classes.item} key={index}>
                    <Fade down delay={`${index}1`} triggerOnce={true}>
                        <Card
                            title={item.title}
                            category={item.category}
                            reading={item.reading}
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

    renderCards() {
        const card = this.state.posts;
        const listItems = card.filter((element, index) => {
                if (element.preview !== false) {
                    return true
                }
            }
        ).map((item, index) => {
            return (
                <div className={classes.item} key={index}>
                    <Fade down delay={`${index}1`} triggerOnce={true}>
                        <Card
                            title={item.title}
                            category={item.category}
                            cover={item.cover ? item.cover : placeholder}
                            reading={item.reading}
                            dark={this.props.dark ? true : false}
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
                                <Col lg={8} className={classes.leftColumn}>
                                   <div className={classes.customWrapper}>
                                       {this.renderCards()}
                                   </div>
                                </Col>
                                <Col lg={4} className={classes.rightColumn}>
                                    <div className={classes.customWrapper}>
                                        {this.renderCustomCards()}
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </div>
        )
    }
}

export default BlogLayoutsTypeSixth
