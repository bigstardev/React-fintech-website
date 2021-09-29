import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";

import Portfolio from "./Portfolio/PortfolioTypeFirst";
import image from "../../../img/placeholder-gray.png";
import Button from "../../../components/Button/Button";
import placeholderDark from "../../../img/placeholder-gray-dark.png";
import placeholder from "../../../img/placeholder-gray.png";
import classes from "./PortfolioLayoutsTypeFifth.module.css"
import {Fade} from "react-awesome-reveal";

const title = "Featured Projects";
const postForView = 4;
class PortfolioLayoutsTypeFifth extends Component {

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
                poster: image,
                latest: true
            },
            {
                name: 'Symbol Design Sysytem',
                id: 3,
                link: '#/some-link#3',
                poster: null,
                featured: true
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 4,
                link: '#/some-link#4',
                poster: null,
                featured: true
            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 5,
                link: '#/some-link#4',
                poster: null,
                featured: true
            },
            {
                name: 'Symbol Design 2.0',
                id: 6,
                link: '#/some-link#3',
                poster: null,
                featured: true
            },
            {
                name: 'Method Wireframe Kit 4.0',
                id: 7,
                link: '#/some-link#4',
                poster: null,
                featured: true
            },
            {
                name: 'Method Wireframe Kit 4.0',
                id: 8,
                link: '#/some-link#4',
                poster: null,
                featured: true
            }
        ]
    }

    buttonClickHandler = (event) => {
        event.preventDefault();
        const card = this.state.projects;
        const listItems = card.filter((element) => {
                if (element.featured == true) {
                    return true
                }
            }
        )
        this.setState({renderPost: listItems.length});
    }

    renderCards () {
        const card = this.state.projects;
        const listItems = card.filter((element) => {
                if (element.featured == true) {
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
                <Col lg="3" md="6"  className={classes.item} key={index}>
                    <Fade down delay={`${index}1`} triggerOnce={true}>
                        <Portfolio
                            name={item.name}
                            link={item.link}
                        >
                                    {item.poster ? <img src={item.poster} alt=""/>
                                        : <img src={this.props.dark ? placeholderDark : placeholder} alt=""/>
                                    }
                        </Portfolio>
                    </Fade>
                </Col>
            )

        });
        return (
            <>{listItems}</>

        );
    }

    render() {

        return (
            <div>
                <section className={`section  ${classes.portfolio} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row>
                                <Col lg="8" md="8" className="mx-auto">
                                    <Fade top triggerOnce={true}>
                                        <h1 className={`${classes.title} text-center`}>{title}</h1>
                                    </Fade>
                                </Col>
                            </Row>
                            <Row className={classes.portfolioRow}>
                                {this.renderCards()}
                            </Row>

                            <Row className={classes.buttonRow}>
                                <Col lg="12" md="12" className="d-flex justify-content-center">
                                  {this.state.renderPost <= postForView &&
                                    <Fade top delay={200} triggerOnce={true}>
                                        <Button
                                            type={'button'}
                                            classes={'primary big simple'}
                                            value={'Show All Projects'}
                                            onClick={this.buttonClickHandler}
                                        />
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

export default PortfolioLayoutsTypeFifth
