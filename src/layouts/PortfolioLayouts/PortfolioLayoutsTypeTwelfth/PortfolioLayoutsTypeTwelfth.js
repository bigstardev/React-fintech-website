import { Row, Col, Container } from "reactstrap";
import React, { Component } from "react";

import Portfolio from "./Portfolio/Portfolio";

import placeholderDark from "../../../img/placeholder-gray-dark.png";
import placeholder from "../../../img/placeholder-gray.png";
import classes from "./PortfolioLayoutsTypeTwelfth.module.css"
import { Fade } from "react-awesome-reveal";

const title = "Latest Awesome Works";
const postForView = 1;

class PortfolioLayoutsTypeTwelfth extends Component {

    state = {
        renderPost: postForView ,
        projects: [
            {
                name: 'Symbol Design Sysytem',
                id: 1,
                link: '#/some-link#1',
                poster: null,
                latest: true
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 2,
                link: '#/some-link#2',
                poster: null,
                latest: true
            },
            {
                name: 'Symbol Design Sysytem',
                id: 3,
                link: '#/some-link#3',
                poster: null,
                latest: true
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 4,
                link: '#/some-link#4',
                poster: null,
                latest: true
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 5,
                link: '#/some-link#4',
                poster: null,
                latest: true
            },
            {
                name: 'Symbol Design Sysytem',
                id: 6,
                link: '#/some-link#5',
                poster: null,
                latest: true
            },
        ]
    }

    renderCards() {
        const card = this.state.projects;
        const listItems = card.filter((element, index) => {
                if (index < this.state.renderPost && element.latest == true) {
                    return true
                }
            }
        ).map((item, index) => {
            return (
                <Col lg={12} md={12} className={classes.item} key={index}>
                    <Fade down delay={`${index}1`} triggerOnce={true}>
                        <Portfolio
                            name={item.name}
                            link={item.link}
                        >

                            {item.poster ? 
                            <img src={item.poster} alt="" />
                                : <img src={this.props.dark ? placeholderDark : placeholder} alt="" />
                            }
                        </Portfolio>
                    </Fade>
                </Col>
            )
        });
        return (
            <>
                {listItems}
            </>
        );
    }

    render() {

        return (
            <div>
                <section className={`section  ${classes.portfolio} ${(this.props.dark) ? `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row>
                                <Col lg="8" md="8" className="mx-auto text-center">
                                    <Fade down triggerOnce={true}>
                                        <h1 className={classes.title}>{title}</h1>
                                    </Fade>
                                </Col>
                            </Row>
                            <Row className={classes.contentRow}>
                                {this.renderCards()}
                            </Row>
                        </Container>
                    </div>
                </section>
            </div>
        )
    }
}

export default PortfolioLayoutsTypeTwelfth
