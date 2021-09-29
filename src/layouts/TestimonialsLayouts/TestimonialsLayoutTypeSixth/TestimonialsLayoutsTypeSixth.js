import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";

import Testimonial from "./Testimonial/TestimonialTypeSixth";
import {User} from "../../../components/Icons/Icons";
import {Avatar} from "antd";
import classes from "./TestimonialsLayoutsTypeSixth.module.css"
import {Fade} from "react-awesome-reveal";

const title = "Testimonials";
const personForView = 4;
class TestimonialsLayoutsTypeSixth extends Component {

    state = {
        renderPerson: personForView ,
        person: [
            {
                name: 'Dany Monson',
                post: 'CEO & Founder',
                id: 1,
                socialLink: '/some-link',
                description: 'Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id.',
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
                description: 'Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id.',
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

    renderCards () {
        const card = this.state.person;
        const listItems = card.filter((element) => {
                if (element.id <= this.state.renderPerson) {
                    return true
                }
            }
        ).map((item, index) => {
            return (
                <Col lg="6" md="6" sm={6}  className={classes.item} key={index}>
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
                                    size={95}
                                    src={item.avatar}
                                />
                                :
                                <Avatar
                                    size={95}
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
                    <div className={`grid-wrapper`}>
                        <Container>
                            <Row>
                                <Col lg="8" md="8" className="mx-auto">
                                    <Fade top triggerOnce={true}>
                                        <h1 className={`title text-center ${classes.title}`}>{title}</h1>
                                    </Fade>
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

export default TestimonialsLayoutsTypeSixth