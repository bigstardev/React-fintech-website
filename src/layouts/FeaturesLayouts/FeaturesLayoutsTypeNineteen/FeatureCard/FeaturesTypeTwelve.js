import React from "react";
import { Row, Col} from "reactstrap";

import Divider from "../../../../components/Divider/Divider";
import classes from "./FeaturesTypeTwelve.module.css"


const FeaturesTypeTwelve = (props) => {
    return (
        <div className={`${classes.feature}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={classes.wrapper}>
                <Row>
                    <Col className={`col-12 ${classes.topLevel}`}>
                            <h1>{props.title}</h1>
                            <p className={`normal-text ${classes.description}`}>{props.description}</p>
                    </Col>
                    <Col className={`${classes.middleLevel} ${classes.col}`}>
                        <div className={classes.divider}>
                            <Divider/>
                        </div>
                    </Col>
                </Row>

                <Row className={classes.bottom}>
                    <Col lg={9} md={9} className={classes.col}>
                        {props.children}
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default FeaturesTypeTwelve