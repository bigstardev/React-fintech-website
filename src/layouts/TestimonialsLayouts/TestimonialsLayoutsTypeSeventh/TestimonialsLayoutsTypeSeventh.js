import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";

import Testimonial from "./Testimonial/TestimonialTypeSeventh";
import {Google, LinkedIn, Twitter, User} from "../../../components/Icons/Icons";
import {Avatar} from "antd";
import classes from "./TestimonialsLayoutsTypeSeventh.module.css"
import {Fade} from "react-awesome-reveal";

const title = "Testimonials";
const description = "Our Happy Clients";

class TestimonialsLayoutsTypeSeventh extends Component {

    state = {
        persons: [
            {
                name: 'Dany Monson',
                post: 'CEO & Founder',
                description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula.',
                avatar: null,
                stars: 5,
                link: './some-link'
            },
            {
                name: 'Baha Moretz',
                post: 'Art Director',
                description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula.',
                avatar: null,
                stars: 4,
                link: './some-link'
            }
        ]
    }

    renderCards () {
        const card = this.state.persons;
        const listItems = card.map((item, index) => {
            return (
                <Col lg="6" md="6" className={classes.item} key={index}>
                    <Fade delay={`${index}1`} triggerOnce={true}>
                        <Testimonial
                            key={index}
                            person={item.name}
                            post={item.post}
                            description={item.description}
                            stars={item.stars}
                            dark={this.props.dark ? true : false}
                            link={item.link}
                            avatar={
                                item.avatar ?
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



    render () {
        return (
            <div>
                <section className={`section ${classes.testimonials} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row>
                                <Col lg="8" md="8" className="mx-auto text-center">
                                    <Fade top triggerOnce={true}>
                                        <strong style={{display: 'block'}} className={`strong ${classes.strong}`}>{title}</strong>
                                    </Fade>
                                    <Fade top delay={50} triggerOnce={true}>
                                        <h1 className={`title ${classes.title}`}>{description}</h1>
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

export default TestimonialsLayoutsTypeSeventh
