import React from "react";
import classes from "./Aside.module.css"
import {Col, Row} from "reactstrap";
import TextButton from "../../../../components/Text-Button/Text-Button";
import {Download, IconPlay} from "../../../../components/Icons/Icons";
import Oval from "../../../../components/Frame/Frame";
import VerticalModal from "../VerticalModal/VerticalModal";
import { Fade } from "react-awesome-reveal";

const strong = "Product of the day";
const title = "Perfect for sales, marketing and support";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";

function Aside (props) {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <section className={`${classes.aside} ${(props.dark) ? 'dark' : ''}`}>
            <Fade down triggerOnce={true}>
                <strong style={{display: 'block'}}>{strong}</strong>
            </Fade>
            <Fade down delay={100} triggerOnce={true}>
                <h1>{title}</h1>
            </Fade>
            <Fade down delay={200} triggerOnce={true}>
                <p className={`normal-text ${description}`}>{description}</p>
            </Fade>

            <Row className={classes.buttonRow}>
                <Col className={`col-auto ${classes.col}`}>
                    <Fade down delay={300} triggerOnce={true}>
                        <TextButton
                            link={"/example#1"}
                            text={"Play Video"}
                            onClick={() => setModalShow(true)}
                        >
                            <IconPlay/>
                        </TextButton>
                    </Fade>
                </Col>
                <Col className={`col-auto ${classes.col}`}>
                    <Fade down delay={400} triggerOnce={true}>
                        <TextButton
                            position={"left"}
                            link={"/example#2"}
                            text={"Read More"}
                        >
                            <Oval
                                variant={"small"}
                            >
                                <Download/>
                            </Oval>
                        </TextButton>
                    </Fade>
                </Col>

                <VerticalModal
                    dark={props.dark ? true : false}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Row>
        </section>
    )
}

export default Aside