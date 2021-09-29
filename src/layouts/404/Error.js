import React from "react";
import classes from "./Error.module.css";

import placeholder from '../../img/placeholder-04.png';
import placeholderDark from '../../img/placeholder-04-dark.png';
import Button from "../../components/Button/Button"

import { Container, Col, Row } from "reactstrap";
import { Fade } from "react-awesome-reveal";

const title = "Oh, no! This page does not exist";

function PageNotFound(props) {

    return (
        <React.Fragment>
            <section className={`section  ${classes.error} ${(props.dark) ? `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col lg={6} md={6} sm={10} className="mx-auto">
                                <div className={classes.content}>
                                    <Fade down triggerOnce={true}>
                                        <img src={props.dark === true ? placeholderDark : placeholder} />
                                        <h2 className={classes.title}>{title}</h2>
                                        <Button
                                            link={true}
                                            href={"#"}
                                            classes={`primary large simple`}
                                            value={"Go to main page"}
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
export default PageNotFound;