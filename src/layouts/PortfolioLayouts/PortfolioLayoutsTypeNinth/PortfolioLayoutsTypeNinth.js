import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "../../../components/Tabs/Tabs";
import placeholder from "../../../img/placeholder-gray.png";
import classes from "./PortfolioLayoutsTypeNinth.module.css"
import {Fade} from "react-awesome-reveal";
import placeholderDark from "../../../img/placeholder-gray-dark.png";

const postForView = 5;
const title = "Latest Projects";
class PortfolioLayoutsTypeNinth extends Component {

    state = {
        activeCategory: 'branding',
        renderPost: postForView,
        projects: [
            {
                name: 'Symbol Design Sysytem',
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
                pposter: null,
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
                pposter: null,
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
                name: 'Symbol Design Sysytem',
                id: 7,
                link: '#/some-link#1',
                poster: null,
                latest: true,
                category: 'web-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 8,
                link: '#/some-link#2',
                poster: null,
                latest: true,
                category: 'web-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 9,
                link: '#/some-link#3',
                poster: null,
                latest: true,
                category: 'web-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 10,
                link: '#/some-link#3',
                poster: null,
                latest: true,
                category: 'web-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 11,
                link: '#/some-link#3',
                poster: null,
                latest: true,
                category: 'web-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 9,
                link: '#/some-link#3',
                poster: null,
                latest: true,
                category: 'web-design'
            },
            {
                name: 'Symbol Design Sysytem',
                id: 10,
                link: '#/some-link#1',
                poster: null,
                latest: true,
                category: 'graphic-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 11,
                link: '#/some-link#2',
                poster: null,
                latest: true,
                category: 'graphic-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 12,
                link: '#/some-link#3',
                poster: null,
                latest: true,
                category: 'graphic-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 13,
                link: '#/some-link#3',
                poster: null,
                latest: true,
                category: 'graphic-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 14,
                link: '#/some-link#3',
                poster: null,
                latest: true,
                category: 'graphic-design'
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 15,
                link: '#/some-link#3',
                poster: null,
                latest: true,
                category: 'graphic-design'
            }

        ],
        category: [
            'Branding', 'Web Design' , 'Graphic Design'
        ]
    }

    onButtonClickHandler = (event) => {
        event.preventDefault();
        const currentValue = event.currentTarget.innerText.toLowerCase().replace(/ /g,"-");
        this.setState({activeCategory: currentValue });
    }

    renderCards () {
        const card = this.state.projects;
        const listItems = card.filter((element) => {
                if (element.category == this.state.activeCategory) {
                    return true
                }
            }
        ).filter((element, index) => {
                if (index < this.state.renderPost) {
                    return true
                }
            }
        ).map((item, index) => {
            return (
                <a href={item.link} className={classes.link}>
                    {item.poster ? <img src={item.poster} alt=""/>
                        : <img src={this.props.dark ? placeholderDark : placeholder} alt=""/>
                    }
                </a>
            )
        });
        return (
                <>
                    <div className={classes.leftColumn}>
                        <Fade top delay={100} triggerOnce={true}>
                            <div style={{height: '100%'}}>
                                {listItems[0]}
                            </div>
                        </Fade>
                    </div>
                    <div className={classes.rightColumn}>
                        <div className={classes.wrapper}>
                            <div className={classes.first}>
                                <Fade top delay={150} triggerOnce={true}>
                                    <div style={{height: '100%'}}>
                                        {listItems[1]}
                                    </div>
                                </Fade>
                            </div>
                            <div className={classes.second}>
                                <Fade top delay={200} triggerOnce={true}>
                                    <div style={{height: '100%'}}>
                                        {listItems[2]}
                                    </div>
                                </Fade>
                            </div>
                            <div className={classes.third}>
                                <Fade top delay={250} triggerOnce={true}>
                                    <div style={{height: '100%'}}>
                                        {listItems[3]}
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </>
        );
    }

    render() {
       
        return (
            <div>
                <section className={`section ${classes.portfolio} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.outer}>
                        <Container>
                            <Row>
                                <Col lg="6" md="6" className={`mx-auto ${classes.headerColumn}`}>
                                    <h1 className={classes.title}>
                                        <Fade top triggerOnce={true}>
                                            {title}
                                        </Fade>
                                    </h1>
                                    <div className={classes.tabs}>
                                        <Fade top delay={50} triggerOnce={true}>
                                            <Tabs
                                                array={this.state.category}
                                                onClick={this.onButtonClickHandler}
                                            />
                                        </Fade>
                                    </div>
                                </Col>
                            </Row>

                            <div className={classes.gridWrapper}>
                                {this.renderCards()}
                            </div>

                        </Container>
                    </div>
                </section>
            </div>
        )
    }
}

export default PortfolioLayoutsTypeNinth