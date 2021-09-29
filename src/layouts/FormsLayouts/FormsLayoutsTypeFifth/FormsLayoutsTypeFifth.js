import React, {Component} from "react";

import 'antd/dist/antd.css';
import classes from "./FormsLayoutsTypeFifth.module.css"

import {Container, Col , Row} from "reactstrap";
import SimpleForm from "./SimpleForm/SimpleForm";
import Aside from "./Aside/Aside";
import Card from "./Card/Card";
import placeholder from "../../../img/placeholder-gray.png"
import {Fade} from "react-awesome-reveal";

const title = "Your Payment Details";
const description = "Create screens directly in Method or add your images from Sketch.";

class FormsLayoutsTypeFifth extends Component  {

    state = {
        total : null,
        products: [
            {
                title: 'Basic Skinny Jeans',
                price: '150.00',
                poster: placeholder,
                link: '/some-link'
            },
            {
                title: 'Denim Bib Overall',
                price: '80.00',
                poster: placeholder,
                link: '/some-link'
            },
            {
                title: 'Shorts with Tie Belt',
                price: '40.00',
                poster: placeholder,
                link: '/some-link'
            },
        ]
    }

    deleteHandler(index) {
        const products = this.state.products.concat()
        products.splice(index, 1)
        this.setState({products})
    }

    totalPrice(arr) {

        const listItems = arr.map((item, index) => {
            return (
                parseInt( item.price, 10)
            )
        }).reduce(function(sum, current) {
            return sum + current;
        }, 0);
        return listItems.toFixed(2);
    }

    renderCards () {
        const card = this.state.products;
        const listItems = card.map((item, index) => {
            return (
                    <Card
                        key={index}
                        image={item.poster}
                        title={item.title}
                        price={item.price}
                        link={item.link}
                        onDelete={this.deleteHandler.bind(this, index)}
                        dark={this.props.dark ? true : false}
                    />
            )
        });
        return (
            <div className={classes.aside}>
                <Aside
                    dark={this.props.dark ? true : false}
                    total={this.totalPrice(this.state.products)}
                >
                    {listItems}
                </Aside>
            </div>
        );
    }

    render() {
        return (
            <React.Fragment>
                <section className={`section ${classes.form} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row>
                                <Col lg="8" md="10" className={classes.leftColumn}>
                                    <Row>
                                        <Col className={`col-12 ${classes.headerColumn}`}>
                                            <Fade down triggerOnce={true}>
                                                <h2>{title}</h2>
                                            </Fade>
                                            <Fade down delay={50} triggerOnce={true}>
                                                <p className={classes.description}>{description}</p>
                                            </Fade>
                                        </Col>
                                        <Col className={`col-12 ${classes.formColumn}`}>
                                            <Fade delay={100} triggerOnce={true}>
                                                <SimpleForm
                                                    dark={this.props.dark ? true : false}
                                                />
                                            </Fade>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col lg="4" md="10" className={classes.rightColumn}>
                                    <div className={classes.hidden}>
                                        <Fade down triggerOnce={true}>
                                            <h2>{title}</h2>
                                        </Fade>
                                        <Fade down delay={50} triggerOnce={true}>
                                            <p className={classes.description}>{description}</p>
                                        </Fade>
                                    </div>
                                    <div style={{height: '100%'}} className={classes.customWrapper}>
                                        <Fade delay={50} triggerOnce={true}>
                                            {this.state.products.length > 0 &&
                                            this.renderCards()
                                            }
                                        </Fade>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </React.Fragment>
        )
    }

}
export default FormsLayoutsTypeFifth