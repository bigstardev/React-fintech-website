import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";

import Scatter from "../../../components/Chart/Scatter";
import {Fade} from "react-awesome-reveal";
import classes from "./StatsLayoutsTypeEighth.module.css"

const title = "Simple Scatter Chart"
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";

class StatsLayoutsTypeEighth extends Component {

    constructor(props) {
        super(props)
        this.state = {}
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
                                            <Scatter/>
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

export default StatsLayoutsTypeEighth