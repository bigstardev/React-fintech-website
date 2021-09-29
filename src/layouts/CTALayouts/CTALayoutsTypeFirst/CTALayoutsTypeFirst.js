import React from "react";

import {Container, Col , Row} from "reactstrap";
import mockup from "../../../img/Iphone.png"
import mockupDark from "../../../img/IphoneXS-dark.png"
import Content from "./Content/CTATypeFirst";
import { Fade } from "react-awesome-reveal";
import classes from "./CTALayoutsTypeFirst.module.css"

const title = "The fast & visual way to understand your users";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";
const strong = "Product of the day";

function CTALayoutsTypeFirst (props) {

    return (
        <React.Fragment>
            <section className={`section ${classes.cta} ${(props.dark) ? `${classes.dark}` : ''}`}>

                <Container>
                    <Row className={classes.contentRow}>
                        <Col lg={4} md={5} sm={9} xs={9} className={classes.leftColumn}>
                            <Fade left triggerOnce={true}>
                                        <img
                                            src={props.dark == true ? mockupDark : mockup}
                                            alt=""
                                            width="350"
                                            height="700"
                                        />
                            </Fade>
                        </Col>

                        <Col lg={{ size: 7, offset: 1 }} md={{ size: 7}} sm={9} className={classes.rightColumn}>
                            <div className={classes.gridWrapper}>
                                <Content
                                    title={title}
                                    description={description}
                                    dark={props.dark ? true : false}
                                >
                                    <Fade top triggerOnce={true}>
                                        <strong style={{display: 'block'}}>{strong}</strong>
                                    </Fade>
                                </Content>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}
export default CTALayoutsTypeFirst