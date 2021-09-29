import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";

import Ecommerce from "./Ecommerce/EcommerceTypeTwelfth";

import picture from "../../../img/placeholder-gray.png"
import pictureDark from "../../../img/placeholder-gray-dark.png"
import backgroundImage from "../../../img/example.png";
import {Fade} from "react-awesome-reveal";
import classes from "./EcommerceLayoutsTypeTwelfth.module.css";


class EcommerceLayoutsTypeTwelfth extends Component {

    state = {
        postForView: 4,
        products: [
            {
                title: 'Nike Air Zoom Pegasus 36 Premium',
                description: 'Inspired by colors and textures from art movements',
                price: '5.99',
                poster: null,
                category: 'nike',
                link: './some-link',
                rating: 4.5
            },
            {
                title: 'SNike ZoomX Vaporfly Next Collection',
                description: 'Inspired by colors and textures from art movements',
                price: '6.99',
                poster: null,
                category: 'nike',
                link: './some-link',
                rating: 4.2
            },
            {
                title: 'Nike Air Zoom Pegasus 36 Premium',
                description: 'Inspired by colors and textures from art movements',
                price: '7.99',
                poster: null,
                category: 'nike',
                link: './some-link',
                rating: 4.1
            },
            {
                title: 'SNike ZoomX Vaporfly Next Collection',
                description: 'Inspired by colors and textures from art movements',
                price: '8.99',
                poster: null,
                category: 'nike',
                link: './some-link',
                rating: 4.0
            },

        ],
    }

    renderCards () {
        const card = this.state.products;
        const listItems = card.filter((element, index) => {
                if (index < this.state.postForView) {
                    return true
                }
            }
        ).map((item, index) => {
            return (
                <Col lg="6" md="6" sm="6" className={classes.item} key={index}>
                    <Fade down delay={`${index}1`} triggerOnce={true}>
                        <Ecommerce
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            rating={item.rating}
                            dark={this.props.dark ? true : false}
                            poster ={
                                <>
                                    {item.poster ?
                                        <img
                                            src={item.poster}
                                            alt=""
                                        />
                                        :
                                        <img
                                            src={this.props.dark == true ? pictureDark : picture}
                                            alt="placeholder"
                                        />
                                    }
                                </>
                            }
                        />
                    </Fade>
                </Col>
            )
        });
        return (
            <Row>
                {listItems}
            </Row>
        );
    }

    render() {

        return (
            <div>
                <section className={`${classes.ecommerce} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                        <Container fluid="true" className="container-fluid" style={{backgroundImage: `url(${backgroundImage})`}}>
                            <div className={classes.gridWrapper}>
                            <Container>
                                {this.renderCards()}
                            </Container>
                            </div>
                        </Container>
                </section>
            </div>
        )
    }
}

export default EcommerceLayoutsTypeTwelfth