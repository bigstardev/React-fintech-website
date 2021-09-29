import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./TeamLayoutsTypeTwelve.module.css"

import Member from "./Member/MemberTypeTwelfth";

import Slider from "./Slider/Slider";
import {Avatar} from "antd";
import {Google, LinkedIn, Twitter, User} from "../../../components/Icons/Icons";
import Socials from "../../../components/Socials/Socials";
import { Fade } from "react-awesome-reveal";


const title = "Our Team";

class TeamLayoutsTypeTwelve extends Component {

    state = {
        persons: [
            {
                name: 'Dany Monson',
                post: 'CEO & Founder',
                description: 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque.   ',
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
                description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. ',
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
                description: 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. ',
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
                description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. ',
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
                    <Member
                        key={index}
                        dark={this.props.dark ? true : false}
                        person={item.name}
                        post={item.post}
                        description={item.description}
                        avatar={
                            item.avatar ?
                                <Avatar
                                    size={120}
                                    src={item.avatar}
                                />
                                :
                                <Avatar
                                    size={120}
                                    icon={<User fill={"#ffffff"}/>}
                                    style={{
                                        fontSize: 0,
                                        backgroundColor: '#345DEE',
                                    }}
                                />
                        }
                        socials = {
                            <Socials
                                dark={this.props.dark ? true : false}
                            >
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
                        <Row className={classes.headerRow}>
                            <Col lg="6" md="6" className="mx-auto">
                                <Fade top triggerOnce={true}>
                                    <h1 className="text-center">{title}</h1>
                                </Fade>
                            </Col>
                        </Row>

                        <Row className={classes.testimonialRow}>
                                <Col>
                                    <div className={classes.gridWrapper}>
                                        {this.renderCards()}
                                    </div>
                                </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        )
    }
}

export default TeamLayoutsTypeTwelve
