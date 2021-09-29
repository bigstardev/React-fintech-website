import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";

import LinesCustom from "../../../components/Chart/LineCustom";
import {Fade} from "react-awesome-reveal";
import classes from "./StatsLayoutsTypeSeventh.module.css"
import Button from "../../../components/Button/Button";

const title = "Monthly Price Change"
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";
const marketLink = "./some-link"

class StatsLayoutsTypeSeventh extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeCity: 'london',
            city: {
                london: {
                    chartData: {
                        dark: {
                            labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                            datasets: [
                                {
                                    label: "Primary",
                                    backgroundColor: 'transparent',
                                    borderColor: '#345DEE',
                                    pointBackgroundColor: '#345DEE',
                                    data: [1000, 900, 500, 400, 1100, 300, 500, 800, 300 ,600 ,1400, 900],
                                    lineTension: 0
                                },
                                {
                                    label: "Neutral",
                                    backgroundColor: 'transparent',
                                    data: [1200, 1900, 300, 500, 800, 300, 700, 400, 900 ,400 ,1200, 500],
                                    borderColor: '#ffffff',
                                    pointBackgroundColor: '#ffffff',
                                    lineTension: 0
                                },
                            ]
                        },
                        origin: {
                            labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                            datasets: [
                                {
                                    label: "Primary",
                                    backgroundColor: 'transparent',
                                    borderColor: '#345DEE',
                                    pointBackgroundColor: '#345DEE',
                                    data: [1000, 900, 500, 400, 1100, 300, 500, 800, 300 ,600 ,1400, 900],
                                    lineTension: 0
                                },
                                {
                                    label: "Neutral",
                                    backgroundColor: 'transparent',
                                    borderColor: '#DFE4EA',
                                    pointBackgroundColor: '#DFE4EA',
                                    data: [1200, 1900, 300, 500, 800, 300, 700, 400, 900 ,400 ,1200, 500],
                                    lineTension: 0
                                },
                            ]
                        }
                    }

                },
                moscow: {
                    chartData: {
                        dark: {
                            labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                            datasets: [
                                {
                                    label: "Primary",
                                    backgroundColor: 'transparent',
                                    borderColor: '#345DEE',
                                    pointBackgroundColor: '#345DEE',
                                    data: [900, 700, 400, 800, 1700, 1200, 700, 300, 700 ,600 ,1400, 900],
                                    lineTension: 0
                                },
                                {
                                    label: "Neutral",
                                    backgroundColor: 'transparent',
                                    data: [1000, 1100, 1300, 1500, 300, 800, 300, 400, 900 ,400 ,1200, 500],
                                    borderColor: '#ffffff',
                                    pointBackgroundColor: '#ffffff',
                                    lineTension: 0
                                }
                            ]
                        },
                        origin: {
                            labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                            datasets: [
                                {
                                    label: "Primary",
                                    backgroundColor: 'transparent',
                                    borderColor: '#345DEE',
                                    pointBackgroundColor: '#345DEE',
                                    data: [900, 700, 400, 800, 1700, 1200, 700, 300, 700 ,600 ,1400, 900],
                                    lineTension: 0
                                },
                                {
                                    label: "Neutral",
                                    backgroundColor: 'transparent',
                                    borderColor: '#DFE4EA',
                                    pointBackgroundColor: '#DFE4EA',
                                    data: [1000, 1100, 1300, 1500, 300, 800, 300, 400, 900 ,400 ,1200, 500],
                                    lineTension: 0
                                }
                            ],
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
                                <Col lg="8" md="8" className="mx-auto">
                                    <Fade top triggerOnce={true}>
                                        <h1 className="text-center">{title}</h1>
                                    </Fade>
                                    <Fade top delay={50} triggerOnce={true}>
                                        <p className={`normal-text text-center ${classes.description}`}>{description}</p>
                                    </Fade>
                                </Col>
                            </Row>
                            <Row className={classes.bottomLevel}>
                                <Col>
                                    <div className={classes.chartWrapper}>
                                        <Fade top delay={100} triggerOnce={true}>
                                        <LinesCustom
                                            data={this.props.dark == true ? this.state.city[this.state.activeCity].chartData.dark :this.state.city[this.state.activeCity].chartData.origin }
                                        />
                                        </Fade>
                                    </div>
                                </Col>
                            </Row>
                            <Row className={classes.buttonRow}>
                                <Col lg="8" md="8" className="mx-auto d-flex justify-content-center">
                                    <Fade top delay={150} triggerOnce={true}>
                                        <Button
                                            link={true}
                                            href={marketLink}
                                            type={'button'}
                                            classes={`primary big simple ${classes.button}`}
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

export default StatsLayoutsTypeSeventh