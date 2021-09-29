import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import classes from './TestimonialsLayoutsTypeTenth.module.css';

import Testimonial from "./Testimonial/TestimonialTypeTenth";

import Slider from "./Slider/Slider";
import {Avatar} from "antd";
import {User} from "../../../components/Icons/Icons";


class TestimonialsLayoutsTypeTenth extends Component {

    state = {
        persons: [
            {
                name: 'Dany Monson',
                post: 'CEO & Founder',
                description: 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque.   ',
                socialLink: '/some-link',
                avatar: null
            },
            {
                name: 'Baha Moretz',
                post: 'Art Director',
                description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. ',
                socialLink: '/some-link',
                avatar: null
            },
            {
                name: 'Dany Monson',
                post: 'CEO & Founder Craftwork',
                description: 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. ',
                socialLink: '/some-link',
                avatar: null
            },
            {
                name: 'Polly Clark',
                post: 'Manager',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                socialLink: '/some-link',
                avatar: null
            },
            {
                name: 'Markus Johnson',
                post: 'Front End Engineer',
                description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. ',
                socialLink: '/some-link',
                avatar: null
            },
            {
                name: 'Terry Valdez',
                post: 'Support',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                socialLink: '/some-link',
                avatar: null
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
                    link={item.socialLink}
                    description={item.description}
                    dark={this.props.dark ? true : false}
                >
                    {item.avatar ?
                        <Avatar
                            size={60}
                            src={item.avatar}
                        />
                        :
                        <Avatar
                            size={60}
                            icon={<User fill={"#ffffff"}/>}
                            style={{
                                fontSize: 0,
                                backgroundColor: '#345DEE',
                            }}
                        />
                    }
                </Testimonial>
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
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row className={classes.testimonialsRow}>

                                <Col lg="10" md="10" sm="10" className="mx-auto">
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

export default TestimonialsLayoutsTypeTenth
