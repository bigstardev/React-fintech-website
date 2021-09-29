import React from "react";
import FeaturesCard from "./FeatureCard/FeaturesTypeTwelve";
import Feature from "./Feature/FeatureTypeFourth";
import {Container, Col , Row} from "reactstrap";
import Oval from "../../../components/Frame/Frame";
import {Email, Group, Basket, Extension} from "../../../components/Icons/Icons";
import Slider from "./Slider/Slider";
import Slide from "./Slide/Slide";
import backgroundImage from "../../../img/example.png";
import { Fade } from "react-awesome-reveal";
import classes from "./FeaturesLayoutsTypeNineteen.module.css"


function FeaturesLayoutsTypeNineteen (props) {


    return (
        <React.Fragment>
            <section className={`${classes.features} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <Container fluid="true" className={`container-fluid`} style={{backgroundImage: `url(${backgroundImage})`}}>
                    <Container>
                        <Row>
                            <Col className="p-0">
                                    <Slider>
                                        <Slide>
                                            <Fade>
                                            <FeaturesCard
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
                                            </FeaturesCard>
                                            </Fade>
                                        </Slide>

                                        <Slide>
                                            <Fade delay={50}>
                                            <FeaturesCard
                                                title={"Building better workplaces, one team at a time"}
                                                description={"You can even sync designs from your cloud storage!"}
                                                dark={props.dark ? true : false}
                                            >
                                                <Feature
                                                    title={"User Administration"}
                                                    description={"You can even sync designs from your cloud storage!"}
                                                    dark={props.dark ? true : false}
                                                >
                                                    <Oval variant={"normal"}>
                                                        <Basket/>
                                                    </Oval>
                                                </Feature>
                                                <Feature
                                                    title={"Marketing Automation"}
                                                    description={"You can even sync designs from your cloud storage!"}
                                                    dark={props.dark ? true : false}
                                                >
                                                    <Oval variant={"normal"}>
                                                        <Extension/>
                                                    </Oval>
                                                </Feature>
                                            </FeaturesCard>
                                            </Fade>
                                        </Slide>
                                    </Slider>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </section>
        </React.Fragment>
    )
}
export default FeaturesLayoutsTypeNineteen