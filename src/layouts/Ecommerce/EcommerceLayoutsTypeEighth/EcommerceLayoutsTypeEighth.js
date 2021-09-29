import React, {Component} from "react";
import {Container, Col, Row} from "reactstrap";

import placeholder from "../../../img/example.png";
import Aside from "./Aside/Aside";
import {Select} from "antd";
import {Nike} from "../../../components/Icons/Icons";
import {Fade} from "react-awesome-reveal";
import classes from "./EcommerceLayoutsTypeEighth.module.css"
const { Option } = Select;

class EcommerceLayoutsTypeEighth extends Component{

    state = {
        activeIndex: 0,
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
        ],
        brand: <Nike/>
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


    renderPictures () {
        const card = this.state.pictures;
        const listItems = card.map((item, index) => {
            return (
                <div
                    onClick={this.onImageClickHandler}
                    style={{cursor: "pointer"}}
                    key={index}
                    index={index}>
                    <img src={item} alt="" />
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
           <div className={classes.wrapper}>
               <section className={`${classes.ecommerce} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                       <Container>
                           <div className={classes.wrapper}>
                               <div className={classes.leftColumn}>
                                   {this.renderPictures()}
                               </div>

                               <div className={classes.middleColumn}>
                                   <img src={this.state.pictures[this.state.activeIndex]} alt=""/>
                               </div>

                               <div className={classes.rightColumn}>
                                   <Fade delay={100} triggerOnce={true}>
                                       <Aside
                                           badge="New"
                                           brand={this.state.brand}
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
                               </div>
                           </div>
                       </Container>
               </section>
           </div>

        )
    }

}

export default EcommerceLayoutsTypeEighth