import React from "react";
import classes from "./FeaturesLayoutsTypeTwentySixth.module.css"
import Feature from "./Feature/Feature";
import mockup from "../../../img/placeholder-gray.png"
import mockupDark from "../../../img/placeholder-gray-dark.png"

import { Container, Col, Row } from "reactstrap";
import { Fade } from "react-awesome-reveal";


function FeaturesLayoutsTypeTwentySixth(props) {

  return (
    <React.Fragment>
      <section className={`section ${classes.features} ${(props.dark) ? `dark ${classes.dark}` : ''}`}>
        <div className={classes.gridWrapper}>
          <Container>

            <Row className={classes.contentRow}>
              <Col lg={6} md={6} className={classes.leftColumn}>
                  {props.dark === true ?
                      <>
                        <img src={mockupDark} />
                      </>
                      :
                      <>
                        <img src={mockup} />
                      </>
                    }
              </Col>
              <Col lg={5} md={6} className={classes.rightColumn}>
                <Fade top delay={50} triggerOnce={true}>
                  <Feature
                    dark={props.dark ? true : false}
                    title="Property Managment "
                    description="Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage! Create screens directly in Method or add your images from Sketch or Figma"
                  >
                  </Feature>
                </Fade>

                <Fade top delay={100} triggerOnce={true}>
                  <Feature
                    title="Marketing Automation"
                    dark={props.dark ? true : false}
                    description="Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage! Create screens directly in Method or add your images from Sketch or Figma"
                  >
                  </Feature>
                </Fade>

                <Fade top delay={150} triggerOnce={true}>
                  <Feature
                    noborder={true}
                    title="Email Marketing"
                    dark={props.dark ? true : false}
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
export default FeaturesLayoutsTypeTwentySixth