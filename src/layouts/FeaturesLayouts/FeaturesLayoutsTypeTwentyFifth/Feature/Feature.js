import React from "react";
import classes from "./Feature.module.css"
import { Col, Row } from "reactstrap";

import TextButton from "../../../../components/Text-Button/Text-Button";
import Frame from "../../../../components/Frame/Frame";
import { RightArrow } from "../../../../components/Icons/Icons";

const Feature = (props) => {
  return (
    <div className={`${classes.feature} ${props.bordered ? `${classes.bordered}` : ''} ${props.dark ? `${classes.dark}` : ''}`}>
      <Row className={classes.contentRow}>

        <Col lg={{ size: 3 }} md={4}>
          <h3>{props.title}</h3>
        </Col>

        <Col lg={{ size: 5, offset: 3 }} md={8}>
          <div className={classes.content}>
            <p className={`normal-text text-left ${classes.description}`}>{props.description}</p>
            <TextButton
              link={props.link}
              text={props.linkText}
              position={"left"}
            >
              <Frame
                variant={"small"}
                color={"#345DEE"}
              >
                <RightArrow fill="white" />
              </Frame>
            </TextButton>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Feature