import React from "react";
import { Row, Col} from "reactstrap";

import Button from "../../../../components/Button/Button";
import classes from "./PricingTypeThird.module.css"
import {Check} from "../../../../components/Icons/Icons";
import {List} from 'antd';

const baseText = `per user ` + `\n` + `per month`;
const baseLinkText = `Learn More`;

const PricingTypeThird = (props) => {

    return (
        <div className={`${classes.price}  ${(props.dark) ?  `${classes.dark}` : ''}`}>
            <div className={classes.inner}>
                <h3 className={`title text-left ${classes.title}`}>{props.title}</h3>
                <p className={`normal-text ${classes.description}`}>{props.descr}</p>
                <div className={classes.list}>
                    <List
                        className={props.dark ? 'dark' : null}
                        itemLayout="horizontal"
                        dataSource={props.array}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Check/>}
                                    description={item}
                                />
                            </List.Item>
                        )}
                    />
                </div>
                <Row className={classes.priceRow}>
                    <Col className="d-flex align-items-center">
                        <p className={`large-text d-inline-block ${classes.largeText}`}>{'$' + props.cost}</p>
                        <p className={`small-text d-inline-block text-left ${classes.smallText}`}>per user <br/> per month</p>
                    </Col>
                </Row>
                <Row className={classes.linksRow}>
                    <Col lg="12" md="12" className={classes.topLink}>
                        <Button
                            link={true}
                            href={props.firstLink}
                            classes={`primary big simple outline btn-block w-100 ${classes.firstLink}`}
                            value={"Select Plan"}
                        />
                    </Col>
                    <Col lg="12" md="12">
                        <a href={props.secondLink} className={`${classes.bottomLink} btn-block`}>{baseLinkText}</a>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default PricingTypeThird
