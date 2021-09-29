import React from "react";
import { Row, Col} from "reactstrap";

import TextButton from "../../../../components/Text-Button/Text-Button";
import Oval from "../../../../components/Frame/Frame";
import {RightArrow} from "../../../../components/Icons/Icons";
import classes from "./FeaturesTypeTwenty.module.css"

const linkText = 'Read More';

const FeaturesTypeTwenty = (props) => {
    return (
        <div className={`${classes.feature}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={classes.wrapper}>
                <Row className={classes.topLevel}>
                    <Col>
                        {props.children}
                    </Col>
                </Row>
                <Row className={classes.middleLevel}>
                    <Col>
                        <h3 className={classes.title}>{props.title}</h3>
                        <p className={`normal-text ${classes.description}`}>{props.description}</p>
                    </Col>
                </Row>
                <Row className={classes.bottomLevel}>
                    <Col>
                        <TextButton
                            link={props.link}
                            text={linkText}
                            position={"right"}
                        >
                            <Oval
                                variant={"small"}
                                color={"white"}
                            >
                                <RightArrow/>
                            </Oval>
                        </TextButton>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default FeaturesTypeTwenty