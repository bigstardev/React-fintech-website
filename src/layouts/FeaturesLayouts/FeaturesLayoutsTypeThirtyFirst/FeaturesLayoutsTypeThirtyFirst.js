import React from "react";
import classes from "./FeaturesLayoutsTypeThirtyFirst.module.css"
import Feature from "./Feature/Feature";

import { Container, Col, Row } from "reactstrap";
import { Fade } from "react-awesome-reveal";

const title = "Frequently asked questions";


function FeaturesLayoutsTypeThirtyFirst(props) {

  return (
    <React.Fragment>
      <section className={`section ${classes.features} ${(props.dark) ? `dark ${classes.dark}` : ''}`}>
        <div className={classes.gridWrapper}>
          <Container>
            <Row>
              <Col lg={12}>
                <Fade top triggerOnce={true}>
                  <h1 className="text-center">{title}</h1>
                </Fade>
              </Col>
            </Row>
            <Row className={classes.contentRow}>
              <Col lg={5} md={6} sm={6} className={classes.item}>
                <Fade top delay={50} triggerOnce={true}>
                  <Feature
                    dark={props.dark ? true : false}
                    title="Property Managment?"
                    description="Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage! Create screens directly in Method or add your images from Sketch or Figma"
                  >
                  </Feature>
                </Fade>
              </Col>
              <Col lg={{ size: 5, offset: 1 }} md={6} sm={6} className={classes.item}>
                <Fade top delay={100} triggerOnce={true}>
                  <Feature
                    dark={props.dark ? true : false}
                    title="User Administration?"
                    description="Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage! Create screens directly in Method or add your images from Sketch or Figma"
                  >
                  </Feature>
                </Fade>
              </Col>
              <Col lg={5} md={6} sm={6} className={classes.item}>
                <Fade top delay={150} triggerOnce={true}>
                  <Feature
                    dark={props.dark ? true : false}
                    title="Marketing Automation?"
                    description="Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage! Create screens directly in Method or add your images from Sketch or Figma"
                  >
                  </Feature>
                </Fade>
              </Col>
              <Col lg={{ size: 5, offset: 1 }} md={6} sm={6} className={classes.item}>
                <Fade top delay={200} triggerOnce={true}>
                  <Feature
                    dark={props.dark ? true : false}
                    title="Email Marketing?"
                    description="Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage! Create screens directly in Method or add your images from Sketch or Figma"
                  >
                  </Feature>
                </Fade>
              </Col>
              <Col lg={5} md={6} sm={6} className={classes.item}>
                <Fade top delay={250} triggerOnce={true}>
                  <Feature
                    dark={props.dark ? true : false}
                    title="API Reference?"
                    description="Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage! Create screens directly in Method or add your images from Sketch or Figma"
                  >
                  </Feature>
                </Fade>
              </Col>
              <Col lg={{ size: 5, offset: 1 }} md={6} sm={6} className={classes.item}>
                <Fade top delay={300} triggerOnce={true}>
                  <Feature
                    dark={props.dark ? true : false}
                    title="Team Accounts?"
                    description="Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage! Create screens directly in Method or add your images from Sketch or Figma"
                  >
                  </Feature>
                </Fade>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </React.Fragment>
  )
}
export default FeaturesLayoutsTypeThirtyFirst