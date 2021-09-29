import React from "react";

import {Container, Col , Row} from "reactstrap";
import Header from "./Header/Header";
import Socials from "./Socials/Socials";
import Forms from "./Forms/Forms";
import classes from "./HeroLayoutsTypeEighth.module.css"
import { Fade } from "react-awesome-reveal";

const titleText = 'All The Tools You Need In One Workspace';
const descriptionText = 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!'
const strongText = 'Wireframe Kit';
const socialsText = 'Or Sign Up With';

function HeroLayoutsTypeEighth(props) {


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
                                    <strong style={{display: 'block'}}>{strongText}</strong>
                                </Fade>
                                <Fade top delay={100} triggerOnce={true}>
                                    <h1 className={classes.title}>{titleText}</h1>
                                </Fade>
                                <Fade top delay={150} triggerOnce={true}>
                                    <p className={`normal-text ${classes.description}`}>{descriptionText}</p>
                                </Fade>

                                <div className={classes.form}>
                                    <Fade top delay={200} triggerOnce={true}>
                                        <Forms
                                            size="small"
                                            dark={props.dark ? true : false}
                                        />
                                    </Fade>
                                </div>

                                <div className={classes.socials}>
                                    <Fade top delay={250} triggerOnce={true}>
                                        <Socials
                                            text={socialsText}
                                        />
                                    </Fade>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}
export default HeroLayoutsTypeEighth