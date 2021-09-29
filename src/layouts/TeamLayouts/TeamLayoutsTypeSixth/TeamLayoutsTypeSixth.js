import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./TeamLayoutsTypeSixth.module.css"

import Member from "./Member/MemberTypeSix";
import {Google, LinkedIn, Twitter, User} from "../../../components/Icons/Icons";
import {Avatar} from "antd";
import Tabs from "../../../components/Tabs/Tabs";
import { Fade } from "react-awesome-reveal";


const title = "Our Awesome Crew";

class TeamLayoutsTypeSixth extends Component {

    state = {
        activeCity: 'New York',
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
                city: 'New York'
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
                city: 'New York'
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
                city: 'New York'
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
                city: 'New York'
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
                city: 'New York'
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
                city: 'Moscow'
            },
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
                link: './some-link',
                city: 'Moscow'
            },
            {
                name: 'Baha Moretz',
                post: 'Art Director',
                description: 'YCreate screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud.',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                ],
                link: './some-link',
                city: 'Moscow'
            },
            {
                name: 'Terry Valdez',
                post: 'Front End Engineer',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud.',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
                link: './some-link',
                city: 'New York'
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
                link: './some-link',
                city: 'Moscow'
            },
            {
                name: 'Terry Valdez',
                post: 'Front End Engineer',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud.',
                avatar: null,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
                link: './some-link',
                city: 'New York'
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
                link: './some-link',
                city: 'Moscow'
            },
        ],
        city: [
            'New York', 'Moscow'
        ]
    }

    renderCards () {
        const card = this.state.persons;
        const listItems = card.filter((element) => {
                if (element.city == this.state.activeCity) {
                    return true
                }
            }
        ).map((item, index) => {
            return (
                <Col lg="6" md="6" sm="6" className={classes.item}  key={index}>
                    <Fade down delay={`${index}1`} triggerOnce={true}>
                        <Member
                            person={item.name}
                            post={item.post}
                            description={item.description}
                            link={item.link}
                            avatar={
                                item.avatar ?
                                    <Avatar
                                        shape="square"
                                        size={160}
                                        src={item.avatar}
                                    />
                                    :
                                    <Avatar
                                        shape="square"
                                        size={160}
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
            <Row className={classes.membersRow}>
                {listItems}
            </Row>
        );
    }

    onLinksClickHandler = (event) => {
        event.preventDefault();
        const currentValue = event.currentTarget.innerText;
        this.setState({activeCity: currentValue });
    }

    render() {

        return (
            <div>
                <section className={`section ${classes.teams} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row className={classes.headerRow}>
                                <Col lg="9" md="8" className={classes.leftColumn}>
                                    <Fade down triggerOnce={true}>
                                        <h1 className="text-left">{title}</h1>
                                    </Fade>
                                </Col>
                                <Col lg="3" md="4" sm="6" sm="8" xs="11" className={`d-flex align-items-center ${classes.rightColumn}`}>
                                        <div style={{width: '100%'}}>
                                            <Fade down delay={50} triggerOnce={true}>
                                            <Tabs
                                                array={this.state.city}
                                                onClick={this.onLinksClickHandler}
                                            />
                                            </Fade>
                                        </div>
                                </Col>
                            </Row>
                            {this.renderCards()}
                        </Container>
                    </div>
                </section>
            </div>
        )
    }
}

export default TeamLayoutsTypeSixth