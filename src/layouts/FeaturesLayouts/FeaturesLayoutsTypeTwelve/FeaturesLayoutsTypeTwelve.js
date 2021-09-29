import React from "react";
import {Col, Container, Row} from "reactstrap";

import VerticalModal from "./VerticalModal/VerticalModal";
import PlayButton from "../../../components/Play-Button/Play-Button";
import Feature from "./Feature/FeatureTypeFourth";
import Oval from "../../../components/Frame/Frame";
import {Email, Group} from "../../../components/Icons/Icons";
import FeatureCard from "./FeatureCard/FeaturesTypeTwelve";
import { Fade } from "react-awesome-reveal";
import classes from "./FeaturesLayoutsTypeTwelve.module.css"

function FeaturesLayoutsTypeTwelve (props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <React.Fragment>
            <section className={`section ${classes.features} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>

                <Container fluid={true} className={`container-fluid ${classes.containerFluid}`} >
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row>
                                <Col lg="6" md="7">
                                    <Fade triggerOnce={true}>
                                        <FeatureCard
                                            title={"Help us change how teams communicate"}
                                            description={"You can even sync designs from your cloud storage!"}
                                            dark={props.dark ? true : false}
                                        >
                                            <Feature
                                                title={"Email Marketing"}
                                                description={"You can even sync designs from your cloud storage!"}
                                                dark={props.dark ? true : false}

                                            >
                                                <Oval variant={"normal"}>
                                                    <Email/>
                                                </Oval>
                                            </Feature>

                                            <Feature
                                                title={"Team Accounts"}
                                                description={"You can even sync designs from your cloud storage!"}
                                                dark={props.dark ? true : false}
                                            >
                                                <Oval variant={"normal"}>
                                                    <Group/>
                                                </Oval>
                                            </Feature>
                                        </FeatureCard>
                                    </Fade>

                                </Col>
                                <Col lg={{ size: 1, offset: 3 }} md={{ size: 1, offset: 3 }} className={`d-flex align-items-center justify-content-center ${classes.buttons}`}>
                                    <Fade delay={50} triggerOnce={true}>
                                        <PlayButton
                                            size="large"
                                            click={() => setModalShow(true)}
                                        />
                                    </Fade>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
                <VerticalModal
                    dark={props.dark ? true : false}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </section>
        </React.Fragment>
    )
}
export default FeaturesLayoutsTypeTwelve