import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "../../../components/Tabs/Tabs";
import Ecommerce from "./Ecommerce/EcommerceTypeTenth";

import TextButton from "../../../components/Text-Button/Text-Button";
import Oval from "../../../components/Frame/Frame";
import {RightArrow} from "../../../components/Icons/Icons";

import placeholder from "../../../img/placeholder-gray.png";
import placeholderDark from "../../../img/placeholder-gray-dark.png";
import {Fade} from "react-awesome-reveal";
import classes from "./EcommerceLayoutsTypeFifth.module.css"

const postForView = 4;

const title = "Summer";
const strong = "New Collection";

class EcommerceLayoutsTypeFifth extends Component {

    state = {
        activeCategory: 'women',
        postForView: 4,
        products: [
            {
                title: 'Airy Tunic',
                poster: null,
                price: '39.99',
                category: 'women',
                link: './some-link',
            },
            {
                title: 'Sleeveless Jersey',
                poster: null,
                price: '39.99',
                category: 'women',
                link: './some-link',
            },
            {
                title: 'Denim Bib Overall',
                poster: null,
                price: '39.99',
                category: 'women',
                link: './some-link',
            },
            {
                title: 'Airy Tunic',
                poster: null,
                price: '39.99',
                category: 'women',
                link: './some-link',
            },
            {
                title: 'Denim Bib Overall',
                poster: null,
                price: '39.99',
                category: 'women',
                link: './some-link',
            },
            {
                title: 'Airy Tunic',
                poster: null,
                price: '39.99',
                category: 'women',
                link: './some-link',
            },

            {
                title: 'Airy Tunic',
                poster: null,
                price: '39.99',
                category: 'man',
                link: './some-link',
            },
            {
                title: 'Sleeveless Jersey',
                poster: null,
                price: '39.99',
                category: 'man',
                link: './some-link',
            },
            {
                title: 'Denim Bib Overall',
                poster: null,
                price: '39.99',
                category: 'man',
                link: './some-link',
            },
            {
                title: 'Sleeveless Jersey',
                poster: null,
                price: '39.99',
                category: 'man',
                link: './some-link',
            },
            {
                title: 'Denim Bib Overall',
                poster: null,
                price: '39.99',
                category: 'man',
                link: './some-link',
            },
            {
                title: 'Airy Tunic',
                poster: null,
                price: '39.99',
                category: 'kids',
                link: './some-link',
            },
            {
                title: 'Airy Tunic',
                poster: null,
                price: '39.99',
                category: 'kids',
                link: './some-link',
            },
            {
                title: 'Sleeveless Jersey',
                poster: null,
                price: '39.99',
                category: 'kids',
                link: './some-link',
            },
            {
                title: 'Denim Bib Overall',
                poster: null,
                price: '39.99',
                category: 'kids',
                link: './some-link',
            },
            {
                title: 'Airy Tunic',
                poster: null,
                price: '39.99',
                category: 'man',
                link: './some-link',
            },
            {
                title: 'Airy Tunic',
                poster: null,
                price: '39.99',
                category: 'home',
                link: './some-link',
            },
            {
                title: 'Sleeveless Jersey',
                poster: null,
                price: '39.99',
                category: 'home',
                link: './some-link',
            },
            {
                title: 'Denim Bib Overall',
                poster: null,
                price: '39.99',
                category: 'home',
                link: './some-link',
            },
            {
                title: 'Airy Tunic',
                poster: null,
                price: '39.99',
                category: 'home',
                link: './some-link',
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
                <Col lg="3" md="6" sm={6} className={classes.item} key={index}>
                    <Fade down delay={`${index}1`} triggerOnce={true}>
                        <Ecommerce
                            poster={item.poster}
                            link={item.link}
                            title={item.title}
                            price={item.price}
                            dark={this.props.dark ? true : false}
                        >

                                    {item.poster ?
                                        <img
                                            src={item.poster}
                                            alt="placeholder"
                                        />
                                        :
                                        <img
                                            src={this.props.dark == true ? placeholderDark : placeholder}
                                            alt="placeholder"
                                        />
                                    }

                        </Ecommerce>
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
            <div>
                <section className={`section ${classes.ecommerce} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row>
                                <Col lg="8" md="8" className={`mx-auto ${classes.headerColumn} text-center`}>
                                    <Fade down triggerOnce={true}>
                                        <strong style={{display: 'block'}}>{strong}</strong>
                                    </Fade>
                                    <Fade down delay={50} triggerOnce={true}>
                                        <h1 className={`title ${classes.title}`}>{title}</h1>
                                    </Fade>
                                </Col>
                            </Row>
                            <Row className={classes.tabsRow}>
                                <Col lg="6" md="8"  className="mx-auto d-flex justify-content-center">
                                        <div style={{width: '100%'}}>
                                            <Fade down delay={50} triggerOnce={true}>
                                            <Tabs
                                                array={this.state.category}
                                                onClick={this.onLinksClickHandler}
                                                classes="secondary"
                                            />
                                            </Fade>
                                        </div>
                                </Col>
                            </Row>

                            <Row className={classes.ecommerceRow}>
                                {this.renderCards()}
                            </Row>


                            <Row className={classes.buttonRow}>
                                <Col lg={8} md={8} className="mx-auto d-flex justify-content-center">
                                  {this.state.postForView <= postForView && 
                                    <Fade down delay={300} triggerOnce={true}>
                                        <TextButton
                                            position={"right"}
                                            link={"#1"}
                                            text={"Read More"}
                                            onClick={this.onButtonClickHandler}
                                        >
                                            <Oval
                                                variant={"small"}
                                            >
                                                <RightArrow/>
                                            </Oval>

                                        </TextButton>
                                    </Fade>
                                  }
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </section>
            </div>
        )
    }
}

export default EcommerceLayoutsTypeFifth
