import React from "react";

import {Container, Col , Row} from "reactstrap";

import mockup from '../../../img/IpadPro.png';
import mockupDark from '../../../img/IpadPro-dark.png';
import Header from "./Header/Header";
import VerticalModal from "./VerticalModal/VerticalModal";
import classes from "./HeroLayoutsTypeFourth.module.css"
import { Fade } from "react-awesome-reveal";
import PlayButton from "../../../components/Play-Button/Play-Button";

const title = "Welcome To The Developer Cloud";
const description = "Create screens directly in Method or add your images from Sketch or Figma."

function HeroLayoutsTypeFourth(props) {

    const [modalShow, setModalShow] = React.useState(false);

        return (
            <React.Fragment>
                <section className={`${classes.hero} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container className={classes.topContainer}>
                            <Fade top triggerOnce={true}>
                                <Header
                                    dark={props.dark ? true : false}
                                />
                            </Fade>
                        </Container>
                        <Container>
                            <Row className={classes.contentRow}>
                                <Col lg="6" md="8" className="mx-auto text-center">
                                    <Fade top deyal={50} triggerOnce={true}>
                                        <h1 className="title">{title}</h1>
                                    </Fade>
                                    <Fade top deyal={100} triggerOnce={true}>
                                        <p className={`normal-text ${classes.description}`}>{description}</p>
                                    </Fade>

                                    <Fade top deyal={150} triggerOnce={true}>
                                        <div className={classes.buttonsSection}>
                                            <PlayButton
                                                size="large"
                                                click={() => setModalShow(true)}
                                            />
                                        </div>
                                    </Fade>
                                </Col>
                                <Col lg={12} md={12} className={classes.mockupSection}>
                                    <Fade up deyal={100} triggerOnce={true}>
                                        <img src={props.dark === true ? mockupDark : mockup}/>
                                    </Fade>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
                <VerticalModal
                    dark={props.dark ? true : false}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </React.Fragment>
        )
}
export default HeroLayoutsTypeFourth
