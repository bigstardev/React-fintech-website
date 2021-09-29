import React from "react";
import classes from "./FeaturesLayoutsTypeTwentyFourth.module.css"
import Feature from "./Feature/Feature";

import { Container, Col, Row } from "reactstrap";

import { Bookmark, Email, Home, Basket, Extension, Group } from "../../../components/Icons/Icons";
import Frame from "../../../components/Frame/Frame";
import { Fade } from "react-awesome-reveal";

import placeholder from '../../../img/iPhone-XS.png';
import placeholderDark from '../../../img/iPhone-XS-dark.png';

const title = "The professional publishing platform. Method.";

function FeaturesLayoutsTypeTwentyFourth(props) {

  return (
    <React.Fragment>
      <section className={`section ${classes.features} ${(props.dark) ? `dark ${classes.dark}` : ''}`}>
        <div className={classes.gridWrapper}>
          <Container>
            <Row className={classes.headerRow}>
              <Col lg={8} md={10} className="mx-auto">
                <div className={classes.gridWrapper}>
                  <Fade top triggerOnce={true}>
                    <h1 className={`title text-center ${classes.title}`}>{title}</h1>
                  </Fade>
                </div>
              </Col>
            </Row>


            <Row className={classes.contentRow}>
              <Col lg={4} md={6} sm={6}>
                <div className={classes.feature}>
                  <Fade down triggerOnce={true}>
                    <Feature
                      title={"Property Managment"}
                      description={"Create screens directly in Method or add your images from Sketch or Figma."}
                    >
                      <Frame variant={"normal"}>
                        <Bookmark />
                      </Frame>
                    </Feature>
                  </Fade>
                </div>

                <div className={classes.feature}>
                  <Fade down delay={50} triggerOnce={true}>
                    <Feature
                      title={"User Administration"}
                      description={"Create screens directly in Method or add your images from Sketch or Figma."}
                    >
                      <Frame variant={"normal"}>
                        <Home />
                      </Frame>
                    </Feature>
                  </Fade>
                </div>

                <div className={classes.feature}>
                  <Fade down delay={100} triggerOnce={true}>
                    <Feature
                      title={"Engage Customers"}
                      description={"Create screens directly in Method or add your images from Sketch or Figma."}
                    >
                      <Frame variant={"normal"}>
                        <Basket />
                      </Frame>
                    </Feature>
                  </Fade>
                </div>

              </Col>
              <Col lg={4} md={6} sm={6}>
                <div className={classes.feature}>
                  <Fade down delay={100} triggerOnce={true}>
                    <Feature
                      title={"Engage Customers"}
                      description={"Create screens directly in Method or add your images from Sketch or Figma."}
                    >
                      <Frame variant={"normal"}>
                        <Basket />
                      </Frame>
                    </Feature>
                  </Fade>
                </div>

                <div className={classes.feature}>
                  <Fade down delay={150} triggerOnce={true}>
                    <Feature
                      title={"API Reference"}
                      description={"Create screens directly in Method or add your images from Sketch or Figma."}
                    >
                      <Frame variant={"normal"}>
                        <Extension />
                      </Frame>
                    </Feature>
                  </Fade>
                </div>

                <div className={classes.feature}>
                  <Fade down delay={200} triggerOnce={true}>
                    <Feature
                      title={"Team Accounts"}
                      description={"Create screens directly in Method or add your images from Sketch or Figma."}
                    >
                      <Frame variant={"normal"}>
                        <Group />
                      </Frame>
                    </Feature>
                  </Fade>
                </div>
              </Col>

              <Col lg={4} md={6} sm={6}>
                <Fade down delay={250} triggerOnce={true}>
                  {props.dark === true ?
                    <img src={placeholderDark} alt="" />
                    :
                    <img src={placeholder} alt="" />
                  }
                </Fade>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </React.Fragment>
  )
}
export default FeaturesLayoutsTypeTwentyFourth