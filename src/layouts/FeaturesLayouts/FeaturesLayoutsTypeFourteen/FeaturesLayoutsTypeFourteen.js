import React from "react";

import {Container, Col , Row} from "reactstrap";
import Button from "../../../components/Button/Button";
import image from "../../../img/mackbook.png";
import imageDark from "../../../img/mackbook-dark.png";
import { Fade } from "react-awesome-reveal";
import classes from "./FeaturesLayoutsTypeFourteen.module.css"

const title = "Great work starts in your inbox";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";

function FeaturesLayoutsTypeFourteen (props) {

    return (
        <React.Fragment>
            <section className={`section ${classes.features} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row xs="1">
                            <Col lg={6} md={6} className={`mx-auto text-center ${classes.firstLevel}`}>
                                <Fade down triggerOnce={true}>
                                    <h1 className={classes.title}>{title}</h1>
                                </Fade>
                            </Col>
                            <Col className={classes.secondLevel}>
                                <Fade up delay={50} triggerOnce={true}>
                                    {props.dark == true ?
                                        <>
                                            <img
                                                src={imageDark}
                                                alt=""
                                            />
                                        </>
                                        :
                                        <>
                                            <img
                                                src={image}
                                                alt=""
                                            />
                                        </>
                                    }
                                </Fade>

                            </Col>
                            <Col lg={8} md={8} className={`mx-auto text-center ${classes.thirdLevel}`}>
                                <Fade up delay={100} triggerOnce={true}>
                                    <p className={`normal-text ${classes.description}`}>{description}</p>
                                </Fade>
                            </Col>
                            <Col lg={8} md={8} className={`mx-auto text-center d-flex justify-content-center ${classes.fourthLevel}`}>
                                <Fade up delay={150} triggerOnce={true}>
                                    <Button
                                        link={true}
                                        href={"#"}
                                        classes={`primary large simple ${classes.button}`}
                                        value={"Get Started"}
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
export default FeaturesLayoutsTypeFourteen