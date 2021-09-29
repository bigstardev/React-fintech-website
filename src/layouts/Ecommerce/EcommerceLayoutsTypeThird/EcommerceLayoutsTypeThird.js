import React, {Component} from "react";
import {Container, Col, Row} from "reactstrap";

import Slider from "./Slider/Slider";
import placeholder from "../../../img/placeholder-gray.png";
import Aside from "./Aside/Aside";
import {Select} from "antd";
import {Fade} from "react-awesome-reveal";
import classes from "./EcommerceLayoutsTypeThird.module.css";
const { Option } = Select;


class EcommerceLayoutsTypeThird extends Component{

    state = {
        total: 1,
        size: 'XL',
        price: 35,
        title: 'Basic Skinny Jeans',
        article: 'Light Blue - 5575/498',
        description: 'Five-pocket skinny jeans with metal zip fly and top button fastening',
        options : {
            XL : 'Height of model: 189 cm. / 6′ 2″ Size XL',
            XXL : 'Height of model: 189 cm. / 6′ 2″ Size XXL',
            L : 'Height of model: 189 cm. / 6′ 2″ Size L',
        },
        pictures: [
            placeholder,
            placeholder,
            placeholder,
            placeholder
        ]
    }


    decrease = () => {
        if (this.state.total > 0) {
            this.setState({ total: this.state.total - 1 });
        }
    }

    increase = () => {
        this.setState({ total: this.state.total + 1 });
    }

    handleChange = (value) => {
        this.setState({ size: value });
    }

    renderSlides () {
        const card = this.state.pictures;
        const listItems = card.map((item, index) => {
            return (
                <img src={item} alt=""/>
            )
        });
        return (
            <Slider
                array={listItems}
            />
        );
    }


    render() {

        return (
            <section className={`section ${classes.ecommerce} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <Container>
                    <Row>
                        <Col lg="6" md="6" className={classes.leftColumn}>
                            {this.renderSlides()}
                        </Col>

                        <Col lg="6" md="6" className={classes.rightColumn}>
                            <div className={classes.outer}>
                                <Fade  triggerOnce={true}>
                                    <Aside
                                        badge="New"
                                        title={this.state.title}
                                        article={this.state.article}
                                        description={this.state.description}
                                        value={this.state.total}
                                        decrease={this.decrease}
                                        increase={this.increase}
                                        total={(this.state.price * this.state.total).toFixed(2)}
                                        totalDescription={this.state.options[this.state.size]}
                                        select={
                                            <Select defaultValue="XL" style={{ width: '100%' }} onChange={this.handleChange} placeholder="Choose size" className={`${(this.props.dark) ?  `dark ${classes.dark}` : ''} big`}>
                                                <Option value="L">L</Option>
                                                <Option value="XL">XL</Option>
                                                <Option value="XXL">XXL</Option>
                                            </Select>
                                        }
                                        link={"some/link"}
                                        dark={this.props.dark ? true : false}
                                    />
                                </Fade>
                            </div>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }

}

export default EcommerceLayoutsTypeThird
