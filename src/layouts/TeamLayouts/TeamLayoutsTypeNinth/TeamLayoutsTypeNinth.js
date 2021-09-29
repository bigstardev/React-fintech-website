import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./TeamLayoutsTypeNinth.module.css"

import Member from "./Member/MemberTypeTwelfth";

import Slider from "./Slider/Slider";
import {Avatar} from "antd";
import {Google, LinkedIn, Twitter, User} from "../../../components/Icons/Icons";
import Socials from "../../../components/Socials/Socials";
import { Fade } from "react-awesome-reveal";


const title = "Our Team";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";

class TeamLayoutsTypeNinth extends Component {

    state = {
        persons: [
            {
                name: 'Dany Monson',
                post: 'CEO & Founder',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                avatar: null,
                socials : [
                    {social: 'LinkedIn' , icon: <LinkedIn/>,  link: '#1'},
                    {social: 'Google' , icon: <Google/>,  link: '#2'},
                    {social: 'Twitter' , icon: <Twitter/>, link: '#3'}
                ]
            },
            {
                name: 'Baha Moretz',
                post: 'Art Director',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                avatar: null,
                socials : [
                    {social: 'LinkedIn' , icon: <LinkedIn/>,  link: '#1'},
                    {social: 'Google' , icon: <Google/>,  link: '#2'},
                    {social: 'Twitter' , icon: <Twitter/>, link: '#3'}
                ]
            },
            {
                name: 'Dany Monson',
                post: 'CEO & Founder Craftwork',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                avatar: null,
                socials : [
                    {social: 'LinkedIn' , icon: <LinkedIn/>,  link: '#1'},
                    {social: 'Google' , icon: <Google/>,  link: '#2'},
                    {social: 'Twitter' , icon: <Twitter/>, link: '#3'}
                ]
            },
            {
                name: 'Polly Clark',
                post: 'Manager',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                avatar: null,
                socials : [
                    {social: 'LinkedIn' , icon: <LinkedIn/>,  link: '#1'},
                    {social: 'Google' , icon: <Google/>,  link: '#2'},
                    {social: 'Twitter' , icon: <Twitter/>, link: '#3'}
                ]
            },
            {
                name: 'Markus Johnson',
                post: 'Front End Engineer',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                avatar: null,
                socials : [
                    {social: 'LinkedIn' , icon: <LinkedIn/>,  link: '#1'},
                    {social: 'Google' , icon: <Google/>,  link: '#2'},
                    {social: 'Twitter' , icon: <Twitter/>, link: '#3'}
                ]
            },
            {
                name: 'Terry Valdez',
                post: 'Support',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                avatar: null,
                socials : [
                    {social: 'LinkedIn' , icon: <LinkedIn/>,  link: '#1'},
                    {social: 'Google' , icon: <Google/>,  link: '#2'},
                    {social: 'Twitter' , icon: <Twitter/>, link: '#3'}
                ]
            }
        ]
    }

    renderCards () {
        const card = this.state.persons;
        const listItems = card.map((item, index) => {
            return (
                <Fade left delay={`${index}1`} triggerOnce={true} key={index}>
                    <Member
                        key={index}
                        person={item.name}
                        post={item.post}
                        description={item.description}
                        avatar={
                            item.avatar ?
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
                            <Col lg="8" md="8" className="mx-auto text-center">
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

                        <Row className={`${classes.testimonialRow}`}>
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

export default TeamLayoutsTypeNinth
