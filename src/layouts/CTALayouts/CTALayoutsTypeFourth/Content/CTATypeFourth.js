import React from "react";
import { Row, Col} from "reactstrap";
import classes from "./CTATypeFourth.module.css"
import Oval from "../../../../components/Frame/Frame";
import { Fade } from "react-awesome-reveal";

const CTATypeFourth = (props) => {
    return (
        <div className={classes.cta}>
            <Row className={classes.topLevel}>
                <Col className="d-flex justify-content-center">
                    <Fade top triggerOnce={true}>
                        <Oval
                            variant={"large"}
                        >
                            {props.icon}
                        </Oval>
                    </Fade>
                </Col>
            </Row>
            <Row className={`text-center ${classes.middleLevel}`}>
                <Col>
                    <Fade top delay={50} triggerOnce={true}>
                        <h3 className="title">{props.title}</h3>
                    </Fade>
                    <Fade top delay={100} triggerOnce={true}>
                        <p className={`normal-text ${classes.description}`}>{props.description}</p>
                    </Fade>
                </Col>
            </Row>
            <Row className={`text-center ${classes.bottomLevel}`}>
                <Col className="d-flex justify-content-center">
                    {props.children}
                </Col>
            </Row>
        </div>
    )
}

export default CTATypeFourth