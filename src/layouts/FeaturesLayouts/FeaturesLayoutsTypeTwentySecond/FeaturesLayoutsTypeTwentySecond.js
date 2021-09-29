import React from "react";
import classes from "./FeaturesLayoutsTypeTwentySecond.module.css"
import Feature from "./Feature/Feature";

import { Container, Col, Row } from "reactstrap";

import { Fade } from "react-awesome-reveal";

import placeholder from '../../../img/placeholder-02.png';
import placeholderDark from '../../../img/placeholder-02-dark.png';
import placeholderSecond from '../../../img/placeholder-03.png';
import placeholderSecondDark from '../../../img/placeholder-03-dark.png';

const title = "The easiest way to turn  your passion into income";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";

function FeaturesLayoutsTypeTwentySecond(props) {


  return (
      <React.Fragment >
      <section className={`section ${classes.features} ${(props.dark) ? `dark ${classes.dark}` : ''}`}>
          <div className={classes.gridWrapper}>
              <Container>
                    <Row className={classes.headerRow}>
                        <Col lg={8} md={8} className="mx-auto text-center">
                            <Fade down triggerOnce={true}>
                                <h1 className={`${classes.title} text-center`}>{title}</h1>
                            </Fade>
                            <Fade down delay={50} triggerOnce={true}>
                                <p className={`normal-text ${classes.description}`}>{description}</p>
                            </Fade>
                        </Col>
                    </Row>
              </Container>

              <Container className={classes.featuresContainer}>
                  <Row className={classes.featuresRow}>
                      <Col lg={5} md={6} >
                          <Fade down delay={50} triggerOnce={true}>
                              <Feature
                                action="Marketing"
                                title="Save time managing social media for your business"
                                description="Create screens directly in Method or add your images from Sketch or Figma. You can even sync  designs from your cloud storage! You can even sync designs from your cloud storage!"
                              />
                          </Fade>
                      </Col>

                      <Col lg={{ size: 5, offset: 1 }} md={6} className={classes.flexContainer}>
                          <Fade down delay={100} triggerOnce={true}>
                              {props.dark === true ?
                                <img src={placeholderDark} alt=""/>
                                :
                                <img src={placeholder} alt=""/>
                              }
                          </Fade>
                      </Col>
                    </Row>

                    <Row className={classes.featuresRow}>
                        <Col lg={5} md={6} className={classes.flexContainer}>
                            <Fade right delay={150} triggerOnce={true}>
                                {props.dark === true ?
                                  <img src={placeholderSecondDark} alt=""/>
                                  :
                                  <img src={placeholderSecond} alt=""/>
                                }
                            </Fade>
                        </Col>

                        <Col lg={{ size: 5, offset: 1 }} md={6} className={classes.rightColumnContent}>
                            <Fade right delay={200} triggerOnce={true}>
                                <Feature
                                    action="Updates"
                                    title="Email marketing software built for bloggers like you"
                                    description="Create screens directly in Method or add your images from Sketch or Figma. You can even sync  designs from your cloud storage! You can even sync designs from your cloud storage!"
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
export default FeaturesLayoutsTypeTwentySecond