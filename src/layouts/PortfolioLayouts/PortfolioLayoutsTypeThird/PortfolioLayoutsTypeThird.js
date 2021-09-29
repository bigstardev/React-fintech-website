import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavList from "../../../components/Nav/Nav";
import Oval from "../../../components/Frame/Frame";
import TextButton from "../../../components/Text-Button/Text-Button";

import placeholder from "../../../img/placeholder-gray.png";
import placeholderDark from "../../../img/placeholder-gray-dark.png";
import {RightArrow} from "../../../components/Icons/Icons";
import classes from "./PortfolioLayoutsTypeThird.module.css"
import {Fade} from "react-awesome-reveal";

const postForView = 4;

class PortfolioLayoutsTypeThird extends Component {

    state = {
        activeCategory: 'branding',
        postForView: postForView ,
        projects: [
            {
                name: 'Symbol Design System',
                id: 1,
                link: '#/some-link#1',
                poster: null,
                latest: true,
                category: 'branding'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 2,
                link: '#/some-link#2',
                poster: null,
                latest: true,
                category: 'branding'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 3,
                link: '#/some-link#3',
                poster: null,
                latest: true,
                category: 'branding'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 4,
                link: '#/some-link#3',
                poster: null,
                latest: true,
                category: 'branding'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 5,
                link: '#/some-link#3',
                poster: null,
                latest: true,
                category: 'branding'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 6,
                link: '#/some-link#3',
                poster: null,
                latest: true,
                category: 'branding'
            },
            {
                name: 'Symbol Design System',
                id: 7,
                link: '#/some-link#1',
                poster: null,
                latest: false,
                category: 'web-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 8,
                link: '#/some-link#2',
                poster: null,
                latest: false,
                category: 'web-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 9,
                link: '#/some-link#3',
                poster: null,
                latest: false,
                category: 'web-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 10,
                link: '#/some-link#3',
                poster: null,
                latest: false,
                category: 'web-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 11,
                link: '#/some-link#3',
                poster: null,
                latest: false,
                category: 'web-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 9,
                link: '#/some-link#3',
                poster: null,
                latest: false,
                category: 'web-design'
            },
            {
                name: 'Symbol Design System',
                id: 10,
                link: '#/some-link#1',
                poster: null,
                latest: false,
                category: 'graphic-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 11,
                link: '#/some-link#2',
                poster: null,
                latest: false,
                category: 'graphic-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 12,
                link: '#/some-link#3',
                poster: null,
                latest: false,
                category: 'graphic-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 13,
                link: '#/some-link#3',
                poster: null,
                latest: false,
                category: 'graphic-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 14,
                link: '#/some-link#3',
                poster: null,
                latest: false,
                category: 'graphic-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 15,
                link: '#/some-link#3',
                poster: null,
                latest: false,
                category: 'graphic-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 16,
                link: '#/some-link#3',
                poster: null,
                latest: false,
                category: 'animation'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 17,
                link: '#/some-link#3',
                poster: null,
                latest: false,
                category: 'films'
            }

        ],
        category: [
            'Branding', 'Web Design' , 'Graphic Design', 'Animation', 'Films'
        ]
    }

    buttonClickHandler = (event) => {
        event.preventDefault();
        const card = this.state.projects;
        const listItems = card.filter((element) => {
                if (element.category == this.state.activeCategory) {
                    return true
                }
            }
        )
        this.setState({postForView: listItems.length});
    }

    onLinksClickHandler = (event) => {
        event.preventDefault();
        const currentValue = event.currentTarget.innerText.toLowerCase().replace(/ /g,"-");
        this.setState({activeCategory: currentValue });
        this.setState({postForView: postForView});

    }

    renderCards () {
        const card = this.state.projects;
        const listItems = card.filter((element) => {
                if (element.category == this.state.activeCategory) {
                    return true
                }
            }
        ).filter((element, index) => {
                if (index < this.state.postForView) {
                    return true
                }
            }
        ).map((item, index) => {
            return (
                <Col lg="6" md="6" sm="6" xs="6" className={classes.item} key={index}>
                    <Fade down delay={`${index}1`} triggerOnce={true}>
                        <>
                            <a href={item.link} className={classes.pictureLink}>
                                {item.poster ?
                                    <img
                                        src={item.poster}
                                        alt="placeholder"
                                        width="350"
                                        height="420"
                                    />
                                    :
                                    <img
                                        src={this.props.dark == true ? placeholderDark : placeholder}
                                        alt="placeholder"
                                        width="350"
                                        height="420"
                                    />
                                }
                            </a>
                        </>
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
                <section className={`section  ${classes.portfolio} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row>
                                <Col lg="4" md="4" className="mx-auto">
                                    <Fade top triggerOnce={true}>
                                        <NavList
                                            array={this.state.category}
                                            onClick={this.onLinksClickHandler}
                                            dark={this.props.dark ? true : false}
                                            size="big"
                                        />
                                    </Fade>
                                </Col>
                                <Col lg="8" md="8" className={classes.portfolioColumn}>
                                    <Row>
                                        {this.renderCards()}
                                    </Row>
                                </Col>
                            </Row>

                            <Row className={classes.buttonRow}>
                                <Col lg={{ size: 8, offset: 4 }} md={{ size: 8, offset: 4 }} className="d-flex justify-content-center">
                                  {this.state.postForView <= postForView &&
                                    <Fade top delay={200} triggerOnce={true}>
                                        <TextButton
                                            link={"/link"}
                                            text={"Read More"}
                                            onClick={this.buttonClickHandler}
                                        >
                                            <Oval variant="small">
                                                <RightArrow/>
                                            </Oval>
                                        </TextButton>
                                    </Fade>
                                  }
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </section>
            </div>
        )
    }
}

export default PortfolioLayoutsTypeThird
