import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./TeamLayoutsTypeEighth.module.css"
import {Google, LinkedIn, Twitter, User} from "../../../components/Icons/Icons";
import Member from "./Member/MemberTypeEight";
import {Avatar} from "antd";
import { Fade } from "react-awesome-reveal";


const membersForView = 8;
const title = "Our Awesome Crew";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";

class TeamLayoutsTypeEighth extends Component {

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
                link:'./link'
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
                link:'./link'
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
                link:'./link'
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
                link:'./link'
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
                link:'./link'
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
                link:'./link'
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
                link:'./link'
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
                <Col lg="3" md="4" sm="6" xs="6" className={classes.item} key={index}>
                    <Fade down delay={`${index}1`} triggerOnce={true}>
                        <Member
                            person={item.name}
                            post={item.post}
                            link={item.link}
                            avatar={
                                item.avatar ?
                                    <Avatar
                                        shape="square"
                                        size={255}
                                        src={item.avatar}
                                    />
                                    :
                                    <Avatar
                                        shape="square"
                                        size={255}
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

    render() {

        return (
            <div>
                <section className={`section ${classes.teams} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row className={classes.headerRow}>
                                <Col lg="8" md="8" className={`mx-auto text-center ${classes.col}`}>
                                    <Fade down triggerOnce={true}>
                                        <h1 className={`title ${classes.title}`}>{title}</h1>
                                    </Fade>
                                    <Fade down delay={50} triggerOnce={true}>
                                        <p className={classes.description}>{description}</p>
                                    </Fade>
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

export default TeamLayoutsTypeEighth