import React from "react";
import classes from "./FeaturesLayoutsTypeThirtySecond.module.css"

import { Container, Col, Row } from "reactstrap";
import { Fade } from "react-awesome-reveal";
import { Collapse } from 'antd';

import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const title = "Frequently asked questions";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!"
const { Panel } = Collapse;
const text = `Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage! Create screens directly in Method or add your images from Sketch or FigmaCreate screens directly in Method or add your images from Sketch or Figma.`;

function FeaturesLayoutsTypeThirtySecond(props) {

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
              <Col lg={12}>
                <Collapse bordered={false} defaultActiveKey={['1']} expandIconPosition="right"  expandIcon={({ isActive }) => isActive ? <MinusOutlined/> : <PlusOutlined /> }>
                  <Panel header="Property Managment?" key="1">
                    <p>{text}</p>
                  </Panel>
                  <Panel header="Marketing Automation?" key="2">
                    <p>{text}</p>
                  </Panel>
                  <Panel header="Email Marketing?" key="3">
                   <p>{text}</p>
                  </Panel>
                  <Panel header="Team Accounts?" key="4">
                    <p>{text}</p>
                  </Panel>
                  <Panel header="User Administration?" key="5">
                    <p>{text}</p>
                  </Panel>
                </Collapse>
              </Col>
            </Row>

          </Container>
        </div>
      </section>
    </React.Fragment>
  )
}
export default FeaturesLayoutsTypeThirtySecond