import React from "react";
import classes from "./FeaturesLayoutsTypeTwentyFifth.module.css"
import Feature from "./Feature/Feature";

import { Container, Col, Row } from "reactstrap";

// import { Bookmark, Email, Home, Basket, Extension, Group } from "../../../components/Icons/Icons";
import { Fade } from "react-awesome-reveal";

const title = "Meet Our Great Team";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!"

function FeaturesLayoutsTypeTwentyFifth(props) {

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
                    <p className={`text-center ${classes.description}`}>{description}</p>
                  </Fade>
                </div>
              </Col>
            </Row>

            <Row className={classes.contentRow}>
              <Col className="col-12">
                <Fade top delay={50} triggerOnce={true}>
                  <Feature
                    bordered="true"
                    dark={props.dark ? true : false}
                    title="Property Managment "
                    description="Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage! Create screens directly in Method or add your images from Sketch or Figma"
                    link="#"
                    linkText="See More"
                  >
                  </Feature>
                </Fade>
              </Col>
              <Col className="col-12">
                <Fade top delay={100} triggerOnce={true}>
                  <Feature
                    title="Marketing Automation"
                    dark={props.dark ? true : false}
                    description="Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage! Create screens directly in Method or add your images from Sketch or Figma"
                    link="#"
                    linkText="See More"
                  >
                  </Feature>
                </Fade>
              </Col>
              <Col className="col-12">
                <Fade top delay={150} triggerOnce={true}>
                  <Feature
                    title="Email Marketing"
                    dark={props.dark ? true : false}
                    description="Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage! Create screens directly in Method or add your images from Sketch or Figma"
                    link="#"
                    linkText="See More"
                  >
                  </Feature>
                </Fade>
              </Col>
              <Col className="col-12">
                <Fade top delay={200} triggerOnce={true}>
                  <Feature
                    title="User Administration"
                    dark={props.dark ? true : false}
                    description="Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage! Create screens directly in Method or add your images from Sketch or Figma"
                    link="#"
                    linkText="See More"
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
export default FeaturesLayoutsTypeTwentyFifth