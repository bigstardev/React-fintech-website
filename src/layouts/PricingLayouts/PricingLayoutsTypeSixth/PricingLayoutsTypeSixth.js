import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Pricing from "./Pricing/PricingTypeFifth";
import { Fade } from "react-awesome-reveal";
import classes from "./PricingLayoutsTypeSixth.module.css"

const title = `Pricing Options`;
const description= `Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!`;
const postForView = 3;


class PricingLayoutsTypeSixth extends Component {

    state = {
        postForView: postForView ,
        pricing: [
            {
                type: 'Starter',
                id: 1,
                descr: 'Go beyond email and customize your workflow',
                firstLink: '#/some-link#1',
                secondLink: '#/some-link#2',
                cost: 'Free',
                features : ['2 Emails', '2 Databases', '50 Gb Bandwidtch', '10 Gb Storage']
            },
            {
                type: 'Method Plus',
                id: 2,
                descr: 'Go beyond email and customize your workflow',
                firstLink: '#/some-link#3',
                secondLink: '#/some-link#4',
                cost: 29,
                features : ['10 Emails', '5 Databases', '80 Gb Bandwidtch', '15 Gb Storage']
            },
            {
                type: 'Method Pro',
                id: 3,
                descr: 'Go beyond email and customize your workflow',
                firstLink: '#/some-link#4',
                secondLink: '#/some-link#5',
                cost: 39,
                features : ['15 Emails', '10 Databases', '125 Gb Bandwidtch', '25 Gb Storage']
            },
            {
                type: 'Method Business',
                id: 4,
                descr: 'Go beyond email and customize your workflow',
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
                <Col lg="4" md="4" className={`${classes.item} p-0`} key={index}>
                    <Fade down delay={`${index}0`} triggerOnce={true}>
                    <div className={classes.outer}>
                            <Pricing
                                title={item.type}
                                cost={item.cost}
                                array={item.features}
                                firstLink={item.firstLink}
                                secondLink={item.secondLink}
                                dark={this.props.dark ? true : false}
                            />
                    </div>
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
                <section className={`section ${classes.pricing} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.wrapper}>
                        <Container>
                            <Row>
                                <Col lg="8" md="8" className="mx-auto">
                                    <Fade down triggerOnce={true}>
                                        <h1 className={`${classes.title} text-center`}>{title}</h1>
                                    </Fade>
                                    <Fade down delay={50} triggerOnce={true}>
                                        <p className={`${classes.description} text-center`}>{description}</p>
                                    </Fade>
                                </Col>
                            </Row>
                            <Row className={classes.pricingRow}>
                                {this.renderCards()}
                            </Row>

                        </Container>
                    </div>
                </section>
            </div>
        )
    }
}

export default PricingLayoutsTypeSixth