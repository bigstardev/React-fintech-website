import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import {Fade} from "react-awesome-reveal";
import classes from "./StatsLayoutsTypeThirteenth.module.css"
import { Chart } from "react-google-charts";
import Tabs from "../../../components/Tabs/Tabs";

const title = "Country Statistics";

class StatsLayoutsTypeThirteenth extends Component {

    constructor(props){
        super(props)
        this.state = {
            activePeriod: 'yearly',
            data: {
                yearly: [
                    ['Country', 'Sales'],
                    ['Germany', 200],
                    ['United States', 300],
                    ['Brazil', 400],
                    ['Canada', 500],
                    ['France', 600],
                    ['RU', 700],
                ],
                monthly: [
                    ['Country', 'Sales'],
                    ['Germany', 150],
                    ['Ukraine', 650],
                    ['United States', 200],
                    ['Brazil', 700],
                    ['Canada', 300],
                    ['France', 200],
                    ['RU', 900],
                ]
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
                                <Col lg={12} className={classes.item}>
                                    <div className={classes.chartWrapper}>
                                        <div className="chart">
                                            <Chart
                                                width={'100%'}
                                                height={'30%'}
                                                chartType="GeoChart"
                                                data={this.state.data[this.state.activePeriod]}
                                                options={{
                                                    colorAxis: { colors: ['#c1cefa', '#6383f2', '#345dee'] },
                                                    backgroundColor: `${this.props.dark ? '#0C1431' : '#ffffff'}`,
                                                    animation: {
                                                        duration: 1000,
                                                        easing: 'out',
                                                        startup: true,
                                                    },
                                                }}
                                                // Note: you will need to get a mapsApiKey for your project.
                                                // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                                                mapsApiKey="AIzaSyCgavq2slxiLW_HjsJ_6EPRJR1_3OVYAH0"
                                                rootProps={{ 'data-testid': '1' }}
                                            />
                                        </div>
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

export default StatsLayoutsTypeThirteenth
