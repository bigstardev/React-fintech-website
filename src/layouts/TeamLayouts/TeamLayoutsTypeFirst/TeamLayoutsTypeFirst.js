import { Row, Col, Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

import React, {Component} from "react";
import 'antd/dist/antd.css';

import {Avatar} from "antd";
import {Google, LinkedIn, Twitter, User} from "../../../components/Icons/Icons";
import Slider from "./Slider/Slider";
import Member from "./Member/MemberTypeFirst";
import { Fade } from "react-awesome-reveal";
import classes from "./TeamLayoutsTypeFirst.module.css"

const title = "Meet Our Great Team";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";

class TeamLayoutsTypeFirst extends Component {

    state = {
        persons: [
            {
                name: 'Dany Monson',
                post: 'CEO & Founder',
                description: 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque.   ',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
                link: "/some-link"
            },
            {
                name: 'Baha Moretz',
                post: 'Art Director',
                description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. ',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
                link: "/some-link"
            },
            {
                name: 'Dany Monson',
                post: 'CEO & Founder Craftwork',
                description: 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. ',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
                link: "/some-link"
            },
            {
                name: 'Polly Clark',
                post: 'Manager',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
                link: "/some-link"
            },
            {
                name: 'Markus Johnson',
                post: 'Front End Engineer',
                description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. ',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
                link: "/some-link"
            },
            {
                name: 'Terry Valdez',
                post: 'Support',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
                link: "/some-link"
            },
            {
                name: 'Dany Monson',
                post: 'CEO & Founder',
                description: 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque.   ',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
                link: "/some-link"
            },
            {
                name: 'Baha Moretz',
                post: 'Art Director',
                description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. ',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                ],
                link: "/some-link"
            }
        ]
    }

    renderCards () {
        const card = this.state.persons;
        const listItems = card.map((item, index) => {
            return (
                <Fade delay={`${index}1`} triggerOnce={true}>
                    <Member
                        person={item.name}
                        post={item.post}
                        link={item.link}
                    >
                        {item.avatar ?
                            <Avatar
                                size={80}
                                src={item.avatar}
                            />
                            :
                            <Avatar
                                size={80}
                                icon={<User fill={"#ffffff"}/>}
                                style={{
                                    fontSize: 0,
                                    backgroundColor: '#345DEE',
                                }}
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
                            <Col lg="10" md="10" className="mx-auto text-center">
                                <div className={classes.gridWrapper}>
                                    <Fade down triggerOnce={true}>
                                        <h1 className="title">{title}</h1>
                                    </Fade>
                                    <Fade down delay={50} triggerOnce={true}>
                                        <p className={classes.description}>{description}</p>
                                    </Fade>
                                </div>
                            </Col>
                        </Row>
                        <Row className={classes.members}>
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

export default TeamLayoutsTypeFirst