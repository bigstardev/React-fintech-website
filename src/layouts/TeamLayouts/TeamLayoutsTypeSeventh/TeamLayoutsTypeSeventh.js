import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./TeamLayoutsTypeSeventh.module.css"

import {Google, LinkedIn, Twitter, User} from "../../../components/Icons/Icons";
import Member from "./Member/MemberTypeSeventh";
import {Avatar} from "antd";
import Socials from "../../../components/Socials/Socials";
import Slider from "./Slider/Slider";


class TeamLayoutsTypeSeventh extends Component {

    state = {
        persons: [
            {
                name: 'Dany Monson',
                post: 'CEO & Founder',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud.',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
            },
            {
                name: 'Baha Moretz',
                post: 'Art Director',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud.',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
            },
            {
                name: 'Dany Monson',
                post: 'CEO & Founder ',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud.',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
            },
            {
                name: 'Polly Clark',
                post: 'Manager',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud.',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
            },
            {
                name: 'Markus Johnson',
                post: 'Front End Engineer',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud.',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
            },
            {
                name: 'Terry Valdez',
                post: 'Support',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud.',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
            },
            {
                name: 'Dany Monson',
                post: 'CEO & Founder',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud.!',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
            },
            {
                name: 'Baha Moretz',
                post: 'Art Director',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud.',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                ],
            }
        ]
    }

    renderCards () {
        const card = this.state.persons;
        const listItems = card.map((item, index) => {
            return (
                <Member
                    key={index}
                    person={item.name}
                    post={item.post}
                    description={item.description}
                    avatar={
                        item.avatar ?
                            <Avatar
                                shape="square"
                                width={350}
                                src={item.avatar}
                            />
                            :
                            <Avatar
                                shape="square"
                                width={350}
                                icon={<User fill={"#ffffff"}/>}
                                style={{
                                    fontSize: 0,
                                    backgroundColor: '#345DEE',
                                }}
                            />
                    }
                    socials = {
                        <Socials>
                            {item.socials.map((item, index) => {
                                return (
                                    <a href={item.link} key={index}>
                                        {item.icon}
                                    </a>
                                )
                            })}

                        </Socials>
                    }
                />
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

export default TeamLayoutsTypeSeventh
