import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";

import { Fade } from "react-awesome-reveal";
import classes from "./EcommerceLayoutsTypeTwentyFirst.module.css";
import Product from "./Product/Product";
import Slider from "./Slider/Slider";

import placeholder from "../../../img/placeholder-gray.png";

class EcommerceLayoutsTypeTwentyFirst extends Component {

    constructor(props) {
        super(props);

        this.state = {
            product: {
                features: [
                    '4K HDR Video',
                    'UHD Image Quality',
                    '4K HDR Video'
                ],
                title: `New Balance Men's Warm`,
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                price: '40.00',
                link: '/some-link',
                pictures: [
                    placeholder,
                    placeholder,
                    placeholder,
                    placeholder,
                ]
            }
        }
    }

    render() {

        const { title, description, price, link, features, pictures } = this.state.product

        return (
            <section className={`section ${classes.ecommerce} ${(this.props.dark) ? `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col lg={5} className={classes.leftColumn}>
                                <Fade down triggerOnce={true}>
                                    <Product
                                        title={title}
                                        description={description}
                                        price={price}
                                        link={link}
                                        data={features}
                                        dark={this.props.dark ? true : false}
                                    />
                                </Fade>
                            </Col>
                            <Col lg={7} className={classes.rightColumn}>
                                <div className={classes.swiperOverflow}>
                                    <Slider
                                        array={pictures}
                                        dark={this.props.dark ? true : false}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        )
    }
}

export default EcommerceLayoutsTypeTwentyFirst