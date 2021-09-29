import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Chart from "../../../components/Chart/Chart";
import Tabs from "../../../components/Tabs/Tabs";
import {Fade} from "react-awesome-reveal";
import classes from "./StatsLayoutsTypeThird.module.css"

const title = "Yearly Price Change"

class StatsLayoutsTypeThird extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeCity: 'london',
            city: {
                london: {
                    chartData: {
                        dark: {
                            labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                            datasets: [{
                                label: null,
                                data: [1200, 900, 800, 500, 1600, 1300, 500, 900, 500, 700, 1450, 900],
                                backgroundColor: [
                                    '#1D2C6B',
                                    '#121B3F',
                                    '#1D2C6B',
                                    '#121B3F',
                                    '#1D2C6B',
                                    '#121B3F',
                                    '#1D2C6B',
                                    '#121B3F',
                                    '#1D2C6B',
                                    '#121B3F',
                                    '#1D2C6B',
                                ],
                                hoverBackgroundColor: '#345DEE',
                                highlightFill: "red",
                                highlightStroke: "red",
                            }]
                        },
                        origin: {
                            labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                            datasets: [{
                                label: null,
                                data: [1200, 900, 800, 500, 1600, 1300, 500, 900, 500, 700, 1450, 900],
                                backgroundColor: [
                                    '#EFF2F6',
                                    '#DFE4EA',
                                    '#EFF2F6',
                                    '#DFE4EA',
                                    '#EFF2F6',
                                    '#DFE4EA',
                                    '#EFF2F6',
                                    '#DFE4EA',
                                    '#EFF2F6',
                                    '#DFE4EA',
                                    '#EFF2F6',
                                ],
                                hoverBackgroundColor: '#345DEE',
                            }]
                        }
                    }

                },
                moscow: {
                    chartData: {
                        dark: {
                            labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                            datasets: [{
                                label: null,
                                data: [1000, 900, 500, 400, 1100, 300, 500, 800, 300, 600, 1400, 900],
                                backgroundColor: [
                                    '#1D2C6B',
                                    '#121B3F',
                                    '#1D2C6B',
                                    '#121B3F',
                                    '#1D2C6B',
                                    '#121B3F',
                                    '#1D2C6B',
                                    '#121B3F',
                                    '#1D2C6B',
                                    '#121B3F',
                                    '#1D2C6B',
                                ],
                                hoverBackgroundColor: '#345DEE',
                                /*lineTension: 0,*/
                            }]
                        },
                        origin: {
                            labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                            datasets: [{
                                label: null,
                                data: [1000, 900, 500, 400, 1100, 300, 500, 800, 300, 600, 1400, 900],
                                backgroundColor: [
                                    '#EFF2F6',
                                    '#DFE4EA',
                                    '#EFF2F6',
                                    '#DFE4EA',
                                    '#EFF2F6',
                                    '#DFE4EA',
                                    '#EFF2F6',
                                    '#DFE4EA',
                                    '#EFF2F6',
                                    '#DFE4EA',
                                    '#EFF2F6',
                                ],
                                hoverBackgroundColor: '#345DEE',
                                /*lineTension: 0,*/
                            }]
                        },
                    }
                },
            },
            category: [
                'London', 'Moscow'
            ]
        }
    }

    onLinksClickHandler = (event) => {
        event.preventDefault();
        const currentValue = event.currentTarget.innerText.toLowerCase().replace(/ /g,"-");
        this.setState({activeCity: currentValue });
    }
    render() {

        return (
            <div>
                <section className={`section ${classes.stats} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row className={classes.topLevel}>
                                <Col lg="6" md="6">
                                    <Fade top triggerOnce={true}>
                                        <h1>{title}</h1>
                                    </Fade>
                                </Col>
                                <Col lg="3" md="6" className="ml-auto d-flex ">
                                    <div style={{width: '100%'}}>
                                    <Fade top delay={50} triggerOnce={true}>
                                            <Tabs
                                                array={this.state.category}
                                                onClick={this.onLinksClickHandler}
                                            />
                                    </Fade>
                                    </div>
                                </Col>
                            </Row>
                            <Row className={classes.bottomLevel}>
                                <Col>
                                    <div className={classes.chartWrapper}>
                                        <Fade top delay={100} triggerOnce={true}>
                                            <Chart
                                                data={this.props.dark == true ? this.state.city[this.state.activeCity].chartData.dark :this.state.city[this.state.activeCity].chartData.origin }
                                            />
                                        </Fade>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </div>
        )
    }
}

export default StatsLayoutsTypeThird