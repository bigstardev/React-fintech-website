import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";

import Testimonial from "./Testimonial/TestimonialTypeNinth";
import {Avatar} from "antd";
import {User} from "../../../components/Icons/Icons";
import classes from "./TestimonialsLayoutsTypeNinth.module.css"
import {Fade} from "react-awesome-reveal";

const title = "Testimonials";

class TestimonialsLayoutsTypeNinth extends Component {

    state = {
        renderPerson: 3,
        person: [
            {
                name: 'Dany Monson',
                post: 'CEO & Founder',
                id: 1,
                socialLink: '/some-link',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                avatar: null

            },
            {
                name: 'Baha Moretz',
                post: 'Art Director',
                id: 2,
                socialLink: '/some-link',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                avatar: null
            },
            {
                name: 'Dima Grinchenko',
                post: 'Front End Developer',
                id: 3,
                socialLink: '/some-link',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                avatar: null
            },
            {
                name: 'Polly Clark',
                post: 'Manager',
                id: 4,
                socialLink: '/some-link',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                avatar: null
            },
            {
                name: 'Markus Johnson',
                post: 'Front End Engineer',
                id: 5,
                socialLink: '/some-link',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                avatar: null
            },
            {
                name: 'Terry Valdez',
                post: 'Support',
                id: 6,
                socialLink: '/some-link',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                avatar: null
            }
        ]
    }

    buttonClickHandler = (event) => {
        event.preventDefault();
        this.setState({renderPerson: this.state.person.length});
    }

    renderCards () {
        const card = this.state.person;
        const listItems = card.filter((element) => {
                if (element.id <= this.state.renderPerson) {
                    return true
                }
            }
        ).map((item, index) => {
            return (
                <Col lg="4" md="4"  className={classes.item} key={index}>
                    <Fade down delay={`${index}1`} triggerOnce={true}>
                        <Testimonial
                            person={item.name}
                            post={item.post}
                            descr={item.description}
                            link={item.socialLink}
                            dark={this.props.dark ? true : false}
                        >
                            {item.avatar ?
                                <Avatar
                                    size={50}
                                    src={item.avatar}
                                />
                                :
                                <Avatar
                                    size={50}
                                    icon={<User fill={"#ffffff"}/>}
                                    style={{
                                        fontSize: 0,
                                        backgroundColor: '#345DEE',
                                    }}
                                />
                            }

                        </Testimonial>

                    </Fade>
                </Col>
                )

        });
        return (
            <>{listItems}</>
        );
    }

    render() {

        return (
            <div>
                <section className={`section ${classes.testimonials} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row className={classes.headerRow}>
                                <Col className={`col-auto ${classes.col}`}>
                                    <Fade down triggerOnce={true}>
                                        <h1 className={`title ${classes.title}`}>{title}</h1>
                                    </Fade>
                                </Col>
                                <Col className={`col-auto ml-auto text-right d-flex align-items-center ${classes.col}`}>
                                {this.state.renderPerson <= 3 &&
                                  <Fade down triggerOnce={true}>
                                      <a href="#" className={classes.seeAll} onClick={this.buttonClickHandler}>See All</a>
                                  </Fade>
                                }
                                </Col>
                            </Row>

                            <Row className={classes.testimonialsRow}>
                                {this.renderCards()}
                            </Row>
                        </Container>
                    </div>
                </section>
            </div>
        )
    }
}

export default TestimonialsLayoutsTypeNinth
