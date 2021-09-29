import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Pricing from "./Pricing/PricingTypeFifth";
import Slider from "./Slider/Slider";
import { Fade } from "react-awesome-reveal";
import classes from "./PricingLayoutsTypeFifth.module.css"

const title = `Pricing Options`;
const description = `Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!`;

class PricingLayoutsTypeFifth extends Component {

    state = {
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
        const listItems = card.map((item, index) => {
            return (
                <div style={{width: "100%"}} className={classes.item}>
                    <Fade down delay={`${index}0`} triggerOnce={true}>
                        <Pricing
                            key={index}
                            title={item.type}
                            cost={item.cost}
                            array={item.features}
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
                            <Row>
                                <Col lg="8" md="8" className="mx-auto">
                                    <Fade down triggerOnce={true}>
                                        <h1 className={`${classes.title} text-center`}>{title}</h1>
                                    </Fade>
                                    <Fade down delay={50} triggerOnce={true}>
                                        <p className={`normal-text ${classes.description} text-center`}>{description}</p>
                                    </Fade>
                                </Col>
                            </Row>
                            <Row className={classes.pricing}>
                                <Col className="p-0">
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

export default PricingLayoutsTypeFifth