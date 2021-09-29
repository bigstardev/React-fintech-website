import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./TeamLayoutsTypeSecond.module.css"

import {Google, LinkedIn, Twitter, User} from "../../../components/Icons/Icons";
import Member from "./Member/MemberTypeSecond";
import {Avatar} from "antd";
import Socials from "../../../components/Socials/Socials";
import Slider from "./Slider/Slider";
import Oval from "../../../components/Frame/Frame";
import { Fade } from "react-awesome-reveal";

const title = "Our Awesome Crew";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";
const strong = "About Us";
const membersForView = 4;


class TeamLayoutsTypeSecond extends Component {

    state = {
        membersForView: membersForView ,
        persons: [
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
            },
            {
                name: 'Baha Moretz',
                post: 'Art Director',
                description: 'You can even sync designs from your cloud storage!',
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
                description: 'You can even sync designs from your cloud storage!',
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
                description: 'You can even sync designs from your cloud storage!',
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
                description: 'You can even sync designs from your cloud storage!',
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
                description: 'You can even sync designs from your cloud storage!',
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
                description: 'You can even sync designs from your cloud storage!',
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
                description: 'You can even sync designs from your cloud storage!',
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
        const listItems = card.filter((element, index) => {
                if (index < this.state.membersForView) {
                    return true
                }
            }
        ).map((item, index) => {
            return (
                <Fade down delay={`${index}1`} triggerOnce={true} key={index}>
                    <Member
                        classes={classes.item}
                        person={item.name}
                        post={item.post}
                        dark={this.props.dark ? true : false}
                        description={item.description}
                        avatar={
                            item.avatar ?
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
                        socials = {
                            <Socials>
                                {item.socials.map((item, index) => {
                                    return (
                                        <a href={item.link} key={index}>
                                            <Oval
                                                variant="small"
                                            >
                                                {item.icon}
                                            </Oval>
                                        </a>
                                    )
                                })}

                            </Socials>
                        }
                    />
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
                                        <strong style={{display: 'block'}}>{strong}</strong>
                                    </Fade>
                                    <Fade down delay={50} triggerOnce={true}>
                                        <h1 className={`title ${classes.title}`}>{title}</h1>
                                    </Fade>
                                    <Fade down delay={100} triggerOnce={true}>
                                        <p className={`description ${classes.description}`}>{description}</p>
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

export default TeamLayoutsTypeSecond
