import React from "react";
import { Row, Col, Container} from "reactstrap";
import '../../../../index.css';

import Divider from "../../../../components/Divider/Divider";
import Button from "../../../../components/Button/Button";
import SimpleRating from "../../../../components/SimpleRating/SimpleRating";
import Tabs from "../../../../components/Tabs/Tabs";
import {Flash} from "../../../../components/Icons/Icons";
import classes from "./EcommerceTypeFirst.module.css"


const EcommerceTypeFirst = (props) => {
    return (
        <div className={`${classes.ecommerce} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <Container>
                <Row className="justify-content-between">
                    <Col className="col-auto">
                        <strong>{props.strong}</strong>
                    </Col>
                    <Col className="col-auto">
                        <SimpleRating
                            dark={props.dark ? true : false}
                            value={props.rating}
                        />
                    </Col>
                </Row>
                <Row className={classes.titleRow}>
                    <Col>
                        <h2 className={`title-text ${classes.title}`}>{props.title}</h2>
                    </Col>
                </Row>

                 <Row className={classes.tabsRow}>
                    <Col>
                        <Tabs
                            array={props.category}
                            onClick={props.onClick}
                        />
                        <p className={`normal-text ${classes.description}`}>{props.content}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Divider/>
                    </Col>
                </Row>
                <Row className="justify-content-between">
                    <Col className="col-auto d-flex align-items-center">
                        <span className={`title-text ${classes.title}`}>${props.price}</span>
                    </Col>
                    <Col className="col-auto d-flex align-items-center">
                        <p className="small-text pr-2">Add to card</p>
                        <Button
                            link={true}
                            href={"#"}
                            classes={"primary big left-icon"}
                            value={"Buy Now"}
                            leftIcon={<Flash fill="#ffffff"/>}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default EcommerceTypeFirst