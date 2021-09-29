import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Slider from "./Slider/Slider";
import { Fade } from "react-awesome-reveal";
import classes from "./PricingLayoutsTypeSecond.module.css"
import Pricing from "./Pricing/PricingTypeSecond";
const titleText = `Pricing Options`;
const descriptionText = `Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!`;


class PricingLayoutsTypeSecond extends Component {

    state = {
        activeCategory: 'branding',
        postForView: 3,
        pricing: [
            {
                type: 'Starter',
                id: 1,
                descr: 'Go beyond email and customize your workflow',
                firstLink: '#/some-link#1',
                secondLink: '#/some-link#2',
                cost: 19
            },
            {
                type: 'Method Plus',
                id: 2,
                descr: 'Go beyond email and customize your workflow',
                firstLink: '#/some-link#3',
                secondLink: '#/some-link#4',
                cost: 29
            },
            {
                type: 'Method Pro',
                id: 3,
                descr: 'Go beyond email and customize your workflow',
                firstLink: '#/some-link#4',
                secondLink: '#/some-link#5',
                cost: 39
            }
        ]
    }

    renderCards () {
        const card = this.state.pricing;
        const listItems = card.map((item, index) => {
            return (
                <div className={classes.item}>
                    <Fade down delay={`${index}0`} triggerOnce={true}>
                        <Pricing
                            title={item.type}
                            descr={item.descr}
                            cost={item.cost}
                            firstLink={item.firstLink}
                            secondLink={item.secondLink}
                            dark={this.props.dark ? true : false}
                        />
                    </Fade>
                </div>
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
                    <section className={`section ${classes.pricing} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                        <div className={classes.wrapper}>
                            <Container>
                                <Row className={classes.headerRow}>
                                    <Col lg="8" md="8" className="mx-auto">
                                        <Fade top triggerOnce={true}>
                                            <h1 className="title text-center">{titleText}</h1>
                                        </Fade>
                                        <Fade top delay={50} triggerOnce={true}>
                                            <p className={`normal-text text-center ${classes.description}`}>{descriptionText}</p>
                                        </Fade>
                                    </Col>
                                </Row>
                                <Row className={classes.pricing}>
                                    <Col className={`${classes.col}`}>
                                        {this.renderCards()}
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </section>
            </div>
        )
    }
}

export default PricingLayoutsTypeSecond