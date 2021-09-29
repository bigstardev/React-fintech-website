import { Row, Col, Container } from "reactstrap";
import React, { Component } from "react";

import classes from "./TestimonialsLayoutTypeThirteenth.module.css"
import { Fade } from "react-awesome-reveal";
import Logos from "./Logos/Logos";

const title = "1M+ users trust worldwide";

class TestimonialsLayoutTypeThirteenth extends Component {

    render() {
        return (
            <div>
                <section className={`section ${classes.testimonials} ${(this.props.dark) ? `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <Fade top triggerOnce={true}>
                                        <h3 className={classes.title}>{title}</h3>
                                    </Fade>
                                </Col>
                            </Row>
                            <Row className={classes.contentRow}>
                                <Col lg={12}>
                                    <Fade top triggerOnce={true} delay={50}>
                                        <Logos dark={this.props.dark ? true : false} />
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

export default TestimonialsLayoutTypeThirteenth