import { Row, Col, Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

import React, {Component} from "react";
import 'antd/dist/antd.css';

import {Email, Group, Extension} from "../../../components/Icons/Icons";
import Oval from "../../../components/Frame/Frame";
import Feature from "./Feature/FeatureTypeFourth";
import Slider from "./Slider/Slider";
import Button from "../../../components/Button/Button";
import { Fade } from "react-awesome-reveal";
import classes from "./FeaturesLayoutsTypeSeventeenth.module.css"

const title = "Solutions tailored for every need";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";


class FeaturesLayoutsTypeSeventeenth extends Component {

    state = {
        features: [
            {
                title: 'Email Marketing',
                description: 'Create screens directly in Method or add your images from Sketch',
                icon: <Email fill="#ffffff"/>
            },
            {
                title: 'User Administration',
                description: 'Create screens directly in Method or add your images from Sketch',
                icon: <Group fill="#ffffff"/>
            },
            {
                title: 'API Reference',
                description: 'Create screens directly in Method or add your images from Sketch',
                icon: <Extension fill="#ffffff"/>
            },
            {
                title: 'Email Marketing',
                description: 'Create screens directly in Method or add your images from Sketch',
                icon: <Email fill="#ffffff"/>
            },
            {
                title: 'User Administration',
                description: 'Create screens directly in Method or add your images from Sketch',
                icon: <Group fill="#ffffff"/>
            },
            {
                title: 'API Reference',
                description: 'Create screens directly in Method or add your images from Sketch',
                icon: <Extension fill="#ffffff"/>
            }
        ]
    }

    renderCards () {
        const card = this.state.features;
        const listItems = card.map((item, index) => {
            return (
                <Feature
                    key={index}
                    title={item.title}
                    description={item.description}
                    dark={this.props.dark ? true : false}
                >
                    <Oval
                        variant={"large"}
                        color={"secondary"}
                    >
                        {item.icon}
                    </Oval>
                </Feature>
            )
        });
        return (
            <Slider
                array={listItems}
                dark={this.props.dark ? true : false}
            />
        );
    }

    render() {

        return (
            <div>
                <section className={`section ${classes.features} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <Container className={classes.container}>
                        <Row className={classes.headerRow}>
                            <Col lg="10" md="10" className={`mx-auto text-center ${classes.col}`}>
                                <div className={classes.gridWrapper}>
                                    <Fade down>
                                        <h1 className={`title ${classes.title}`}>{title}</h1>
                                    </Fade>
                                    <Fade down delay={50} triggerOnce={true}>
                                        <p className={`description ${classes.description}`}>{description}</p>
                                    </Fade>
                                </div>
                            </Col>
                        </Row>
                        <Row className={classes.featuresRow}>
                            <Col className="p-0">
                                <Fade down delay={100} triggerOnce={true}>
                                    {this.renderCards()}
                                </Fade>

                            </Col>
                        </Row>
                        <Row className={classes.buttonsRow}>
                            <Col lg="10" md="10" className="mx-auto d-flex justify-content-center">
                                <Fade down delay={150} triggerOnce={true}>
                                    <Button
                                        link={true}
                                        href={"#"}
                                        classes={`primary large simple ${classes.button}`}
                                        value={"Get Started"}
                                    />
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        )
    }

}

export default FeaturesLayoutsTypeSeventeenth