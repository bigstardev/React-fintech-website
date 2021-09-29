import React from "react";
import {Container, Col , Row} from "reactstrap";
import {AppLogoBig, ChevronDown} from "../../../components/Icons/Icons";

import Button from "../../../components/Button/Button";
import Header from "./Header/Header";
import Oval from "../../../components/Frame/Frame";
import classes from "./HeroLayoutsTypeFifth.module.css"
import { Fade } from "react-awesome-reveal";
const titleText = 'The New Standart In Online Payments';
const descriptionText = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.'
const firstLinkText = 'Get Started';
const secondLinkText = 'Learn More';

const firstLink = "/example#1";
const secondLink = "/example#2";

function HeroLayoutsTypeFifth(props) {

   const onLinksClickHandler = (event) => {
        event.preventDefault();
        let element = event.currentTarget.getBoundingClientRect();
       window.scrollTo({bottom: element.bottom + 100, behavior: 'smooth'});
    }

    return (
        <React.Fragment>
            <section className={`${classes.hero} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>

                <div className={classes.gridWrapper}>
                    <Container>
                        <Fade top triggerOnce={true}>
                            <Header
                                dark={props.dark ? true : false}
                            />
                        </Fade>
                    </Container>
                    <Container>
                        <Row className={classes.contentRow}>
                            <Col lg="8" md="8" className="mx-auto text-center">
                                <Fade top delay={50} triggerOnce={true}>
                                    <a href="#" className={classes.logotype}>
                                        <AppLogoBig
                                            fill={"#ffffff"}
                                        />
                                    </a>
                                </Fade>
                                <Fade top delay={100} triggerOnce={true}>
                                    <h1 className={classes.title}>{titleText}</h1>
                                </Fade>
                                <Fade top delay={150} triggerOnce={true}>
                                    <p className={`normal-text ${classes.description}`}>{descriptionText}</p>
                                </Fade>
                                <Row>
                                    <Col  lg="8" md="8" className={`mx-auto ${classes.buttonSection}`}>
                                        <div>
                                            <Fade top delay={200} triggerOnce={true}>
                                                <Button
                                                    link={true}
                                                    href={firstLink}
                                                    classes={"primary big simple"}
                                                    value={firstLinkText}
                                                />
                                            </Fade>
                                        </div>
                                        <div>
                                            <Fade top delay={250} triggerOnce={true}>
                                                <Button
                                                    link={true}
                                                    href={secondLink}
                                                    classes={"neutral big simple outline"}
                                                    value={secondLinkText}
                                                />
                                            </Fade>
                                        </div>
                                    </Col>
                                    <Col lg="10" md="10" className={`mx-auto ${classes.linkSection}`}>
                                        <Fade top delay={300} triggerOnce={true}>
                                            <a
                                                href="#"
                                                className="arrow-link"
                                                onClick={onLinksClickHandler}
                                            >
                                                <Oval
                                                    variant="normal"
                                                >
                                                    <ChevronDown/>
                                                </Oval>
                                            </a>
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
export default HeroLayoutsTypeFifth