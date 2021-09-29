import React from "react";

import { Fade } from "react-awesome-reveal";
import { Container, Col, Row } from "reactstrap";
import classes from "./FeaturesLayoutsTypeTwentyThird.module.css"

import placeholder from '../../../img/placeholder-02.png';
import placeholderDark from '../../../img/placeholder-02-dark.png';
import Button from "../../../components/Button/Button"

const title = "Method and the tools you love";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";

function FeaturesLayoutsTypeTwentyThird(props) {

  return (
    <React.Fragment>
      <section className={`section ${classes.features} ${(props.dark) ? `dark ${classes.dark}` : ''}`}>

        <div className={classes.gridWrapper}>
          <Container>
            <Row>
              <Col lg="5" md="6" className={classes.flexContainer}>
                <Fade down triggerOnce={true}>
                  <h1 className={`text-left ${classes.title}`}>{title}</h1>
                  <p className={classes.description}>{description}</p>
                  <Button
                    link={true}
                    href="#"
                    classes={`primary large simple ${classes.button}`}
                    value="Read More">
                  </Button>
                </Fade>
              </Col>

              <Col lg="7" md="6" className={classes.imageContainer}>
                <Fade down delay={50} triggerOnce={true}>
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
export default FeaturesLayoutsTypeTwentyThird