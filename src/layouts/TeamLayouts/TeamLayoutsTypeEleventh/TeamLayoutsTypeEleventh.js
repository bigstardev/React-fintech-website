import React, {Component} from "react";
import classes from "./TeamLayoutsTypeEleventh.module.css"
import Member from "./Member/MemberTypeEleventh";
import UserPicList from "../../../components/UserPicList/UserPicList";

import {Container, Col , Row} from "reactstrap";
import {Google, LinkedIn, Twitter} from "../../../components/Icons/Icons";
import Socials from "../../../components/Socials/Socials";
import Divider from "../../../components/Divider/Divider";

import placeholderDark from "../../../img/placeholder-gray-dark.png";
import placeholder from '../../../img/placeholder-gray.png';
import {Fade} from "react-awesome-reveal";

const title = "Our Team";

class TeamLayoutsTypeEleventh  extends Component {

    state = {
        activePerson: 0,
        person: [
            {
                name: 'Dany Monson',
                post: 'CEO & Founder',
                id: 1,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                picture: null,
                avatar: null,

            },
            {
                name: 'Baha Moretz',
                post: 'Art Director',
                id: 2,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                picture: null,
                avatar: null,
            },
            {
                name: 'Dima Grinchenko',
                post: 'Front End Developer',
                id: 3,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                picture: null,
                avatar: null,
            },
            {
                name: 'Polly Clark',
                post: 'Manager',
                id: 4,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                picture: null,
                avatar: null,
            },
            {
                name: 'Markus Johnson',
                post: 'Front End Engineer',
                id: 5,
                socials: [
                    {social: 'Twitter', link: '#1', id: '1' , icon: <Twitter/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                picture: null,
                avatar: null,
            },
            {
                name: 'Terry Valdez',
                post: 'Support',
                id: 6,
                socials: [
                    {social: 'LinkedIn', link: '#1', id: '1', icon: <Google/> },
                    {social: 'Google', link: '#1', id: '1', icon : <LinkedIn/>},
                ],
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                picture: null,
                avatar: null,
            }
        ]
    }

    onButtonClickHandler = (event) => {
        this.setState({activePerson: event.target.closest('button').id - 1});
    }

    render() {

        return (

            <React.Fragment>
                <section className={`section ${classes.teams} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row>
                                <Col lg="6" md="6" className={classes.leftColumn}>
                                    <Fade down triggerOnce={true}>
                                        <h3>{title}</h3>
                                    </Fade>
                                    <Fade down delay={50} triggerOnce={true}>
                                        <div className={classes.userList}>
                                            <UserPicList
                                                target={this.state.person}
                                                onClick={this.onButtonClickHandler}
                                                element={this.state.activePerson}
                                            />
                                        </div>
                                    </Fade>
                                    <Fade down delay={100} triggerOnce={true}>
                                        <div className={classes.divider}>
                                            <Divider/>
                                        </div>
                                    </Fade>
                                    <Fade down delay={150} triggerOnce={true}>
                                        <Member
                                            name={this.state.person[this.state.activePerson].name}
                                            post={this.state.person[this.state.activePerson].post}
                                            description={this.state.person[this.state.activePerson].description}
                                            socials = {
                                                <Socials
                                                    dark={this.props.dark ? true : false}
                                                >
                                                    {this.state.person[this.state.activePerson].socials.map((item, index) => {
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
                                </Col>

                                <Col lg={{ size: 5,offset: 1 }} md={6} className={classes.rightColumn}>
                                    <Fade down delay={100} triggerOnce={true}>
                                    <>
                                        {this.state.person[this.state.activePerson].picture != null ?
                                            <img src={this.state.person[this.state.activePerson].picture} alt="person" />
                                            :
                                            <img src={this.props.dark == true ? placeholderDark : placeholder} alt="person" />
                                        }
                                    </>
                                    </Fade>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default TeamLayoutsTypeEleventh
