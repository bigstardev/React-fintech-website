import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import {Fade} from "react-awesome-reveal";
import classes from "./StatsLayoutsTypeNinth.module.css"

import {Bar} from 'react-chartjs-2'

const title = "Combo chart";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";


const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", " Oct", "Nov", "Dec"],
    datasets: [
        {
            type: 'line',
            label: 'Line',
            borderColor: '#345DEE',
            borderWidth: 2,
            fill: false,
            data: [1400, 1900, 700, 800, 1500, 700, 600, 900, 400 ,700 ,400, 1100],
        },
        {
            type: 'bar',
            label: 'Bar 1',
            backgroundColor: '#EE3465',
            data: [1000, 900, 500, 400, 1100, 300, 500, 800, 300 ,600 ,1400, 900],
        },
        {
            type: 'bar',
            label: 'Bar 2',
            backgroundColor: '#345DEE',
            data: [1200, 1900, 300, 500, 800, 300, 700, 400, 900 ,400 ,1200, 500],
        },
    ],
}

const MultiType = () => (
    <div className="chart">
        <Bar
            data={data}
            options ={
                {
                    scales: {
                        xAxes: [{
                            categoryPercentage: 0.5,
                            barPercentage: 0.6
                        }]
                    },
                    legend: {
                        display: true,
                        position: "bottom",
                        align: 'start',
                        labels: {
                            boxWidth: 20,
                            usePointStyle: true,
                        }
                    },
                    plugins: {
                        datalabels: {
                            display: false,
                        }
                    },
                    tooltips: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return tooltipItem.yLabel;
                            }
                        }
                    },
                }
            }
        />
    </div>
)

class StatsLayoutsTypeNinth extends Component {

    constructor(props){
        super(props)
        this.state = {
            chartData:{
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", " Oct", "Nov", "Dec"],
                datasets: [
                    {
                        label: "Primary",
                        backgroundColor: '#345DEE',
                        borderColor: '#345DEE',
                        data: [1000, 900, 500, 400, 1100, 300, 500, 800, 300 ,600 ,1400, 900]
                    },
                    {
                        label: "Secondary",
                        backgroundColor: '#EE3465',
                        data: [1200, 1900, 300, 500, 800, 300, 700, 400, 900 ,400 ,1200, 500]
                    }
                ],
            },
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
                                <Col>
                                    <div className={classes.chartWrapper}>
                                        <Fade top delay={100} triggerOnce={true}>
                                            <MultiType/>
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

export default StatsLayoutsTypeNinth
