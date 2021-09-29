import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "../../../components/Tabs/Tabs";
import Ecommerce from "./Ecommerce/EcommerceTypeFourteenth";

import TextButton from "../../../components/Text-Button/Text-Button";
import Oval from "../../../components/Frame/Frame";
import {RightArrow} from "../../../components/Icons/Icons";
import {Fade} from "react-awesome-reveal";
import classes from "./EcommerceLayoutsTypeFourteenth.module.css"

const postForView = 6;

const title = "New Collection";
const strong = "Summer";

class EcommerceLayoutsTypeFourteenth extends Component {

    state = {
        activeCategory: 'women',
        postForView: postForView,
        products: [
            {
                title: 'Nike Air Zoom Pegasus 36 Premium',
                description: 'Inspired by colors and textures from art movements',
                price: '5.99',
                poster: null,
                category: 'women',
                link: './some-link',
                rating: 4.5
            },
            {
                title: 'SNike ZoomX Vaporfly Next Collection',
                description: 'Inspired by colors and textures from art movements',
                price: '6.99',
                poster: null,
                category: 'women',
                link: './some-link',
                rating: 4.2
            },
            {
                title: 'Nike Air Zoom Pegasus 36 Premium',
                description: 'Inspired by colors and textures from art movements',
                price: '7.99',
                poster: null,
                category: 'women',
                link: './some-link',
                rating: 4.1
            },
            {
                title: 'SNike ZoomX Vaporfly Next Collection',
                description: 'Inspired by colors and textures from art movements',
                price: '8.99',
                poster: null,
                category: 'women',
                link: './some-link',
                rating: 4.0
            },
            {
                title: 'Nike Air Zoom Pegasus 36 Premium',
                description: 'Inspired by colors and textures from art movements',
                price: '5.99',
                poster: null,
                category: 'women',
                link: './some-link',
                rating: 4.5
            },
            {
                title: 'SNike ZoomX Vaporfly Next Collection',
                description: 'Inspired by colors and textures from art movements',
                price: '6.99',
                poster: null,
                category: 'women',
                link: './some-link',
                rating: 4.2
            },
            {
                title: 'Nike Air Zoom Pegasus 36 Premium',
                description: 'Inspired by colors and textures from art movements',
                price: '7.99',
                poster: null,
                category: 'man',
                link: './some-link',
                rating: 4.1
            },
            {
                title: 'SNike ZoomX Vaporfly Next Collection',
                description: 'Inspired by colors and textures from art movements',
                price: '8.99',
                poster: null,
                category: 'man',
                link: './some-link',
                rating: 4.0
            },
            {
                title: 'Nike Air Zoom Pegasus 36 Premium',
                description: 'Inspired by colors and textures from art movements',
                price: '5.99',
                poster: null,
                category: 'man',
                link: './some-link',
                rating: 4.5
            },
            {
                title: 'SNike ZoomX Vaporfly Next Collection',
                description: 'Inspired by colors and textures from art movements',
                price: '6.99',
                poster: null,
                category: 'kids',
                link: './some-link',
                rating: 4.2
            },
            {
                title: 'Nike Air Zoom Pegasus 36 Premium',
                description: 'Inspired by colors and textures from art movements',
                price: '7.99',
                poster: null,
                category: 'kids',
                link: './some-link',
                rating: 4.1
            },
            {
                title: 'SNike ZoomX Vaporfly Next Collection',
                description: 'Inspired by colors and textures from art movements',
                price: '8.99',
                poster: null,
                category: 'kids',
                link: './some-link',
                rating: 4.0
            },
            {
                title: 'SNike ZoomX Vaporfly Next Collection',
                description: 'Inspired by colors and textures from art movements',
                price: '6.99',
                poster: null,
                category: 'kids',
                link: './some-link',
                rating: 4.2
            },
            {
                title: 'Nike Air Zoom Pegasus 36 Premium',
                description: 'Inspired by colors and textures from art movements',
                price: '7.99',
                poster: null,
                category: 'kids',
                link: './some-link',
                rating: 4.1
            },
            {
                title: 'SNike ZoomX Vaporfly Next Collection',
                description: 'Inspired by colors and textures from art movements',
                price: '8.99',
                poster: null,
                category: 'kids',
                link: './some-link',
                rating: 4.0
            },
            {
                title: 'Nike Air Zoom Pegasus 36 Premium',
                description: 'Inspired by colors and textures from art movements',
                price: '5.99',
                poster: null,
                category: 'kids',
                link: './some-link',
                rating: 4.5
            },
            {
                title: 'SNike ZoomX Vaporfly Next Collection',
                description: 'Inspired by colors and textures from art movements',
                price: '6.99',
                poster: null,
                category: 'kids',
                link: './some-link',
                rating: 4.2
            },
            {
                title: 'SNike ZoomX Vaporfly Next Collection',
                description: 'Inspired by colors and textures from art movements',
                price: '8.99',
                poster: null,
                category: 'man',
                link: './some-link',
                rating: 4.0
            },
            {
                title: 'Nike Air Zoom Pegasus 36 Premium',
                description: 'Inspired by colors and textures from art movements',
                price: '5.99',
                poster: null,
                category: 'man',
                link: './some-link',
                rating: 4.5
            },
            {
                title: 'SNike ZoomX Vaporfly Next Collection',
                description: 'Inspired by colors and textures from art movements',
                price: '6.99',
                poster: null,
                category: 'home',
                link: './some-link',
                rating: 4.2
            },
            {
                title: 'Nike Air Zoom Pegasus 36 Premium',
                description: 'Inspired by colors and textures from art movements',
                price: '7.99',
                poster: null,
                category: 'home',
                link: './some-link',
                rating: 4.1
            },
            {
                title: 'SNike ZoomX Vaporfly Next Collection',
                description: 'Inspired by colors and textures from art movements',
                price: '8.99',
                poster: null,
                category: 'home',
                link: './some-link',
                rating: 4.0
            },
            {
                title: 'SNike ZoomX Vaporfly Next Collection',
                description: 'Inspired by colors and textures from art movements',
                price: '6.99',
                poster: null,
                category: 'home',
                link: './some-link',
                rating: 4.2
            },

        ],
        category: [
            'Women', 'Man', 'Kids', 'Home'
        ]
    }

    onButtonClickHandler = (event) => {
        event.preventDefault();
        const card = this.state.products;
        const listItems = card.filter((element) => {
                if (element.category == this.state.activeCategory) {
                    return true
                }
            }
        )
        this.setState({postForView: listItems.length});
    }

    onLinksClickHandler = (event) => {
        event.preventDefault();
        const currentValue = event.currentTarget.innerText.toLowerCase().replace(/ /g,"-");
        this.setState({activeCategory: currentValue });
        this.setState({postForView: postForView});

        const card = this.state.products;
        const listItems = card.filter((element) => {
                if (element.category == this.state.activeCategory) {
                    return true
                }
            }
        )

    }

    renderCards () {
        const card = this.state.products;
        const listItems = card.filter((element) => {
                if (element.category == this.state.activeCategory) {
                    return true
                }
            }
        ).filter((element, index) => {
                if (index < this.state.postForView) {
                    return true
                }
            }
        ).map((item, index) => {
            return (
                <Fade down delay={`${index}1`} triggerOnce={true} key={index}>
                    <Ecommerce
                        key={index}
                        poster={item.poster}
                        rating={item.rating}
                        link={item.link}
                        title={item.title}
                        price={item.price}
                        dark={this.props.dark ? true : false}
                    >
                    </Ecommerce>
                </Fade>

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
                <section className={`section ${classes.ecommerce} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row>
                                <Col lg="12" md="12">
                                    <Fade down triggerOnce={true}>
                                        <strong style={{display: 'block'}}>{strong}</strong>
                                    </Fade>
                                </Col>
                            </Row>
                            <Row className={classes.tabsRow}>
                                <Col lg="5" md="6">
                                    <Fade down delay={50} triggerOnce={true}>
                                        <h1 className="text-left">{title}</h1>
                                    </Fade>
                                </Col>
                                <Col lg="6" md="6"  className="ml-auto d-flex align-items-center">
                                        <div style={{width: '100%'}}>
                                            <Fade down delay={50} triggerOnce={true}>
                                            <Tabs
                                                array={this.state.category}
                                                onClick={this.onLinksClickHandler}
                                            />
                                            </Fade>
                                        </div>
                                </Col>
                            </Row>

                            <Col>
                                <Row className={classes.ecommerceRow}>
                                    {this.renderCards()}
                                </Row>
                            </Col>

                            <Row className={classes.buttonRow}>
                                <Col lg={8} md={8} className="mx-auto d-flex justify-content-center">
                                  {this.state.postForView <= postForView &&
                                    <TextButton
                                        position={"right"}
                                        link={"#1"}
                                        text={"See More"}
                                        onClick={this.onButtonClickHandler}
                                    >
                                        <Oval
                                            variant={"small"}
                                        >
                                            <RightArrow/>
                                        </Oval>
                                    </TextButton>
                                  }

                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
        )
    }
}

export default EcommerceLayoutsTypeFourteenth
