import React from "react";
import classes from "./FeaturesLayoutsTypeTwentyEighth.module.css"
import Feature from "./Feature/Feature";

import { Container, Col, Row } from "reactstrap";
import { Fade } from "react-awesome-reveal";

import slackLogo from "../../../img/Slack.png"
import figmaLogo from "../../../img/Figma.png"
import trelloLogo from "../../../img/Trello.png"

import slackLogoDark from "../../../img/Slack-dark.png"
import figmaLogoDark from "../../../img/Figma-dark.png"
import trelloLogoDark from "../../../img/Trello-dark.png"

const title = "Integrations";


function FeaturesLayoutsTypeTwentyEighth(props) {

  return (
    <React.Fragment>
      <section className={`section ${classes.features} ${(props.dark) ? `dark ${classes.dark}` : ''}`}>
        <div className={classes.gridWrapper}>
          <Container>
            <Row>
              <Col lg={5} md={6}>
                <h1>{title}</h1>
              </Col>
            </Row>
            <Row className={classes.contentRow}>
              <Col lg={4} md={6} className={classes.item}>
                <Fade top delay={50} triggerOnce={true}>
                  <Feature
                    dark={props.dark ? true : false}
                    title="Slack"
                    description="Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage! Create screens directly in Method or add your images from Sketch or Figma"
                  >
                    {props.dark === true ?
                      <>
                        <img width={47} height={50} src={slackLogoDark} />
                      </>
                      :
                      <>
                        <img width={47} height={50} src={slackLogo} />
                      </>
                    }
                  </Feature>
                </Fade>
              </Col>
              <Col lg={4} md={6} className={classes.item}>
                <Fade top delay={100} triggerOnce={true}>
                  <Feature
                    title="Trello"
                    dark={props.dark ? true : false}
                    description="Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage! Create screens directly in Method or add your images from Sketch or Figma"
                  >
                     {props.dark === true ?
                      <>
                         <img width={45} height={50} src={trelloLogoDark} />
                      </>
                      :
                      <>
                         <img width={45} height={50} src={trelloLogo} />
                      </>
                    }
                  </Feature>
                </Fade>
              </Col>
              <Col lg={4} md={6} className={classes.item}>
                <Fade top delay={150} triggerOnce={true}>
                  <Feature
                    title="Figma"
                    dark={props.dark ? true : false}
                    description="Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage! Create screens directly in Method or add your images from Sketch or Figma"
                  >
                     {props.dark === true ?
                      <>
                          <img width={35} height={50} src={figmaLogoDark} />
                      </>
                      :
                      <>
                          <img width={35} height={50} src={figmaLogo} />
                      </>
                    }
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
export default FeaturesLayoutsTypeTwentyEighth