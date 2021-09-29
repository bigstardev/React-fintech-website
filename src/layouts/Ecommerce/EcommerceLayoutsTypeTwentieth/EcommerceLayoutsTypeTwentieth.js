import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";

import { Fade } from "react-awesome-reveal";
import classes from "./EcommerceLayoutsTypeTwentieth.module.css";
import Product from "./Product/Product";
import placeholder from "../../../img/placeholder-gray.png";

const title = "Wishlist";

class EcommerceLayoutsTypeTwentieth extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                    id: '1',
                    cover: placeholder,
                    name: 'Sleeveless Jersey',
                    price: '15.99',
                    link: '/link'
                },
                {
                    id: '2',
                    cover: placeholder,
                    name: 'Quilted Maxi Crossbody Bag',
                    price: '39.99',
                    link: '/link'
                },
                {
                    id: '3',
                    cover: placeholder,
                    name: 'Denim Bib Overall',
                    price: '5.99',
                    link: '/link'
                },
                {
                    id: '4',
                    cover: placeholder,
                    name: 'V-neck Jumpsuit',
                    price: '5.99',
                    link: '/link'
                },
                {
                    id: '5',
                    cover: placeholder,
                    name: 'Shorts with Tie Belt',
                    price: '25.99',
                    link: '/link'
                }
            ]
        }
    }

    renderCards() {
        const card = this.state.products;
        const listItems = card.map((item, index) => {
            return (
                <Col lg={4} md={6} sm={6} key={index}>
                    <Fade down delay={`${index}1`} triggerOnce={true}>
                        <Product
                            dark={this.props.dark ? true : false}
                            index={item.id}
                            cover={item.cover}
                            title={item.name}
                            price={item.price}
                            link={item.link}
                        >
                        </Product>
                    </Fade>
                </Col>
            )
        });
        return (
            <>
                {listItems}
            </>
        );
    }

    render() {
        return (
            <section className={`section ${classes.ecommerce} ${(this.props.dark) ? `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col>
                                <Fade down  triggerOnce={true}>
                                    <h2 className={classes.title}>{title}</h2>
                                </Fade>
                            </Col>
                        </Row>
                        <Row className={classes.contentRow}>
                            {this.renderCards()}
                        </Row>
                    </Container>
                </div>
            </section>
        )
    }
}

export default EcommerceLayoutsTypeTwentieth