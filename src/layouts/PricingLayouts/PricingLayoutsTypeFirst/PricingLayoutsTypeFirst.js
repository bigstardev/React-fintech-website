import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Pricing from "./Price/PricingTypeFirst";
import Tabs from "../../../components/Tabs/Tabs";
import { Fade } from "react-awesome-reveal";
import classes from "./PricingLayoutsTypeFirst.module.css"

const titleText = `Build the right plan for your team`;

class PricingLayoutsTypeFirst extends Component {

    state = {
        activePrice: 'yearly',
        pricing: [
            {
                type: 'Started',
                id: 1,
                description: 'Go beyond email and customize your workflow',
                features : ['1 Non-Commercial Site', 'Method Branding', '100GB System Storage'],
                pricing: {
                    yearly: 99,
                    monthly: 59
                },
                links: {
                    yearly: '/some-link-1',
                    monthly: '/some-link-2'
                }
            },
            {
                type: 'Method Plus',
                id: 2,
                description: 'Go beyond email and customize your workflow',
                features : ['10 Non-Commercial Site', 'Custom Branding', '500GB System Storage'],
                pricing: {
                    yearly: 199,
                    monthly: 79
                },
                links: {
                    yearly: '/some-link-1',
                    monthly: '/some-link-2'
                }
            },
            {
                type: 'Method Pro',
                id: 3,
                description: 'Go beyond email and customize your workflow',
                features : ['30 Non-Commercial Site', 'Custom Branding', '1TB System Storage'],
                pricing: {
                    yearly: 299,
                    monthly: 99
                },
                links: {
                    yearly: '/some-link-1',
                    monthly: '/some-link-2'
                }
            }
        ],
        category: [
            'Yearly', 'Monthly'
        ]
    }

    onLinksClickHandler = (event) => {
        event.preventDefault();
        const currentValue = event.currentTarget.innerText.toLowerCase().replace(/ /g,"-");
        this.setState({activePrice: currentValue });
        Array.from(event.currentTarget.parentNode.childNodes).forEach((item) => {
            item.classList.remove('active')
        })
        event.currentTarget.classList.add('active')
    }

    renderCards () {
        const card = this.state.pricing;
        const listItems = card.map((item, index) => {
            return (
                <Col lg="12" md="12" className={classes.item} key={index}>
                    <Fade top delay={`${index}0`} triggerOnce={true}>
                        <Pricing
                            title={item.type}
                            cost={item.pricing[this.state.activePrice]}
                            array={item.features}
                            link={item.links[this.state.activePrice]}
                            dark={this.props.dark ? true : false}
                        />
                    </Fade>
                </Col>
            )
        });
        return (
            <Row className={classes.pricingRow}>{listItems}</Row>
        );
    }

    render() {

        return (
            <div>
                <section className={`section ${classes.pricing} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row>
                                <Col lg="6" md="6">
                                    <Fade top triggerOnce={true}>
                                        <h1 className="title text-center">{titleText}</h1>
                                    </Fade>
                                </Col>
                                <Col lg={3} md={5} sm={8} className={`text-right ml-auto ${classes.tabsColumn}`}>
                                    <div className={classes.wrapper}></div>
                                    <div style={{width: "100%"}}>
                                    <Fade top delay={50} triggerOnce={true}>
                                            <Tabs
                                                array={this.state.category}
                                                onClick={this.onLinksClickHandler}
                                            />
                                    </Fade>
                                    </div>
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

export default PricingLayoutsTypeFirst