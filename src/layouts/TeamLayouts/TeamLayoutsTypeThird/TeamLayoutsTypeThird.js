import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./TeamLayoutsTypeThird.module.css"
import Member from "./Member/MemberTypeThree";

import Slider from "./Slider/Slider";
import placeholder from "../../../img/blue-placeholder.png";
import { Fade } from "react-awesome-reveal";

const renderPerson = 4;
const title = "Meet Our Great Team";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";

class TeamLayoutsTypeThird extends Component {

    state = {
        renderPerson : renderPerson,
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
            },
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
            }
        ]
    }

    renderCards () {
        const card = this.state.persons;
        const listItems = card.filter((element, index) => {
                if (index < this.state.renderPerson) {
                    return true
                }
            }
        ).map((item, index) => {
            return (
                <Fade down delay={`${index}1`}>
                    <Member
                        person={item.name}
                        post={item.post}
                        link={item.link}
                        dark={this.props.dark ? true : false}
                    >
                        {item.avatar ?
                            <img
                                src={item.avatar}
                                width="255"
                                height="340"
                                alt=""
                            />
                            :
                            <img
                                src={placeholder}
                                width="255"
                                height="340"
                                alt=""
                            />
                        }
                    </Member>
                </Fade>
            )
        });
        return (
            <Slider
                array={listItems}
            />
        );
    }

    render() {

        return (
            <div>
                <section className={`section ${classes.teams} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <Container>
                        <Row className={classes.headerRow}>
                            <Col lg="7" md="7">
                                <div className={classes.gridWrapper}>
                                    <Fade down triggerOnce={true}>
                                        <h1 >{title}</h1>
                                    </Fade>
                                    <Fade down delay={50} triggerOnce={true}>
                                        <p className={`normal-text ${classes.description}`}>{description}</p>
                                    </Fade>
                                </div>
                            </Col>
                        </Row>

                        <Row className={classes.members}>
                            <Col className={`p-0 ${classes.col}`}>
                                {this.renderCards()}
                            </Col>
                        </Row>

                    </Container>
                </section>
            </div>
        )
    }
}

export default TeamLayoutsTypeThird