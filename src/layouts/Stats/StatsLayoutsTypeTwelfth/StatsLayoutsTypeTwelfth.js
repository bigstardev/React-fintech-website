import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import {Fade} from "react-awesome-reveal";
import classes from "./StatsLayoutsTypeTwelfth.module.css"

import Tabs from "../../../components/Tabs/Tabs";
import Dashboard from "./Dashboard/Dashboard";

const title = "Statistics"

const options = {
    maintainAspectRatio: true,
    bezierCurve: false,
    scales: {
        xAxes: [{
            categoryPercentage: 1.0,
            barPercentage: 1.0,
            display: false,

        }],
    },
    legend: {
        display: false,
        labels: {
            fontColor: "red",
            fontSize: 18
        }
    },
    tooltips: {
        callbacks: {
            label: function(tooltipItem) {
                return tooltipItem.yLabel;
            }
        }
    },
    plugins: {
        datalabels: {
            display: false,
        }
    }
}


class StatsLayoutsTypeTwelfth extends Component {

    constructor(props){
        super(props)
        this.state = {
            activePeriod: 'yearly',
            period: {
                yearly: {
                    desktop: {
                        labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                        datasets: [
                            {
                                label: "Desktop",
                                backgroundColor: 'transparent',
                                borderColor: '#345DEE',
                                pointBackgroundColor: '#345DEE',
                                data: [1000, 900, 500, 400, 1100, 300, 500, 800, 300 ,600 ,1400, 900,700 , 600],
                                prevPeriod: [300, 400, 500, 200, 200, 100, 400, 140, 540, 210, 450, 125, 400, 300],
                                lineTension: 0
                            },
                        ]
                    },
                    smartphone: {
                        labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                        datasets: [
                            {
                                label: "Smartphone",
                                backgroundColor: 'transparent',
                                borderColor: '#345DEE',
                                pointBackgroundColor: '#345DEE',
                                data: [700, 400, 650, 600, 1500, 700, 200, 850, 400 ,200 ,700, 500, 400, 300],
                                prevPeriod: [300, 400, 500, 200, 200, 100, 400, 140, 540, 210, 450, 125, 400, 300],
                                lineTension: 0
                            },
                        ]
                    },
                    tablet: {
                        labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                        datasets: [
                            {
                                label: "Tablet",
                                backgroundColor: 'transparent',
                                borderColor: '#345DEE',
                                pointBackgroundColor: '#345DEE',
                                data: [600, 500, 250, 500, 1100, 400, 400, 450, 100 ,2500 ,400, 600, 700, 800],
                                prevPeriod: [300, 400, 500, 200, 200, 100, 400, 140, 540, 210, 450, 125, 400, 300],
                                lineTension: 0
                            },
                        ]
                    }
                },
                monthly: {
                    desktop: {
                        labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                        datasets: [
                            {
                                label: "Primary",
                                backgroundColor: 'transparent',
                                borderColor: '#345DEE',
                                pointBackgroundColor: '#345DEE',
                                data: [700, 400, 650, 600, 1500, 700, 200, 850, 400 ,200 ,700, 500, 400, 300],
                                prevPeriod: [300, 400, 500, 200, 200, 100, 400, 140, 540, 210, 450, 125, 400, 300],
                                lineTension: 0
                            },
                        ]
                    },
                    smartphone: {
                        labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                        datasets: [
                            {
                                label: "Smartphone",
                                backgroundColor: 'transparent',
                                borderColor: '#345DEE',
                                pointBackgroundColor: '#345DEE',
                                data: [1000, 900, 500, 400, 1100, 300, 500, 800, 300 ,600 ,1400, 900,700 , 600],
                                prevPeriod: [300, 400, 500, 200, 200, 100, 400, 140, 540, 210, 450, 125, 400, 300],
                                lineTension: 0
                            },
                        ]
                    },
                    tablet: {
                        labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                        datasets: [
                            {
                                label: "Tablet",
                                backgroundColor: 'transparent',
                                borderColor: '#345DEE',
                                pointBackgroundColor: '#345DEE',
                                data: [200, 300, 650, 1100, 500, 200, 300, 150, 1100 ,1200 ,400, 100, 1100, 200],
                                prevPeriod: [300, 400, 500, 200, 200, 100, 400, 140, 540, 210, 450, 125, 400, 300],
                                lineTension: 0
                            },
                        ]
                    }
                },
            },
            category: [
                'Yearly', 'Monthly'
            ]
        }
    }

    onLinksClickHandler = (event) => {
        event.preventDefault();
        const currentValue = event.currentTarget.innerText.toLowerCase().replace(/ /g,"-");
        this.setState({activePeriod: currentValue });
    }

    render() {

        return (
            <div>
                <section className={`section ${classes.stats} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row className={classes.topLevel}>
                                <Col lg={7} md={7} sm={6}>
                                    <Fade top triggerOnce={true}>
                                        <h1>{title}</h1>
                                    </Fade>
                                </Col>
                                <Col lg={3} md={3} sm={6} className="ml-auto">
                                    <Fade top delay={50} triggerOnce={true}>
                                        <div style={{width: '100%'}}>
                                            <Tabs
                                                array={this.state.category}
                                                onClick={this.onLinksClickHandler}
                                            />
                                        </div>
                                    </Fade>
                                </Col>
                            </Row>
                            <Row className={classes.bottomLevel}>
                                <Col lg={4} md={6} className={classes.item}>
                                    <Fade top delay={100} triggerOnce={true}>
                                        <div className={classes.chartWrapper}>
                                            <Dashboard
                                                title="Desktop"
                                                data={this.state.period[this.state.activePeriod].desktop}
                                                options={options}
                                                dark={this.props.dark ? true : false}
                                            />
                                        </div>
                                    </Fade>
                                </Col>
                                <Col lg={4} md={6} className={classes.item}>
                                    <Fade top delay={150} triggerOnce={true}>
                                        <div className={classes.chartWrapper}>
                                            <Dashboard
                                                title="Smartphone"
                                                data={this.state.period[this.state.activePeriod].smartphone}
                                                options={options}
                                                dark={this.props.dark ? true : false}
                                            />
                                        </div>
                                    </Fade>
                                </Col>
                                <Col lg={4} md={6} className={classes.item}>
                                    <Fade top delay={200} triggerOnce={true}>
                                        <div className={classes.chartWrapper}>
                                            <Dashboard
                                                title="Tablet"
                                                data={this.state.period[this.state.activePeriod].tablet}
                                                options={options}
                                                dark={this.props.dark ? true : false}
                                            />
                                        </div>
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

export default StatsLayoutsTypeTwelfth
