import React from "react";
import Features from "./Features/Features";

import {Container, Col , Row} from "reactstrap";
import Logos from "./Logos/Logos";
import Divider from "../../../components/Divider/Divider";
import mockup from "../../../img/placeholder-gray.png"
import mockupDark from "../../../img/placeholder-gray-dark.png"
import VerticalModal from "./VerticalModal/VerticalModal";
import PlayButton from "../../../components/Play-Button/Play-Button";
import { Fade } from "react-awesome-reveal";
import classes from "./FeaturesLayoutsTypeSixteen.module.css"

function FeaturesLayoutsTypeSixteen (props) {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <React.Fragment>
            <section className={`section ${classes.features} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col lg={5} className={`${classes.leftColumn} position-relative`}>
                                <Fade down triggerOnce={true}>
                                    {props.dark === true ?
                                        <>
                                            <img src={mockupDark}/>
                                        </>
                                        :
                                        <>
                                            <img src={mockup}/>
                                        </>
                                    }
                                </Fade>

                                <div className={`${classes.buttonsSection} position-absolute`}>
                                    <Fade down triggerOnce={true}>
                                        <PlayButton
                                            size="large"
                                            click={() => setModalShow(true)}
                                        />
                                    </Fade>
                                </div>
                            </Col>

                            <Col lg={7} className={classes.rightColumn}>
                                <Features/>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={12} md={12}>
                                <Fade down delay={300} triggerOnce={true}>
                                    <Divider/>
                                </Fade>
                            </Col>
                        </Row>

                        <VerticalModal
                            dark={props.dark ? true : false}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Container>
                    <Container>
                        <Row className={classes.logosRow}>
                            <Col>
                                <Fade down delay={350} triggerOnce={true}>
                                    <Logos
                                        dark={props.dark ? true : false}
                                    />
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

        </React.Fragment>
    )
}
export default FeaturesLayoutsTypeSixteen