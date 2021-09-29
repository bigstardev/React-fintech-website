import React, {Component} from "react";

import {Container, Col , Row} from "reactstrap";
import {Bookmark, Home , Basket} from "../../../components/Icons/Icons";
import Oval from "../../../components/Frame/Frame";
import Button from "../../../components/Button/Button";
import Feature from "./Feature/FeaturesTypeTwenty";
import { Fade } from "react-awesome-reveal";
import classes from "./FeaturesLayoutsTypeTwenty.module.css"

const title = "We believe in helping people pay attention to what matters";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";

class FeaturesLayoutsTypeTwenty extends Component {

    state = {
        renderElement: 3,
        features: [
            {
                title: 'Marketing Automation',
                description: 'You can even sync designs from your cloud storage!',
                link: '#/some-link#1',
                icon: <Bookmark fill={"#ffffff"}/>,
                id: 1,

            },
            {
                title: 'Email Marketing',
                description: 'You can even sync designs from your cloud storage!',
                link: '#/some-link#2',
                icon: <Home fill={"#ffffff"}/> ,
                id: 2,
            },
            {
                title: 'API Reeference',
                description: 'You can even sync designs from your cloud storage!',
                link: '#/some-link#3',
                icon: <Basket fill={"#ffffff"}/>,
                id: 3,
            },
            {
                title: 'API Reeference',
                description: 'You can even sync designs from your cloud storage!',
                link: '#/some-link#1',
                icon: <Bookmark fill={"#ffffff"}/>,
                id: 4,

            },
            {
                title: 'Email Marketing',
                description: 'You can even sync designs from your cloud storage!',
                link: '#/some-link#2',
                icon: <Home fill={"#ffffff"}/> ,
                id: 5,
            },
            {
                title: 'Marketing Automation',
                description: 'You can even sync designs from your cloud storage!',
                link: '#/some-link#3',
                icon: <Basket fill={"#ffffff"}/>,
                id: 6,
            }
        ]
    }


    buttonClickHandler = (event) => {
        event.preventDefault();
        const card = this.state.features;
        this.setState({renderElement: card.length});
    }

    renderCards () {
        const card = this.state.features;
        const listItems = card.filter((element, index) => {
                if (index < this.state.renderElement) {
                    return true
                }
            }
        ).map((item, index) => {
            return (
                <Col lg={4} md={4} className={classes.item} key={index}>
                    <Fade down delay={`${index}0`} triggerOnce={true}>
                        <Feature
                            title={item.title}
                            description={item.description}
                            link={item.link}
                            dark={this.props.dark ? true : false}
                        >
                            <Oval
                                variant={"large"}
                                color={"primary"}
                            >
                                {item.icon}
                            </Oval>
                        </Feature>
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
            <React.Fragment>
                <section className={`section ${classes.features} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>

                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row className={classes.headerRow}>
                                <Col lg={8} md={8} className="mx-auto text-center">
                                    <Fade down triggerOnce={true}>
                                        <h1 className={`${classes.title} text-center`}>{title}</h1>
                                    </Fade>
                                    <Fade down delay={50} triggerOnce={true}>
                                        <p className={`normal-text ${classes.description}`}>{description}</p>
                                    </Fade>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row className={classes.featuresRow}>{this.renderCards()}</Row>

                        </Container>
                        <Container>
                            <Row className={classes.buttonRow}>
                                <Col lg={8} md={8} className="mx-auto text-center d-flex justify-content-center">
                                  {this.state.renderElement <= 3 && 
                                    <Fade down delay={250} triggerOnce={true}>
                                        <Button
                                            link={true}
                                            href={"#"}
                                            classes={`primary large simple ${classes.button}`}
                                            value={"Get Started"}
                                            onClick={this.buttonClickHandler}
                                        />
                                    </Fade>
                                  }
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default FeaturesLayoutsTypeTwenty
