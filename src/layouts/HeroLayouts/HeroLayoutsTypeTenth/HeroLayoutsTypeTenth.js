import React from "react";

import {Container, Col , Row} from "reactstrap";
import VerticalModal from "./VerticalModal/VerticalModal";
import Header from "./Header/Header";
import Logos from "./Logos/Logos";
import Divider from "../../../components/Divider/Divider";
import classes from './HeroLayoutsTypeTenth.module.css'
import PlayButton from "../../../components/Play-Button/Play-Button";
import { Fade } from "react-awesome-reveal";


const strongText = 'Wireframe Kit';
const titleText = 'All The Tools You Need In One Workspace';
const descriptionText = 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!'


function HeroLayoutsTypeTenth(props) {

    const [modalShow, setModalShow] = React.useState(false);

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
                                <Fade top deyal={50} triggerOnce={true}>
                                    <strong style={{display: 'block'}}>{strongText}</strong>
                                </Fade>
                                <Fade top deyal={100} triggerOnce={true}>
                                    <h1 className={classes.title}>{titleText}</h1>
                                </Fade>
                                <Fade top deyal={150} triggerOnce={true}>
                                    <p className={`normal-text ${classes.description}`}>{descriptionText}</p>
                                </Fade>

                                <Fade top deyal={200} triggerOnce={true}>
                                    <div className={classes.buttonsSection}>
                                        <PlayButton
                                            size="large"
                                            click={() => setModalShow(true)}
                                        />
                                    </div>
                                </Fade>
                            </Col>
                            <Col lg="12" md="12" className={classes.bottomLevel}>
                                <Fade top deyal={250} triggerOnce={true}>
                                    <Divider/>
                                    <div className={classes.companies}>
                                        <Logos
                                            dark={props.dark ? true : false}
                                        />
                                    </div>
                                </Fade>
                            </Col>
                        </Row>
                        <VerticalModal
                            dark={props.dark ? true : false}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Container>
                </div>

            </section>
        </React.Fragment>
    )
}
export default HeroLayoutsTypeTenth
