import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./TeamLayoutsTypeFifth.module.css"
import Member from "./Member/MemberTypeFifth";
import {Avatar} from "antd";
import {User} from "../../../components/Icons/Icons";
import Slider from "./Slider/Slider";
import { Fade } from "react-awesome-reveal";


const renderMembers = 3;


class TeamLayoutsTypeFifth extends Component {

    state = {
        renderMembers : renderMembers,
        persons: [
            {
                name: 'Dany Monson',
                post: 'CEO & Founder',
                description: 'The add or remove programs utility is very useful, but not all of the programs are listed up.',
                avatar: null,
                link: '/some-link'
            },
            {
                name: 'Baha Moretz',
                post: 'Art Director',
                description: 'The add or remove programs utility is very useful, but not all of the programs are listed up.',
                avatar: null,
                link: '/some-link'
            },
            {
                name: 'Dany Monson',
                post: 'CEO & Founder Craftwork',
                description: 'The add or remove programs utility is very useful, but not all of the programs are listed up.',
                avatar: null,
                link: '/some-link'
            },
            {
                name: 'Polly Clark',
                post: 'Manager',
                description: 'The add or remove programs utility is very useful, but not all of the programs are listed up.',
                avatar: null,
                link: '/some-link'
            },
            {
                name: 'Markus Johnson',
                post: 'Front End Engineer',
                description: 'The add or remove programs utility is very useful, but not all of the programs are listed up.',
                avatar: null,
                link: '/some-link'
            },
            {
                name: 'Terry Valdez',
                post: 'Support',
                description: 'The add or remove programs utility is very useful, but not all of the programs are listed up.',
                avatar: null,
                link: '/some-link'
            },
            {
                name: 'Dany Monson',
                post: 'CEO & Founder',
                description: 'The add or remove programs utility is very useful, but not all of the programs are listed up. ',
                avatar: null,
                link: '/some-link'
            },
            {
                name: 'Baha Moretz',
                post: 'Art Director',
                description: 'The add or remove programs utility is very useful, but not all of the programs are listed up.',
                avatar: null,
                link: '/some-link'
            }
        ]
    }

    renderCards () {
        const card = this.state.persons;
        const listItems = card.filter((element, index) => {
                if (index < this.state.renderMembers) {
                    return true
                }
            }
        ).map((item, index) => {
            return (
                <Fade down delay={`${index}1`} triggerOnce={true}>
                    <Member
                        person={item.name}
                        post={item.post}
                        description={item.description}
                        link={item.link}
                    >
                        {item.avatar ?
                            <Avatar
                                size={48}
                                src={item.avatar}
                            />
                            :
                            <Avatar
                                size={48}
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

export default TeamLayoutsTypeFifth