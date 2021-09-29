import React, {Component} from "react";

import {Container, Col , Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from "./Tabs/Tabs";
import classes from "./FeaturesLayoutsTypeTwentyOne.module.css"



function FeaturesLayoutsTypeTwentyOne (props) {

        return (
            <React.Fragment>
                <section className={`section ${classes.features} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Tabs
                                dark={props.dark ? true : false}
                            />
                        </Container>
                    </div>
                </section>
            </React.Fragment>
        )
}
export default FeaturesLayoutsTypeTwentyOne