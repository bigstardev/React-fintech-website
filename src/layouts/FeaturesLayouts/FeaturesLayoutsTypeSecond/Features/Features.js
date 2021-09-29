import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import classes from "./Features.module.css"

import Oval from "../../../../components/Frame/Frame";
import {Donut, Location, Support} from "../../../../components/Icons/Icons";
import { Fade } from "react-awesome-reveal";

const Features = (props) => {
    return (
        <section className={`${classes.feature}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <ListGroup className={classes.listGroup}>
                    <ListGroup.Item className={classes.item}>
                        <Fade top delay={100} triggerOnce={true}>
                        <Oval variant="large">
                            <Location/>
                        </Oval>
                        <p className="text">Property Managment</p>
                        </Fade>
                    </ListGroup.Item>
                <ListGroup.Item className={classes.item}>
                    <Fade top delay={150} triggerOnce={true}>
                    <Oval variant="large">
                        <Support/>
                    </Oval>
                    <p className="text">Focus on Cummunication</p>
                    </Fade>
                </ListGroup.Item>
                <ListGroup.Item className={classes.item}>
                    <Fade top delay={200} triggerOnce={true}>
                    <Oval variant="large">
                        <Donut/>
                    </Oval>
                    <p className="text">User Administration</p>
                    </Fade>
                </ListGroup.Item>
            </ListGroup>
        </section>
    )
}

export default Features