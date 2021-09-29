import React, {Component} from "react";

import placeholder from "../../../img/placeholder-gray.png";
import placeholderDark from "../../../img/placeholder-gray-dark.png";
import {Select} from "antd";
import Aside from "./Aside/Aside";
import Similar from "./Similar/EcommerceTypeSimilar";
import {Fade} from "react-awesome-reveal";
import classes from "./EcommerceLayoutsTypeFourth.module.css"

const { Option } = Select;

class EcommerceLayoutsTypeFourth extends Component{

    state = {
        activeIndex: 0,
        total: 1,
        size: 'XL',
        price: 35,
        title: 'New Balance Men\'s Warm Up Jacket',
        article: 'Light Blue - 5575/498',
        description: 'In professional filmmaking, time and budget matter. By combining portability, stability, high image quality and expandability, the Osmo Pro and Osmo RAW make shots that once needed a crew available to a single operator',
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

    onImageClickHandler = (event) => {
        this.setState({ activeIndex: event.currentTarget.getAttribute('index') });
    }

    renderSlides () {
        const card = this.state.pictures;
        const listItems = card.map((item, index) => {
            return (
                <img src={item} alt=""/>
            )
        });
        return (
            <div className={classes.examplePictures}>
                array={listItems}
            </div>
        );
    }

    render() {
        return (
            <section className={`${classes.ecommerce} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.wrapper}>
                    <div className={`${classes.left} ${classes.section} section`}>
                        <div className={classes.content}>
                            <Fade down triggerOnce={true}>
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
                                    <Select defaultValue="XL" style={{ width: '100%' }} onChange={this.handleChange} placeholder="Choose size" className={`${(this.props.dark) ?  `dark ${classes.dark}` : ''} big `}>
                                        <Option value="L">L</Option>
                                        <Option value="XL">XL</Option>
                                        <Option value="XXL">XXL</Option>
                                    </Select>
                                }
                                link={"some/link"}
                                array={this.state.pictures}
                                dark={this.props.dark ? true : false}
                                click={this.onImageClickHandler}
                            />
                            </Fade>
                            <div className={classes.similar}>
                                <Fade down delay={50} triggerOnce={true}>
                                    <Similar
                                        title="Men's Warm Up Jacket New Collection"
                                        price={64}
                                        link={"./some-link"}
                                    >
                                        <img src={this.props.dark ? placeholderDark : placeholder} alt=""/>
                                    </Similar>
                                </Fade>
                                <Fade down delay={100} triggerOnce={true}>
                                    <Similar
                                        title="Men's Warm Up Jacket New Collection"
                                        price={64}
                                        link={"./some-link"}
                                    >
                                        <img src={this.props.dark ? placeholderDark : placeholder} alt=""/>
                                    </Similar>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div style={
                            {
                                backgroundImage: `url(${this.state.pictures[this.state.activeIndex]})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "100%"
                            }
                        }
                             className={classes.imageElement}
                        >
                            <div className={classes.content}>
                                <img src={this.state.pictures[this.state.activeIndex]} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default EcommerceLayoutsTypeFourth