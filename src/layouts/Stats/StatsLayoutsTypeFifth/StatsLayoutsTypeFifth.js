import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "../../../components/Tabs/Tabs";
import BarsCustom from "../../../components/Chart/BarsCustom";
import Button from "../../../components/Button/Button";
import {Fade} from "react-awesome-reveal";
import classes from "./StatsLayoutsTypeFifth.module.css"

const title = "Total Sales"
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";
class StatsLayoutsTypeFifth extends Component {

    constructor(props){
        super(props)
        this.state = {
            activeCity: 'london',
            city: {
                london : {
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
                },
                moscow : {
                    chartData:{
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", " Oct", "Nov", "Dec"],
                        datasets: [
                            {
                                label: "Primary",
                                backgroundColor: '#345DEE',
                                borderColor: '#345DEE',
                                data: [900, 700, 400, 800, 1700, 1200, 700, 300, 700 ,600 ,1400, 900]
                            },
                            {
                                label: "Secondary",
                                backgroundColor: '#EE3465',
                                data: [1000, 1100, 1300, 1500, 300, 800, 300, 400, 900 ,400 ,1200, 500]
                            }
                        ],
                    },
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
                                <Col lg="6" md="6" sm="6">
                                    <Fade top triggerOnce={true}>
                                        <h1>{title}</h1>
                                    </Fade>
                                </Col>
                                <Col lg="3" md="4" sm="6" className="ml-auto">
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
                            <Row className={classes.middleLevel}>
                                <Col>
                                    <div className={classes.chartWrapper}>
                                        <Fade top delay={100} triggerOnce={true}>
                                        <BarsCustom
                                            data={this.state.city[this.state.activeCity].chartData}
                                        />
                                        </Fade>
                                    </div>
                                </Col>
                            </Row>
                            <Row className={classes.bottomLevel}>
                                <Col lg="7" md="7" sm="7">
                                    <Fade top delay={150} triggerOnce={true}>
                                        <p className={`normal-text ${classes.description}`}>{description}</p>
                                    </Fade>
                                </Col>
                                <Col lg="3" md="4" sm="5" className={`ml-auto d-flex justify-content-end ${classes.buttonColumn}`}>
                                    <Fade top delay={200} triggerOnce={true}>
                                        <Button
                                            link={true}
                                            href={"./some-link"}
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

export default StatsLayoutsTypeFifth
