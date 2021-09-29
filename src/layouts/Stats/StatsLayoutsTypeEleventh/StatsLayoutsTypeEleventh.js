import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import {Fade} from "react-awesome-reveal";
import classes from "./StatsLayoutsTypeEleventh.module.css"

import {HorizontalBar, Bar} from 'react-chartjs-2'

const dataBar = {
    labels: ['1', '2', '3', '4', '5', '6', 7],
    datasets: [
        {
            label: '# of Red Votes',
            data: [12, 19, 3, 10, 20, 15, 30],
            backgroundColor: '#345DEE',
        },
        {
            label: '# of Blue Votes',
            data: [(90-12), (90-19), (90-3), (90-10), (90-20), (90-15), (90-30)],
            backgroundColor: '#DFE4EA',
            hoverBackgroundColor: '#DFE4EA'
        },
    ],
}

const optionsBar = {
    legend: {
        display: false,
    },
    scales: {
        yAxes: [
            {
                stacked: true,
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
        xAxes: [
            {
                stacked: true,
                display: false,
                barPercentage: 0.6
            },
        ],
    },
    tooltips: {
        filter: function (tooltipItem) {
            return tooltipItem.datasetIndex === 0;
        },
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
}

// const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//         {
//             label: "Desktop",
//             stack: "Stack 0",
//             backgroundColor: "#345DEE",
//             data: [10, 20, 30, 40, 50, 60],
//         },
//         {
//             label: "Smartphone",
//             stack: "Stack 0",
//             backgroundColor: "#EE3465",
//             data: [10, 15, 30, 60, 50, 40].map((k) => -k),
//         },
//     ],
// }
//
// const options = {
//         tooltips: {
//             intersect: false,
//             callbacks: {
//                 label: (c) => {
//                     const value = Number(c.value);
//                     const positiveOnly = value < 0 ? -value : value;
//                     let retStr = "";
//                     if (c.datasetIndex === 0) {
//                         retStr += `Male: ${positiveOnly.toString()}`;
//                     } else {
//                         retStr += `Female: ${positiveOnly.toString()}`;
//                     }
//                     return retStr;
//                 },
//             },
//         },
//         responsive: true,
//         legend: {
//             display: true,
//             position: "bottom",
//             align: 'start',
//             labels: {
//                 padding: 30,
//                 boxWidth: 8,
//                 usePointStyle: true,
//             }
//         },
//         scales: {
//             xAxes: [
//                 {
//                     stacked: false,
//                     ticks: {
//                         beginAtZero: true,
//                         callback: (v) => {
//                             return v < 0 ? -v : v;
//                         },
//                     },
//                 },
//             ],
//             yAxes: [
//                 {
//                     stacked: true,
//                     ticks: {
//                         beginAtZero: true,
//                     },
//                     position: "left",
//                 }
//             ],
//         },
//         plugins: {
//             datalabels: {
//                 display: false,
//             }
//         }
// }

const data = {
    labels: ['Jun', 'Feb', 'Mar', 'Apr', 'May', ],
    datasets: [
        {
            label: 'Desktop',
            data: [20, 30, 20, 15, 20],
            backgroundColor: '#345DEE',
        },
        {
            label: 'Smartphones',
            data: [-20, -30, -20, -15, -20],
            backgroundColor: '#EE3465',
        },
    ],
}

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
    legend: {
        display: true,
        position: "bottom",
        align: 'start',
        labels: {
            padding: 30,
            boxWidth: 8,
            usePointStyle: true,
        }
    },
    plugins: {
        datalabels: {
            display: false,
        }
    }
}



class StatsLayoutsTypeTenth extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <section className={`section ${classes.stats} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row className={classes.bottomLevel}>
                                <Col lg={6} className={classes.item}>
                                    <Fade top delay={150} triggerOnce={true}>
                                        <div className={classes.chartWrapper}>
                                            <div className="chart">
                                                <h2 className={classes.title}>Аge users</h2>
                                                <Bar data={data} options={options} />
                                            </div>
                                        </div>
                                    </Fade>
                                </Col>
                                <Col lg={6} className={classes.item}>
                                    <Fade top delay={200} triggerOnce={true}>
                                        <div className={classes.chartWrapper}>
                                            <div className="chart">
                                                <h2 className={classes.title}>Users</h2>
                                                <Bar data={dataBar} options={optionsBar} />
                                                <div className={classes.textContent}>
                                                    <div className={classes.value}>
                                                        <span>28</span>%
                                                    </div>
                                                    <div className={classes.text}>Create screens directly in Method or add your images from Sketch or Figma</div>
                                                </div>
                                            </div>
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

export default StatsLayoutsTypeTenth
