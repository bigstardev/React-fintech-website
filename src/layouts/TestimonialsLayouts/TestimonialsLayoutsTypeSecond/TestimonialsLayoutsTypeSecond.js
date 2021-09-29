import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";

import Testimonial from "./Testimonial/TestimonialsTypeSecond";
import Slider from "./Slider/Slider";
import {Avatar} from "antd";
import {User} from "../../../components/Icons/Icons";
import classes from "./TestimonialsLayoutsTypeSecond.module.css"

const avatar = [
    null,
    null,
    null,
    null,
    null,
    null
]


class TestimonialsLayoutsTypeSecond extends Component {

    state = {
        persons: [
            {
                name: 'Dany Monson',
                post: 'CEO & Founder',
                description: 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque.   ',
                avatar: null,
                link: './some-link'
            },
            {
                name: 'Baha Moretz',
                post: 'Art Director',
                description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. ',
                avatar: null,
                link: './some-link'
            },
            {
                name: 'Dany Monson',
                post: 'CEO & Founder Craftwork',
                description: 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. ',
                avatar: null,
                link: './some-link'
            },
            {
                name: 'Polly Clark',
                post: 'Manager',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                avatar: null,
                link: './some-link'
            },
            {
                name: 'Markus Johnson',
                post: 'Front End Engineer',
                description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. ',
                avatar: null,
                link: './some-link'
            },
            {
                name: 'Terry Valdez',
                post: 'Support',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                avatar: null,
                link: './some-link'
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
                >
                    {item.avatar ?
                        <Avatar
                            size={160}
                            src={item.avatar}
                        />
                        :
                        <Avatar
                            size={160}
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
                thumbs={avatar}
                dark={this.props.dark ? true : false}
            />
        );
    }

    render() {

        return (
            <div>
                <section className={`section ${classes.testimonials} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <Container className={classes.container}>
                        <Row className={classes.testimonialRow}>

                            <Col className="col-12">
                                {this.renderCards()}
                            </Col>

                        </Row>
                    </Container>
                </section>
            </div>
        )
    }
}

export default TestimonialsLayoutsTypeSecond
