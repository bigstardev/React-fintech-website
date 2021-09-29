import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./StatsLayoutsTypeFirst.module.css"
import Tabs from "../../../components/Tabs/Tabs";
import LinesCustom from "../../../components/Chart/LineCustom";
import BarCustom from "../../../components/Chart/BarsCustom";
import {Pie} from "react-chartjs-2";
import 'chartjs-plugin-datalabels';
import { v4 as uuidv4 } from 'uuid';
import {Fade} from "react-awesome-reveal";

const title = "Overall Statistics"
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!"


class StatsLayoutsTypeFirst extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeType: 'monthly',
            period: {
                monthly: {
                    chartData: {
                        dark: {
                            lines: {
                                labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                                datasets: [
                                    {
                                        label: "Primary",
                                        backgroundColor: '#1D2C6B',
                                        borderColor: '#345DEE',
                                        pointBackgroundColor: '#345DEE',
                                        data: [1000, 900, 500, 400, 1100, 300, 500, 800, 300 ,600 ,1400, 900],
                                    }
                                ]
                            },
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
                            pie: {
                                labels: [
                                    'Primary',
                                    'Secondary',
                                ],
                                datasets: [{
                                    data: [300, 150 ],
                                    backgroundColor: [
                                        '#EE3465',
                                        '#345DEE'
                                    ],
                                }]
                            }

                        },
                        origin: {
                            lines: {
                                labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                                datasets: [
                                    {
                                        label: "Primary",
                                        backgroundColor: '#EFF2F6',
                                        borderColor: '#345DEE',
                                        pointBackgroundColor: '#345DEE',
                                        data: [1000, 900, 500, 400, 1100, 300, 500, 800, 300 ,600 ,1400, 900],
                                    }
                                ],
                            },
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
                            pie: {
                                labels: [
                                    'Primary',
                                    'Secondary',
                                ],
                                datasets: [{
                                    data: [300, 150 ],
                                    backgroundColor: [
                                        '#EE3465',
                                        '#345DEE'
                                    ],
                                }]
                            }
                        }
                    },
                    total : [
                        {'Credits': '27%'},
                        {'Products': '256'},
                        {'Customers': '450'}
                    ],
                    pieStatistic : [
                        {'During the previous day': '36'},
                        {'For the current month': '2400'},
                    ],


                },
                yearly: {
                    chartData: {
                        dark: {
                            lines: {
                                labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                                datasets: [
                                    {
                                        label: "Primary",
                                        backgroundColor: '#1D2C6B',
                                        borderColor: '#345DEE',
                                        pointBackgroundColor: '#345DEE',
                                        data: [900, 700, 400, 800, 1700, 1200, 700, 300, 700 ,600 ,1400, 900],
                                    }
                                ]
                            },
                            bars: {
                                labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", " Oct", "Nov", "Dec"],
                                datasets: [
                                    {
                                        label: "Primary",
                                        data: [1000, 900, 500, 400, 1100, 300, 500, 800, 300 ,600 ,1400, 900],
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
                            pie: {
                                labels: [
                                    'Primary',
                                    'Secondary',
                                ],
                                datasets: [{
                                    data: [100, 250 ],
                                    backgroundColor: [
                                        '#EE3465',
                                        '#345DEE'
                                    ],
                                }]
                            }
                        },
                        origin: {
                            lines : {
                                labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                                datasets: [
                                    {
                                        label: "Primary",
                                        backgroundColor: '#EFF2F6',
                                        borderColor: '#345DEE',
                                        pointBackgroundColor: '#345DEE',
                                        data: [900, 700, 400, 800, 1700, 1200, 700, 300, 700 ,600 ,1400, 900],
                                    }
                                ]
                            },
                            bars: {
                                labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", " Oct", "Nov", "Dec"],
                                datasets: [
                                    {
                                        label: "Primary",
                                        data: [1000, 900, 500, 400, 1100, 300, 500, 800, 300 ,600 ,1400, 900],
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
                            pie: {
                                labels: [
                                    'Primary',
                                    'Secondary',
                                ],
                                datasets: [{
                                    data: [100, 250 ],
                                    backgroundColor: [
                                        '#EE3465',
                                        '#345DEE'
                                    ],
                                }]
                            }
                        },
                    },
                    total : [
                        {'Credits': '37%'},
                        {'Products': '206'},
                        {'Customers': '150'}
                    ],
                    pieStatistic : [
                        {'During the previous year': '360'},
                        {'For the current year': '24000'},
                    ],
                },
            },
            category: [
                'Monthly', 'Yearly'
            ]
        }
    }

    onLinksClickHandler = (event) => {
        event.preventDefault();
        const currentValue = event.currentTarget.innerText.toLowerCase().replace(/ /g,"-");
        this.setState({activeType: currentValue });
    }
    render() {

        return (
            <div>
                <section className={`section ${classes.stats} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row className={classes.topLevel}>
                                <Col lg="7" md="7" sm="6">
                                    <Fade top triggerOnce={true}>
                                        <h1>{title}</h1>
                                    </Fade>
                                </Col>
                                <Col lg="3" md="4" sm="6" className="ml-auto">
                                    <Fade top triggerOnce={true}>
                                        <div style={{width: '100%'}}>
                                            <Tabs
                                                array={this.state.category}
                                                onClick={this.onLinksClickHandler}
                                            />
                                        </div>
                                    </Fade>
                                </Col>
                                <Col className="col-12">
                                    <Fade top delay={50} triggerOnce={true}>
                                        <p className={`normal-text ${classes.description}`}>{description}</p>
                                    </Fade>
                                </Col>
                            </Row>

                            <Row className={classes.chartTitleRow}>
                                <Col>
                                    <div className={classes.wrapper}>
                                        <Fade top delay={100} triggerOnce={true}>
                                        <div className={classes.left}>
                                            <div className={`bold-text ${classes.boldText} ${classes.header}`}>Credits Reporting</div>
                                        </div>
                                        <div className={classes.right}>
                                                {this.state.period[this.state.activeType].total.map((el, index) => {
                                                    return (
                                                        <div className={`${classes.data} ${classes.boldText}  bold-text`} key={index}>
                                                            {el[Object.keys(el)[0]]}
                                                            &nbsp;
                                                            {Object.keys(el)[0]}
                                                        </div>
                                                    )
                                                })}
                                        </div>
                                        </Fade>
                                    </div>
                                </Col>
                            </Row>

                            <Row className={classes.chartRow}>
                                <Col>
                                    <div className={classes.chartWrapper}>
                                        <Fade delay={200} triggerOnce={true}>
                                            <LinesCustom
                                                data={this.props.dark == true ? this.state.period[this.state.activeType].chartData.dark.lines :this.state.period[this.state.activeType].chartData.origin.lines }
                                            />
                                        </Fade>
                                    </div>
                                </Col>
                            </Row>

                            <Row className={classes.bottom}>
                                <Col lg="8" >
                                    <Row className={classes.chartTitleRow}>
                                        <Col className={classes.col}>
                                            <Fade down delay={100} triggerOnce={true}>
                                                <div className={`${classes.header} ${classes.boldText} bold-text`} >Spending by Merchants</div>
                                            </Fade>
                                        </Col>
                                    </Row>
                                    <Row className={`${classes.chartRow} ${classes.bottom}`}>
                                        <Col className={classes.col}>
                                            <Fade down delay={150} triggerOnce={true}>
                                                <div className={classes.chartWrapper}>
                                                    <BarCustom
                                                        data={this.props.dark == true ? this.state.period[this.state.activeType].chartData.dark.bars :this.state.period[this.state.activeType].chartData.origin.bars }
                                                        width={100}
                                                        height={25}
                                                    />
                                                </div>
                                            </Fade>
                                        </Col>
                                    </Row>

                                </Col>
                                <Col lg="4" md="6">
                                    <Row className={classes.chartTitleRow}>
                                        <Col className={classes.col}>
                                            <Fade down delay={100} triggerOnce={true}>
                                                <div className={`${classes.header} ${classes.boldText} bold-text`} >Statistics</div>
                                            </Fade>
                                        </Col>
                                    </Row>
                                    <Row className={`${classes.chartRow} ${classes.bottom}`}>
                                        <Col className={classes.col}>
                                            <Fade down delay={150} triggerOnce={true}>
                                                <div className={classes.footer}>
                                                    <div className={classes.left}>
                                                        {this.state.period[this.state.activeType].pieStatistic.map((el, index) => {
                                                            return (
                                                                <div className={classes.data} key={index}>
                                                                    <p className={`small-text ${classes.smallText}`}>{Object.keys(el)[0]}</p>
                                                                    <div className={`${classes.boldText} bold-text`}>${el[Object.keys(el)[0]]}</div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                    <div className={classes.right}>
                                                        <Pie
                                                            key={uuidv4()}
                                                            data={this.props.dark == true ? this.state.period[this.state.activeType].chartData.dark.pie : this.state.period[this.state.activeType].chartData.origin.pie }
                                                            width={100}
                                                            height={78}
                                                            options={{
                                                                legend: {
                                                                    display: false
                                                                },
                                                                tooltips: {
                                                                    enabled: false
                                                                },
                                                                plugins: {
                                                                    datalabels: {
                                                                        formatter: (value, ctx) => {
                                                                            let sum = 0;
                                                                            let dataArr = ctx.chart.data.datasets[0].data;
                                                                            dataArr.map(data => {
                                                                                sum += data;
                                                                            });
                                                                            let percentage = (value*100 / sum).toFixed(0)+"%";
                                                                            return percentage;
                                                                        },
                                                                        color: '#fff',
                                                                        font: {
                                                                            weight: 'bold',
                                                                            size: 16,
                                                                            lineHeight: 19,
                                                                        }
                                                                    }
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </Fade>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <div>
                            </div>
                        </Container>
                    </div>
                </section>
            </div>
        )
    }
}

export default StatsLayoutsTypeFirst
