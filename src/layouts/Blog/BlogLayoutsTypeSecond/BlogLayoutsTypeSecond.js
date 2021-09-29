import { Row, Col, Container } from "reactstrap";
import React, { Component } from "react";

import Card from "./Card/Card";
import CustomInput from "../../../components/CustomInput/CustomInput";
import {Search} from "../../../components/Icons/Icons";
import placeholder from "../../../img/placeholder-gray.png";

import classes from "./BlogLayoutsTypeSecond.module.css"
import { Fade } from "react-awesome-reveal";

const postForView = 100;
const title = "Our Blog";

class BlogLayoutsTypeSecond extends Component {

    state = {
        postForView: postForView,
        posts: [
            {
                title: 'Using 6 Google Analytics Features to Improve User Experience',
                description: 'Create screens directly in Method or add your images from Sketch or Figma.',
                id: 1,
                link: '#/some-link#1',
                poster: null,
                latest: true,
                category: 'marketing',
                reading: '4'
            },
            {
                title: 'Understanding Learnability for Web Design: Tips and Best Practices',
                description: 'Create screens directly in Method or add your images from Sketch or Figma.',
                id: 2,
                link: '#/some-link#2',
                poster: null,
                latest: true,
                category: 'marketing',
                reading: '13'
            },
            {
                title: 'Using 6 Google Analytics Features to Improve User Experience',
                description: 'Create screens directly in Method or add your images from Sketch or Figma.',
                id: 3,
                link: '#/some-link#1',
                poster: null,
                latest: true,
                category: 'design',
                reading: '4'
            },
            {
                title: 'Understanding Learnability for Web Design: Tips and Best Practices',
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
                title: 'Understanding Learnability for Web Design: Tips and Best Practices',
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
                <Col lg={4} md={6} sm={6} className={classes.item} key={index}>
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
                            <Row className={classes.headerRow}>
                                <Col xl="4" lg="6" sm="6" xs="6" className={classes.left}>
                                    <h1 className={classes.title}>{title}</h1>
                                </Col>
                                <Col lg="4" md="6" sm="6" xs="6" className={classes.right}>
                                    <CustomInput
                                        controlId="FormInputName"
                                        dark={(this.props.dark == true) ? true : null}
                                        name="name"
                                        placeholder="Search"
                                        simple={false}
                                        leftIcon={true}
                                        icon={<Search/>}
                                    />
                                </Col>
                            </Row>

                            <Row className={classes.contentRow}>
                                {this.renderCards()}
                            </Row>
                        </Container>
                    </div>
                </section>
            </div>
        )
    }
}

export default BlogLayoutsTypeSecond
