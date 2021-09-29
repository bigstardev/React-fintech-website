import React from "react";
import Logos from "./Logos/Logos";

import {Container, Col , Row} from "reactstrap";
import Button from "../../../components/Button/Button";
import mockup from "../../../img/IpadPro.png"
import mockupDark from "../../../img/IpadPro-dark.png"
import Divider from "../../../components/Divider/Divider";
import { Fade } from "react-awesome-reveal";
import classes from "./FeaturesLayoutsTypeFifteen.module.css"

const title = "Building better workplaces, one team at a time";
const description = "You can even sync designs from your cloud storage!";

function FeaturesLayoutsTypeFifteen (props) {

    return (
        <React.Fragment>
            <section className={`section ${classes.features} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col lg={6} md={6} className={classes.leftColumn}>
                                <div className="position-relative">
                                    <Fade triggerOnce={true}>
                                        {props.dark === true ?
                                            <>
                                                <img
                                                    className="position-absolute"
                                                    src={mockupDark}
                                                    width={782}
                                                    height={599}
                                                    alt=""
                                                />
                                            </>
                                            :
                                            <>
                                                <img
                                                    className="position-absolute"
                                                    src={mockup}
                                                    width={782}
                                                    height={599}
                                                    alt=""
                                                />
                                            </>
                                        }
                                    </Fade>
                                </div>
                            </Col>

                            <Col lg={5} md={6} className={classes.rightColumn}>
                                <Row xs={1}>
                                    <Col className={`${classes.headerColumn} ${classes.col}`}>
                                        <Fade down triggerOnce={true}>
                                            <h1 className={classes.title}>{title}</h1>
                                        </Fade>
                                    </Col>
                                    <Col className={`${classes.descriptionColumn} ${classes.col}`}>
                                        <Fade down delay={100} triggerOnce={true}>
                                            <p className={`normal-text ${classes.description}`}>{description}</p>
                                        </Fade>
                                    </Col>
                                    <Col className={`${classes.linkColumn} ${classes.col}`}>
                                        <Fade down delay={150} triggerOnce={true}>
                                            <Button
                                                link={true}
                                                href={"#"}
                                                classes={`primary large simple ${classes.button}`}
                                                value={"Get Started"}
                                            />
                                        </Fade>
                                    </Col>
                                    <Col className={classes.col}>
                                        <Fade down delay={200} triggerOnce={true}>
                                            <div className={classes.divider}>
                                                <Divider/>
                                            </div>
                                        </Fade>
                                    </Col>
                                    <Col className={`${classes.logosColumn} ${classes.col}`}>
                                        <Fade down delay={250} triggerOnce={true}>
                                            <Logos/>
                                        </Fade>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}
export default FeaturesLayoutsTypeFifteen