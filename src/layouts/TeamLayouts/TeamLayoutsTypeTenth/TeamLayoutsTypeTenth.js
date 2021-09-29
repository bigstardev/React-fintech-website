import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./TeamLayoutsTypeTenth.module.css"

import Member from "./Member/MemberTypeTenth";
import Socials from "../../../components/Socials/Socials";
import {Avatar} from "antd";
import {Google, LinkedIn, Twitter, User} from "../../../components/Icons/Icons";
import { Fade } from "react-awesome-reveal";


const membersForView = 4;
const title = "Meet Our Great Team";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";
class TeamLayoutsTypeTenth extends Component {

    state = {
        membersForView: membersForView ,
        persons: [
            {
                name: 'Dany Monson',
                post: 'CEO & Founder',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
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
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
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
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
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
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
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

                    <Col lg="6" md="6" className={classes.item} key={index}>
                        <Fade down delay={`${index}1`} triggerOnce={true}>
                            <Member
                                person={item.name}
                                post={item.post}
                                description={item.description}
                                dark={this.props.dark ? true : false}
                                avatar={
                                    item.avatar ?
                                        <Avatar
                                            size={65}
                                            src={item.avatar}
                                        />
                                        :
                                        <Avatar
                                            size={65}
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
                    </Col>
            )
        });
        return (
           <Row className={classes.members}>
               {listItems}
           </Row>
        );
    }

    render() {

        return (
            <React.Fragment>
                <section className={`section ${classes.teams} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row className={classes.headerRow}>
                                <Col lg="8" md="8" className="mx-auto">
                                    <Fade down triggerOnce={true}>
                                        <h1 className={`title text-center ${classes.title}`}>{title}</h1>
                                    </Fade>
                                    <Fade down delay={50} triggerOnce={true}>
                                        <p className={`text-center ${classes.description}`}>{description}</p>
                                    </Fade>
                                </Col>
                            </Row>

                            <Col lg="10" md="10" className={`mx-auto ${classes.cardWrapper}`}>
                                {this.renderCards()}
                            </Col>
                        </Container>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default TeamLayoutsTypeTenth
