import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import {Fade} from "react-awesome-reveal";
import classes from "./StatsLayoutsTypeTenth.module.css"

import {Doughnut, Pie} from 'react-chartjs-2'
import 'chartjs-plugin-datalabels';

const title = "Combo chart";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";

const dataDoughnut = {
    labels: ['18-24 age', '24-38 age', '40-54 age', '56-65 age'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5],
            backgroundColor: [
                'rgba(52, 93, 238, 0.8)',
                'rgba(238, 52, 101, 0.8)',
                'rgba(24, 33, 77, 0.8)',
                'rgba(239, 242, 246, 0.8)',
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
            ],
            borderWidth: 2,
        },
    ],
}

const dataPie = {
    labels: ['Desktop', 'Smartphone', 'Tablet'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(238, 52, 101, 0.8)',
                'rgba(52, 93, 238, 0.8)',
                'rgba(24, 33, 77, 0.8)',
            ],
            borderColor: [
                'rgba(238, 52, 101, 1)',
                'rgba(52, 93, 238, 1)',
                'rgba(24, 33, 77, 1)',
            ],
            borderWidth: 1,
        },
    ],
}


class StatsLayoutsTypeTenth extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <div>
                <section className={`section ${classes.stats} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row className={classes.topLevel}>
                                <Col lg="8" md="8" className="mx-auto">
                                    <Fade top triggerOnce={true}>
                                        <h1 className="text-center">{title}</h1>
                                    </Fade>
                                    <Fade top delay={50} triggerOnce={true}>
                                        <p className={classes.description}>{description}</p>
                                    </Fade>
                                </Col>
                            </Row>
                            <Row className={classes.bottomLevel}>
                                <Col lg={6} md={9} className={classes.item}>
                                    <div className={classes.chartWrapper}>
                                        <Fade top delay={100} triggerOnce={true}>
                                            <div className="chart">
                                                <Doughnut
                                                    data={dataDoughnut}
                                                    options={{
                                                        legend: {
                                                            display: true,
                                                            position: "bottom",
                                                            align: 'center',
                                                            labels: {
                                                                padding: 30,
                                                                boxWidth: 10,
                                                                usePointStyle: true,
                                                            },
                                                        },
                                                        tooltips: {
                                                            callbacks: {
                                                                label: function(tooltipItem, data) {
                                                                    //get the concerned dataset
                                                                    let dataset = data.datasets[tooltipItem.datasetIndex];
                                                                    //calculate the total of this data set
                                                                    let total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                                                                        return previousValue + currentValue;
                                                                    });
                                                                    //get the current items value
                                                                    let currentValue = dataset.data[tooltipItem.index];
                                                                    //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
                                                                    let percentage = Math.floor(((currentValue/total) * 100)+0.5);

                                                                    return percentage + "%";
                                                                }
                                                            }
                                                        },
                                                        plugins: {
                                                            datalabels: {
                                                                display: false,
                                                            }
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </Fade>
                                    </div>
                                </Col>
                                <Col lg={6} md={9} className={classes.item}>
                                    <div className={classes.chartWrapper}>
                                        <Fade top delay={100} triggerOnce={true}>
                                            <div className="chart">
                                                <Pie
                                                    data={dataPie}
                                                    options={{
                                                        legend: {
                                                            display: true,
                                                            position: "bottom",
                                                            align: 'center',
                                                            labels: {
                                                                padding: 30,
                                                                boxWidth: 8,
                                                                usePointStyle: true,
                                                            }
                                                        },
                                                        tooltips: {
                                                            callbacks: {
                                                                label: function(tooltipItem, data) {
                                                                    //get the concerned dataset
                                                                    let dataset = data.datasets[tooltipItem.datasetIndex];
                                                                    //calculate the total of this data set
                                                                    let total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                                                                        return previousValue + currentValue;
                                                                    });
                                                                    //get the current items value
                                                                    let currentValue = dataset.data[tooltipItem.index];
                                                                    //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
                                                                    let percentage = Math.floor(((currentValue/total) * 100)+0.5);

                                                                    return percentage + "%";
                                                                }
                                                            }
                                                        },
                                                        plugins: {
                                                            datalabels: {
                                                                display: false,
                                                            }
                                                        }
                                                    }}
                                                />
                                            </div>
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

export default StatsLayoutsTypeTenth
