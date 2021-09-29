import React from "react";

import {Container, Row, Col} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from "./Tabs/Tabs";
import classes from "./FeaturesLayoutsTypeSixth.module.css"

function FeaturesLayoutsTypeSixth (props) {

    return (
        <React.Fragment>
            <section className={`section ${classes.features} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col>
                                <Tabs/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}
export default FeaturesLayoutsTypeSixth