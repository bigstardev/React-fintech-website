import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import BaseSwitch from "../../../components/Base-Switcher/Base-Switcher";
import Button from "../../../components/Button/Button";
import { Fade } from "react-awesome-reveal";
import Pricing from "./Pricing/PricingTypeFourth";
import classes from "./PricingLayoutsTypeFourth.module.css"

const title = `Pricing Options`;
const description = `Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!`;
const linkText = `Get Started`;

class PricingLayoutsTypeFourth extends Component {

    state = {
        activeToggle: true,
        activeIndex: '1',
        activePrice: {
            true: 'yearly',
            false: 'monthly'
        },

        pricing: [
            {
                type: 'Method Plus',
                id: 1,
                description: 'Go beyond email and customize your workflow',
                pricing: {
                    yearly: 99,
                    monthly: 56
                },
                links: {
                    yearly: '/some-link-1',
                    monthly: '/some-link-2'
                }
            },
            {
                type: 'Method Pro',
                id: 2,
                description: 'You can even sync designs from your cloud storage',
                pricing: {
                    yearly: 110,
                    monthly: 76
                },
                links: {
                    yearly: '/some-link-3',
                    monthly: '/some-link-4'
                }
            }
        ]
    }

    onLinksClickHandler = (event) => {
        this.setState({activeToggle: !this.state.activeToggle });
    }

    cardClickHandler = (event) => {
        const currentId = event.target.closest("div[class*=\"find\"]").id;
        this.setState({activeIndex: currentId });
    }

    renderCards () {
        const card = this.state.pricing;
        const listItems = card.map((item, index) => {
            {if(item.id == this.state.activeIndex) {
                return (
                    <Col lg="6" md="6" className={classes.item} key={index}>
                        <Pricing
                            title={item.type}
                            description={item.description}
                            price={
                                item.pricing[this.state.activePrice[this.state.activeToggle]]
                            }
                            id={item.id}
                            classes={'active'}
                            onClick={this.cardClickHandler}
                            dark={this.props.dark ? true : false}
                        />
                    </Col>
                )
            } else {
                return (
                    <Col lg="6" md="6" className={classes.item} key={index}>
                        <Pricing
                            title={item.type}
                            description={item.description}
                            price={
                                item.pricing[this.state.activePrice[this.state.activeToggle]]
                            }
                            id={item.id}
                            classes={''}
                            onClick={this.cardClickHandler}
                            dark={this.props.dark ? true : false}
                        />
                    </Col>
                )
            }
            }
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
                <section className={`section ${classes.pricing} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.wrapper} >
                        <Container>
                            <Row>
                                <Col lg="8" md="8" className="mx-auto">
                                    <Fade top triggerOnce={true}>
                                        <h1 className="text-center">{title}</h1>
                                    </Fade>
                                    <Fade top delay={50} triggerOnce={true}>
                                        <p className={`normal-text ${classes.description} text-center`}>{description}</p>
                                    </Fade>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="8" md="8" className={`mx-auto ${classes.switcher}`}>
                                    <Fade top delay={100} triggerOnce={true}>
                                        <BaseSwitch
                                            onChange={this.onLinksClickHandler}
                                            left="Yearly"
                                            right="Monthly"
                                        />
                                    </Fade>
                                </Col>
                            </Row>

                            <Fade top delay={200} triggerOnce={true}>
                                <Row className={classes.pricingRow}>
                                    <Col lg="10" md="10" className="mx-auto">
                                        <Row>
                                            {this.renderCards()}
                                        </Row>
                                    </Col>
                                </Row>
                            </Fade>

                            <Row>
                                <Col lg="8" md="8" className={`mx-auto ${classes.link}`}>
                                    <Fade top delay={250} triggerOnce={true}>
                                        <Button
                                            link={true}
                                            href={
                                                this.state.pricing[this.state.activeIndex-1].links[this.state.activePrice[this.state.activeToggle]]
                                            }
                                            classes={"primary big simple"}
                                            value={linkText}
                                        />
                                    </Fade>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </div>
        )
    }
}

export default PricingLayoutsTypeFourth