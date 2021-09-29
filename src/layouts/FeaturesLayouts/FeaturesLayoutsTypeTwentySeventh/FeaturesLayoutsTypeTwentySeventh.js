import React from "react";
import classes from "./FeaturesLayoutsTypeTwentySeventh.module.css"
import Feature from "./Feature/Feature";

import { Container, Col, Row } from "reactstrap";
import { Fade } from "react-awesome-reveal";

const title = "The professional publishing platform. Method.";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!"

function FeaturesLayoutsTypeTwentySeventh(props) {

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

            <Fade top triggerOnce={true} delay={50}>
            <Row className={classes.contentRow}>
              <Col lg={3} sm={6} className={classes.item}>
                  <Feature
                    dark={props.dark ? true : false}
                    title="Property Managment "
                    description="Create screens directly in Method or add your images from Sketch or Figma."
                  >
                  </Feature>
              </Col>
         
              <Col lg={3} sm={6} className={classes.item}>
                  <Feature
                    title="Marketing Automation"
                    dark={props.dark ? true : false}
                    description="Create screens directly in Method or add your images from Sketch or Figma."
                  >
                  </Feature>
              </Col>
              <Col lg={3} sm={6} className={classes.item}>
                  <Feature
                    title="Email Marketing"
                    dark={props.dark ? true : false}
                    description="Create screens directly in Method or add your images from Sketch or Figma."
                    >
                  </Feature>
              </Col>
              <Col lg={3} sm={6} className={classes.item}>
                  <Feature
                    title="User Administration"
                    dark={props.dark ? true : false}
                    description="Create screens directly in Method or add your images from Sketch or Figma."
                  >
                  </Feature>
              </Col>
            </Row>
            </Fade>
          </Container>
        </div>
      </section>
    </React.Fragment>
  )
}
export default FeaturesLayoutsTypeTwentySeventh