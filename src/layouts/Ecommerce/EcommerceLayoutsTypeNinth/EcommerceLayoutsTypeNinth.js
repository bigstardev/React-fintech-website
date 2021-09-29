import React, {Component} from "react";
import {Container, Col, Row} from "reactstrap";

import placeholder from "../../../img/placeholder-gray.png";
import Aside from "./Aside/Aside";
import {Select} from "antd";
import {Fade} from "react-awesome-reveal";
import classes from "./EcommerceLayoutsTypeNinth.module.css"

const { Option } = Select;

class EcommerceLayoutsTypeNinth extends Component{

    state = {
        total: 1,
        size: 'XL',
        price: 35,
        title: 'Nike Air Zoom Pegasus 36 Premium',
        article: 'Light Blue - 5575/498',
        description: 'Inspired by colors and textures from art movements of the last century, the Nike Air Max 270',
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

    renderPictures () {
        const card = this.state.pictures;
        const listItems = card.map((item, index) => {
            return (
                <div key={index}>
                    <img src={item} alt=""/>
                </div>
            )
        });
        return (
            <div>
                {listItems}
            </div>
        );
    }


    render() {

        return (
            <section className={`section ${classes.ecommerce} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col lg="8" md="7" className={classes.leftColumn}>
                                <div className={classes.wrapper}>
                                    {this.renderPictures()}
                                </div>
                            </Col>

                            <Col lg="4" md="5" className={classes.rightColumn}>
                                <Fade triggerOnce={true}>
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
                                        array={this.state.pictures}
                                        dark={this.props.dark ? true : false}
                                    />
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        )
    }

}

export default EcommerceLayoutsTypeNinth
