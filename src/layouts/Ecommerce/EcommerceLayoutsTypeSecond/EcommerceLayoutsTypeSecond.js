import React from "react";
import {Container, Col, Row, ListGroupItem, ListGroup} from "reactstrap";
import Ecommerce from "./Card/EcommerceTypeSecond";
import Button from "../../../components/Button/Button";
import {Fade} from "react-awesome-reveal";
import classes from "./EcommerceLayoutsTypeSecond.module.css"
const title = "Osmo Pro / RAW";
const description = "In professional filmmaking, time and budget matter. By combining portability, stability, high image quality and expandability, the Osmo Pro and Osmo RAW make shots that once needed a crew available to a single operator";
const price = 340;
const promo = "Estimated to ship 1 business day after payment confirmation."

function EcommerceLayoutsTypeSecond (props) {

    return (
        <section className={`section ${classes.ecommerce} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <Container>
                <Row>
                    <Col lg="5" md="7" className="ml-auto">
                        <div className={classes.gridWrapper}>
                            <Fade triggerOnce={true}>
                                <Ecommerce
                                    badgeText="SALE"
                                    rating={4.5}
                                    title={title}
                                    description={description}
                                    dark={props.dark ? true : false}
                                    firstList = {
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem>Dual Screens</ListGroupItem>
                                            <ListGroupItem>RockSteady</ListGroupItem>
                                            <ListGroupItem>UHD Image Quality</ListGroupItem>
                                        </ListGroup>
                                    }
                                    secondList = {
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem>4K HDR Video</ListGroupItem>
                                            <ListGroupItem>8x Slow Motion</ListGroupItem>
                                            <ListGroupItem>Waterproof</ListGroupItem>
                                        </ListGroup>
                                    }
                                    price={price}
                                    firstButton = {
                                        <Button
                                            link={true}
                                            href="some-link/"
                                            classes={"primary big simple outline w-100"}
                                            value={"Add To Card"}
                                        />
                                    }
                                    secondButton = {
                                        <Button
                                            link={true}
                                            href="some-link/"
                                            classes={"primary big simple w-100"}
                                            value={"Buy Now"}
                                        />
                                    }
                                    promo={promo}
                                />
                            </Fade>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default EcommerceLayoutsTypeSecond