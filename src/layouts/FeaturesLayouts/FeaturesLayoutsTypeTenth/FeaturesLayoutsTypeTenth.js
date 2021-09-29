import React  from "react";

import Features from "./Features/Features";
import { Fade } from "react-awesome-reveal";
import {Container, Col , Row} from "reactstrap";
import classes from "./FeaturesLayoutsTypeTenth.module.css"
const title = "Email marketing software built for bloggers like you";

function FeaturesLayoutsTypeTenth (props) {

    return (
        <React.Fragment>
            <section className={`section ${classes.features} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>

                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col lg="9" md="9" className="mx-auto" >
                                <Fade top triggerOnce={true}>
                                    <h1 className={`text-center ${classes.title}`}>{title}</h1>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>

                    <Container className={classes.featuresContainer}>
                        <Features/>
                    </Container>
                </div>

            </section>
        </React.Fragment>
    )
}
export default FeaturesLayoutsTypeTenth