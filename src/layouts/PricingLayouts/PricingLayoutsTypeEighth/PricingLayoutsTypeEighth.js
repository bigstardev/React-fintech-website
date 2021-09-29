import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";

import { Fade } from "react-awesome-reveal";
import classes from "./PricingLayoutsTypeEighth.module.css";
import Price from "./Price/Price";
import Aside from "./Aside/Aside";
import BaseSwitch from "../../../components/Base-Switcher/Base-Switcher";

const titleText = `Pricing Options`;
const descriptionText = `Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!`;

const data = {
    usage:[
        {
            id: 1,
            description: 'Included contributors',
            notification: 'this is example'
        },
        {
            id: 2,
            description: 'Free viewer accounts',
            notification: 'this is example'
        },
        {
            id: 3,
            description: 'Video, images, and files',
        },
        {
            id: 4,
            description: 'Cancel anytime',
        }
    ],
    features: [
        {
            id: 1,
            description: 'Automatic Tax Calculation',
            notification: 'this is example'
        },
        {
            id: 2,
            description: 'Automatic Categorisation',
            notification: 'this is example'
        },
        {
            id: 3,
            description: 'Accounting Integration',
            notification: 'this is example'
        },
        {
            id: 4,
            description: 'Automatic VAT Calculation',
        }
    ],
    support: [
        {
            id: 1,
            description: 'Email support',
            notification: 'this is example'
        },
        {
            id: 2,
            description: 'Slack community',
            notification: 'this is example'
        },
        {
            id: 3,
            description: 'Priority support response',
        }
    ]
}

class PricingLayoutsTypeEighth extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeToggle: false,
            activePrice: {
                true: 'yearly',
                false: 'monthly'
            },

            pricing: [
                {
                    type: 'Start',
                    description: 'Go beyond email and customize your workflow',
                    id: 1,
                    pricing: {
                        yearly: 99,
                        monthly: 19
                    },
                    links: {
                        yearly: '/some-link-1',
                        monthly: '/some-link-2'
                    },
                    data: {
                        usage:[
                            {
                                id: 1,
                                value: '15',
                                description: 'Included contributors',
                            },
                            {
                                id: 2,
                                value: 'Unlimited',
                                description: 'Free viewer accounts',
                            },
                            {
                                id: 3,
                                value: 'Up to 350MB',
                                description: 'Video, images, and files',
                            },
                            {
                                id: 4,
                                value: 'Unlimited',
                                description: 'Cancel anytime',
                            }
                        ],
                        features: [
                            {
                                id: 1,
                                value: true,
                                description: 'Automatic Tax Calculation',
                            },
                            {
                                id: 2,
                                value: false,
                                description: 'Automatic Categorisation',
                            },
                            {
                                id: 3,
                                value: true,
                                description: 'Accounting Integration',
                            },
                            {
                                id: 4,
                                value: true,
                                description: 'Automatic VAT Calculation',
                            },
                        ],
                        support: [
                            {
                                id: 1,
                                value: true,
                                description: 'Email support',
                            },
                            {
                                id: 2,
                                value: false,
                                description: 'Slack community',
                            },
                            {
                                id: 3,
                                value: true,
                                description: 'Priority support response',
                            },
                        ],
                    }
                },
                {
                    type: 'Plus',
                    description: 'Go beyond email and customize your workflow',
                    id: 2,
                    pricing: {
                        yearly: 199,
                        monthly: 29
                    },
                    links: {
                        yearly: '/some-link-1',
                        monthly: '/some-link-2'
                    },
                    data: {
                        usage:[
                            {
                                id: 1,
                                value: '45',
                                description: 'Included contributors',
                            },
                            {
                                id: 2,
                                value: 'Unlimited',
                                description: 'Free viewer accounts',
                            },
                            {
                                id: 3,
                                value: 'Up to 650MB',
                                description: 'Video, images, and files',
                            },
                            {
                                id: 4,
                                value: 'Unlimited',
                                description: 'Cancel anytime',
                            }
                        ],
                        features: [
                            {
                                id: 1,
                                value: true,
                                description: 'Automatic Tax Calculation',
                            },
                            {
                                id: 2,
                                value: true,
                                description: 'Automatic Categorisation',
                            },
                            {
                                id: 3,
                                value: true,
                                description: 'Accounting Integration',
                            },
                            {
                                id: 4,
                                value: true,
                                description: 'Automatic VAT Calculation',
                            },
                        ],
                        support: [
                            {
                                id: 1,
                                value: true,
                                description: 'Email support',
                            },
                            {
                                id: 2,
                                value: true,
                                description: 'Slack community',
                            },
                            {
                                id: 3,
                                value: true,
                                description: 'Priority support response',
                            },
                        ],
                    }
                },
            ]
        }

        this.onLinksClickHandler = this.onLinksClickHandler.bind(this);
    }

    renderAside() {
        return (
            <Col lg="4" md="4">
                <Fade down triggerOnce={true}>
                    <Aside
                        data={data}
                        dark={this.props.dark ? true : false}
                        onChange={this.onLinksClickHandler}
                    />
                </Fade>
            </Col>
        )
    }

    renderCards () {
        const card = this.state.pricing;
        const listItems = card.map((item, index) => {
                return (
                    <Col lg="3" md="4" className={classes.item} key={index}>
                        <Fade down delay={`${index}0`} triggerOnce={true}>
                            <Price
                                title={item.type}
                                desciption={item.description}
                                price={
                                    item.pricing[this.state.activePrice[this.state.activeToggle]]
                                }
                                link={
                                    item.links[this.state.activePrice[this.state.activeToggle]]
                                }
                                data={item.data}
                                dark={this.props.dark ? true : false}
                                custom={index % 2 !== 0 && true}
                            />
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

    onLinksClickHandler = (event) => {
        this.setState({activeToggle: !this.state.activeToggle });
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
                            <Row className={classes.pricingRow}>
                                <Col className={classes.switcher}>
                                    <BaseSwitch
                                        onChange={this.onLinksClickHandler}
                                        left="Yearly"
                                        right="Monthly"
                                    />
                                </Col>
                                {this.renderAside()}
                                {this.renderCards()}
                            </Row>
                        </Container>
                    </div>
                </section>
            </div>
        )
    }
}

export default PricingLayoutsTypeEighth