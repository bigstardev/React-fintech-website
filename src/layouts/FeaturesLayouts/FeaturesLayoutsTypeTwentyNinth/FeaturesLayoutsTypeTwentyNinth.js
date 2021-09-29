import React, {Component} from "react";
import classes from "./FeaturesLayoutsTypeTwentyNinth.module.css"
import Feature from "./Feature/Feature";
import Divider from "../../../components/Divider/Divider";

import { Container, Col, Row } from "reactstrap";
import { Fade } from "react-awesome-reveal";

const title = "Frequently asked questions";


class FeaturesLayoutsTypeTwentyNinth extends Component {

  state = {
    careers: [
      {
        category: 'data',
        position: 'Network administrator',
        location: 'Remote'
      },
      {
        category: 'data',
        position: 'Database architect',
        location: 'San Francisco, CA'
      },
      {
        category: 'data',
        position: 'Database developer',
        location: 'San Francisco, CA'
      },
      {
        category: 'data',
        position: 'Front-end developer',
        location: 'Remote'
      },
      {
        category: 'data',
        position: 'Back-end developer',
        location: 'Remote'
      },
      {
        category: 'developer',
        position: 'Game developer',
        location: 'San Francisco, CA'
      },
      {
        category: 'developer',
        position: 'Software tester',
        location: 'San Francisco, CA'
      },
      {
        category: 'developer',
        position: 'Data scientist',
        location: 'San Francisco, CA'
      },
      {
        category: 'developer',
        position: 'QA engineer',
        location: 'Remote'
      },
    ]
  }

  renderCards (search) {
    const card = this.state.careers;

    let filterData = card.filter(function (e) {
      return e.category === search;
  });

    const listItems = filterData.map((item, index) => {
      return (
      <Col lg={4} md={4} sm={6} className={classes.item} key={index}>
        <Fade left delay={`${index}1`} triggerOnce={true} >
          <Feature
            title={item.position}
            description={item.location}
            dark={this.props.dark ? true : false}
          />
        </Fade>
      </Col>
    )});
    return (
        <>
            {listItems}
        </>
    );
}

  render() {
  return (
    <React.Fragment>
      <section className={`section ${classes.features} ${(this.props.dark) ? `dark ${classes.dark}` : ''}`}>
        <div className={classes.gridWrapper}>
          <Container>
            <Row>
              <Col lg={12}>
                <Fade top triggerOnce={true}>
                  <h1 className="text-center">{title}</h1>
                </Fade>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className={classes.headerRow}>
              <Col lg={12} className={classes.item}>
              <Fade top triggerOnce={true}>
                <h2>Data</h2>
                <Divider/>
              </Fade>
              </Col>
            </Row>
            <Row className={classes.contentRow}>
              {this.renderCards('data')}
            </Row>
            <Row className={classes.headerRow}>
              <Col lg={12} className={classes.item}>
              <Fade top triggerOnce={true}>
                <h2>Developer</h2>
                <Divider/>
              </Fade>
              </Col>
            </Row>
            <Row className={classes.contentRow}>
              {this.renderCards('developer')}
            </Row>
          </Container>
        </div>
      </section>
    </React.Fragment>
  )
  }
}
export default FeaturesLayoutsTypeTwentyNinth