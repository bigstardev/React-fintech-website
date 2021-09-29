import React from "react";
import { Row, Col} from "reactstrap";
import SimpleRating from "../../../../components/SimpleRating/SimpleRating";
import SmallBadge from "../../../../components/SmallBadge/SmallBadge";
import Oval from "../../../../components/Frame/Frame";
import {ArrowForward} from "../../../../components/Icons/Icons";
import classes from "./EcommerceTypeTwelfth.module.css"


const EcommerceTypeTwelfth = (props) => {

    return (
        <div className={`${classes.ecommerce}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={classes.wrapper}>
                <Row>
                    <Col lg="6" md="12" className={classes.leftColumn}>
                        <a href={props.link} className={classes.picture}>
                            {props.poster}
                        </a>
                    </Col>
                    <Col lg="6" md="12" className={classes.rightColumn}>
                        <Row className={`justify-content-between ${classes.topLevel}`}>
                            <Col className="col-auto">
                                <SmallBadge>Sale</SmallBadge>
                            </Col>
                            <Col className="col-auto">
                                <SimpleRating
                                    dark={props.dark ? true : false}
                                    value={props.rating}
                                />
                            </Col>
                        </Row>
                        <Row className={`justify-content-between ${classes.middleLevel}`}>
                            <Col className="col-12">
                                <h3 className={classes.title}>{props.title}</h3>
                                <p className={classes.description}>{props.description}</p>
                            </Col>
                        </Row>
                        <Row className={`justify-content-between align-items-end ${classes.bottomLevel}`}>
                            <Col className="col-auto">
                                <p className={`small-text ${classes.smallText}`}>${props.price}</p>
                            </Col>
                            <Col className="col-auto">
                                <a href={props.link} className={classes.link}>
                                    <Oval
                                        variant="small"
                                    >
                                        <ArrowForward/>
                                    </Oval>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default EcommerceTypeTwelfth