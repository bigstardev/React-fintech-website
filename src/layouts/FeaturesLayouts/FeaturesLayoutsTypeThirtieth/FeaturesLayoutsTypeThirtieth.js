import React from "react";
import classes from "./FeaturesLayoutsTypeThirtieth.module.css"
import mockup from "../../../img/placeholder-gray.png"
import mockupDark from "../../../img/placeholder-gray-dark.png"

import { Container, Col, Row } from "reactstrap";
import { Fade } from "react-awesome-reveal";

const title = "Living Room Furniture";
const description = "Create screens directly in Method or add your images from Sketch or Figma. ";

function FeaturesLayoutsTypeThirtieth (props) {

  return (
    <React.Fragment>
      <section className={`section ${classes.features} ${(props.dark) ? `dark ${classes.dark}` : ''}`}>
        <div className={classes.gridWrapper}>
          <Container>

            <Row>
              <Col lg={5} md={5} className={classes.leftColumn}>
                <Fade top triggerOnce={true}>
                  <h1>{title}</h1>
                  <p className={classes.description}>{description}</p>
                </Fade>
              </Col>

              <Col lg={{ size: 6, offset: 1 }} md={{ size: 6, offset: 1 }} className={classes.rightColumn}>
                  <Fade top triggerOnce={true} delay={50}>
                      {props.dark === true ?
                          <>
                            <img className={classes.image}  src={mockupDark} />
                          </>
                          :
                          <>
                            <img className={classes.image} src={mockup} />
                          </>
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
export default FeaturesLayoutsTypeThirtieth