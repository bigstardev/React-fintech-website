import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";

import Testimonial from "./Testimonial/TestimonialsTypeThird";
import {Google, LinkedIn, Twitter, User} from "../../../components/Icons/Icons";

import {Avatar} from "antd";
import Slider from "./Slider/Slider";
import classes from "./TestimonialsLayoutsTypeThird.module.css"


class TestimonialsLayoutsTypeThird extends Component {

    state = {
        persons: [
            {
                name: 'Dany Monson',
                post: 'CEO & Founder',
                description: 'Professionals in their craft! All products were super great with strong attention to details, and overall vibe',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
               link: './some-link',
            },
            {
                name: 'Baha Moretz',
                post: 'Art Director',
                description: 'Professionals in their craft! All products were super great with strong attention to details, and overall vibe',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
                link: './some-link',
            },
            {
                name: 'Dany Monson',
                post: 'CEO & Founder ',
                description: 'You can even sync designs from your cloud storage!',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
                link: './some-link',
            },
            {
                name: 'Polly Clark',
                post: 'Manager',
                description: 'Professionals in their craft! All products were super great with strong attention to details, and overall vibe',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
                link: './some-link',
            },
            {
                name: 'Markus Johnson',
                post: 'Front End Engineer',
                description: 'You can even sync designs from your cloud storage!',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
                link: './some-link',
            },
            {
                name: 'Terry Valdez',
                post: 'Support',
                description: 'Professionals in their craft! All products were super great with strong attention to details, and overall vibe',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
                link: './some-link',
            },
            {
                name: 'Dany Monson',
                post: 'CEO & Founder',
                description: 'You can even sync designs from your cloud storage!',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
                link: './some-link',
            },
            {
                name: 'Baha Moretz',
                post: 'Art Director',
                description: 'Professionals in their craft! All products were super great with strong attention to details, and overall vibe',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                ],
                link: './some-link',
            }
        ]
    }

    renderCards () {
        const card = this.state.persons;
        const listItems = card.map((item, index) => {
            return (
                <Testimonial
                    key={index}
                    person={item.name}
                    post={item.post}
                    description={item.description}
                    dark={this.props.dark ? true : false}
                    link={item.link}
                    avatar={
                        item.avatar ?
                            <Avatar
                                shape="square"
                                size={445}
                                src={item.avatar}
                            />
                            :
                            <Avatar
                                shape="square"
                                size={445}
                                icon={<User fill={"#ffffff"}/>}
                                style={{
                                    fontSize: 0,
                                    backgroundColor: '#345DEE',
                                }}
                            />
                    }

                />

            )
        });
        return (
            <Slider
                array={listItems}
                dark={this.props.dark ? true : false}
            />
        );
    }

    render() {

        return (
            <div>
                <section className={`section ${classes.testimonials} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                        <Container>
                            <Row className={classes.testimonialsRow}>
                                <Col className="p-0">
                                    {this.renderCards()}
                                </Col>
                            </Row>
                        </Container>
                </section>
            </div>
        )
    }
}

export default TestimonialsLayoutsTypeThird