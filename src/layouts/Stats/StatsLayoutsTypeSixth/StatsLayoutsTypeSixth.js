import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Stats from "./Stats/Stats";
import Button from "../../../components/Button/Button";
import Divider from "../../../components/Divider/Divider";
import {Fade} from "react-awesome-reveal";
import classes from "./StatsLayoutsTypeSixth.module.css"

const title = "Overall Statistics";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";

class StatsLayoutsTypeSixth extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [
                {
                    store: "Apple Store",
                    storeDescription: "Apple iPhone XS Max",
                    color: "Space Gray",
                    capacity: "256GB",
                    price: "1214",
                    chartData: {
                        bars: {
                            labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", " Oct", "Nov", "Dec"],
                            datasets: [
                                {
                                    label: "Primary",
                                    data: [800, 300, 800, 400, 1100, 800, 1500, 600, 500 ,600 ,1400, 900],
                                    backgroundColor: [
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#345DEE',
                                        '#EE3465',
                                    ],
                                },
                            ],
                        },
                    }
                },
                {
                    store: "Apple Store",
                    storeDescription: "Apple iPhone XS Max",
                    color: "Space Gray",
                    capacity: "256GB",
                    price: "1214",
                    chartData: {
                        bars: {
                            labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", " Oct", "Nov", "Dec"],
                            datasets: [
                                {
                                    label: "Primary",
                                    data: [1800, 1300, 600, 800, 1000, 500, 1200, 100, 100 ,600 ,1400, 900],
                                    backgroundColor: [
                                        '#345DEE',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                    ],
                                },
                            ],
                        },
                    }
                },
                {
                    store: "Apple Store",
                    storeDescription: "Apple iPhone XS Max",
                    color: "Space Gray",
                    capacity: "256GB",
                    price: "1214",
                    chartData: {
                        bars: {
                            labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", " Oct", "Nov", "Dec"],
                            datasets: [
                                {
                                    label: "Primary",
                                    data: [1800, 1300, 600, 800, 1000, 500, 1200, 100, 100 ,600 ,1400, 900],
                                    backgroundColor: [
                                        '#345DEE',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                    ],
                                },
                            ],
                        },
                    }
                },
                {
                    store: "Apple Store",
                    storeDescription: "Apple iPhone XS Max",
                    color: "Space Gray",
                    capacity: "256GB",
                    price: "1214",
                    chartData: {
                        bars: {
                            labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", " Oct", "Nov", "Dec"],
                            datasets: [
                                {
                                    label: "Primary",
                                    data: [1800, 1300, 600, 800, 1000, 500, 1200, 100, 100 ,600 ,1400, 900],
                                    backgroundColor: [
                                        '#345DEE',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                        '#EE3465',
                                    ],
                                },
                            ],
                        },
                    }
                }
            ],
        }
    }

    renderCards () {
        const card = this.state.products;
        const listItems = card.map((item, index) => {
            return (
                <Col key={index} className="col-12">
                    <Fade top delay={`${index}1`} triggerOnce={true}>
                        <Stats
                            store={item.store}
                            storeDescription={item.storeDescription}
                            color={item.color}
                            capacity={item.capacity}
                            price={item.price}
                            data={item.chartData.bars}
                            dark={this.props.dark ? true : false}
                        />
                    </Fade>
                </Col>
            )
        });
        return (
            <Row className={classes.statsRow}>
                <Col>
                    <Fade top delay={100} triggerOnce={true}>
                        <Divider/>
                    </Fade>
                </Col>
                {listItems}
            </Row>
        );
    }

    render() {

        return (
            <div>
                <section className={`section ${classes.stats} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row className="top-row">
                                <Col lg="7" md="7" className="mx-auto text-center">
                                    <Fade top triggerOnce={true}>
                                        <h1>{title}</h1>
                                    </Fade>
                                    <Fade top delay={50} triggerOnce={true}>
                                        <p className={`normal-text ${classes.description}`}>{description}</p>
                                    </Fade>
                                </Col>
                            </Row>
                            {this.renderCards()}
                            <Row className={classes.bottomRow}>
                                <Col lg="6" md="6" className="mx-auto d-flex justify-content-center">
                                    <Fade top delay={300} triggerOnce={true}>
                                        <Button
                                            link={true}
                                            href={"./some-link"}
                                            type={'button'}
                                            classes={'primary big simple'}
                                            value={'Explore Market'}
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

export default StatsLayoutsTypeSixth