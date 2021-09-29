import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Portfolio from "./Portfolio/PortfolioTypeFirst";
import placeholder from "../../../img/placeholder-gray.png";
import placeholderDark from "../../../img/placeholder-gray-dark.png";
import classes from "./PortfolioLayoutsTypeFirst.module.css"
import {Fade} from "react-awesome-reveal";

const strong = "Portfolio";
const title = "Latest Awesome Works";

class PortfolioLayoutsTypeFirst extends Component {

    state = {
        renderPost: 0,
        projects: [
            {
                name: 'Symbol Design System',
                id: 1,
                link: '#/some-link#1',
                poster: placeholder,
                latest: true

            },
            {
                name: 'Method Wireframe Kit 3.0',
                id: 2,
                link: '#/some-link#2',
                poster: placeholder,
                latest: true
            }
        ]
    }

    renderCards () {
        const card = this.state.projects;
        const listItems = card.filter((element) => {
                if (element.latest == true) {
                    return true
                }
            }
        ).map((item, index) => {
            return (
                <Col lg="6" md="6" className={classes.item} key={index}>
                    <Fade up delay={`${index}1`} triggerOnce={true}>
                        <Portfolio
                            name={item.name}
                            link={item.link}
                        >
                                <>
                                    {item.poster ? <img src={item.poster} alt=""/>
                                        : <img src={this.props.dark ? placeholderDark : placeholder} alt=""/>
                                    }
                                </>

                        </Portfolio>
                    </Fade>
                </Col>
            )

        });
        return (
            <Row className={classes.portfolio}>{listItems}</Row>
        );
    }

    render() {

        return (
            <div>
                <section className={`section  ${classes.portfolio} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row>
                                <Col lg="8" md="8" className="mx-auto text-center">
                                    <Fade top triggerOnce={true}>
                                        <strong style={{display: 'block'}} className="strong">{strong}</strong>
                                    </Fade>
                                    <Fade top delay={50} triggerOnce={true}>
                                        <h1 className="title">{title}</h1>
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

export default PortfolioLayoutsTypeFirst