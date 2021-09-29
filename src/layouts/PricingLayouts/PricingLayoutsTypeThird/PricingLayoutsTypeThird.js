import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Pricing from "./Pricing/PricingTypeThird";
import { Fade } from "react-awesome-reveal";
import CustomElement from "./CustomElement/CustomElement";
import ComplexElement from "./ComplexElement/ComplexElement";
import classes from "./PricingLayoutsTypeThird.module.css"
const title = `Build the right plan for your team`;
const description = `Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!`;
const postForView = 3;


class PricingLayoutsTypeThird extends Component {

    state = {
        postForView: postForView,
        pricing: [
            {
                type: 'Starter',
                id: 1,
                description: 'Go beyond email and customize your workflow',
                firstLink: '#/some-link#1',
                secondLink: '#/some-link#2',
                cost: 19,
                features : ['2 Emails', '2 Databases', '50 Gb Bandwidtch', '10 Gb Storage']
            },
            {
                type: 'Method Plus',
                id: 2,
                description: 'Go beyond email and customize your workflow',
                firstLink: '#/some-link#3',
                secondLink: '#/some-link#4',
                cost: 29,
                features : ['10 Emails', '5 Databases', '80 Gb Bandwidtch', '15 Gb Storage']
            },
            {
                type: 'Method Pro',
                id: 3,
                description: 'Go beyond email and customize your workflow',
                firstLink: '#/some-link#4',
                secondLink: '#/some-link#5',
                cost: 39,
                features : ['15 Emails', '10 Databases', '125 Gb Bandwidtch', '25 Gb Storage']
            },
            {
                type: 'Method Business',
                id: 4,
                description: 'Go beyond email and customize your workflow',
                firstLink: '#/some-link#4',
                secondLink: '#/some-link#5',
                cost: 49,
                features : ['20 Emails', '20 Databases', '200 Gb Bandwidtch', '50 Gb Storage']
            }
        ]
    }

    renderCards () {
        const card = this.state.pricing;
        const listItems = card.filter((element, index) => {
                if (index < this.state.postForView) {
                    return true
                }
            }
        ).map((item, index) => {
            return (
                <div key={index}>
                    <Pricing
                        title={item.type}
                        descr={item.descr}
                        cost={item.cost}
                        array={item.features}
                        firstLink={item.firstLink}
                        secondLink={item.secondLink}
                        dark={this.props.dark ? true : false}
                    />
                </div>
            )
        });
        return (
            <Row className={classes.pricingRow}>
                <Col lg="4" md="4">
                    <CustomElement
                        dark={this.props.dark ? true : false}
                    >
                        <Fade down delay={100} triggerOnce={true}>
                            {listItems[0]}
                        </Fade>
                    </CustomElement>

                </Col>
                <Col lg="8" md="8" >
                    <Fade down delay={150} triggerOnce={true}>
                        <div style={{height: '100%'}}>
                            <ComplexElement
                                left={listItems[1]}
                                right={listItems[2]}
                                dark={this.props.dark ? true : false}
                            >
                            </ComplexElement>
                        </div>
                    </Fade>
                </Col>
            </Row>
        );
    }

    render() {

        return (
            <div>
                <section className={`section ${classes.pricing} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.wrapper}>
                        <Container>
                            <Row>
                                <Col lg="7" md="7">
                                    <Fade top triggerOnce={true}>
                                        <h1 className={`title text-left ${classes.title}`}>{title}</h1>
                                    </Fade>
                                </Col>
                                <Col lg="5" md="5">
                                    <Fade top delay={50} triggerOnce={true}>
                                        <p className={`normal-text ${classes.description} ${classes.firstDescription}`}>{description}</p>
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

export default PricingLayoutsTypeThird