import React, {Component} from "react";
import Ecommerce from "./Ecommerce/EcommerceTypeFirst";
import Slider from "./Slider/Slider";
import classes from "./EcommerceLayoutsTypeFirst.module.css"
import placeholder from "../../../img/placeholder-gray.png";

class EcommerceLayoutsTypeFirst extends Component{
    state = {
        price: 48,
        strong: 'Blazers',
        title : 'Textured Check Blazer',
        rating: 4.5,
        productLink: './some-link',
        activeCategory: 'Description',
        categoryContent: {
            'Description' : 'Blazer with a notched lapel collar, long sleeves and buttoned cuffs. Featuring a chest pocket, flap pockets at the hip, an inside pocket, central back vent and front button fastening.',
            'Characteristics' : 'Blazer with a notched lapel collar, long sleeves and buttoned cuffs. Featuring a chest pocket, flap pockets at the hip, an inside pocket, central back vent and front button fastening.',
            'Shipping' : 'Blazer with a notched lapel collar, long sleeves and buttoned cuffs. Featuring a chest pocket, flap pockets at the hip, an inside pocket, central back vent and front button fastening.'
        },
        category: [
            'Description', 'Characteristics', 'Shipping',
        ],
        pictures: [
            placeholder,
            placeholder,
            placeholder,
            placeholder
        ]

    }

    onLinksClickHandler = (event) => {
        event.preventDefault();
        const currentValue = event.currentTarget.innerText.replace(/ /g,"-");
        this.setState({activeCategory: currentValue });
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
            <section className={`${classes.ecommerce} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <div className={classes.leftColumn}>
                        <div className={classes.wrapper}>
                            <div className={classes.content}>
                                <Ecommerce
                                    dark={this.props.dark ? true : false}
                                    strong={this.state.strong}
                                    title={this.state.title}
                                    rating={this.state.rating}
                                    link={this.state.productLink}
                                    price={this.state.price}
                                    category={this.state.category}
                                    onClick={this.onLinksClickHandler}
                                    content={this.state.categoryContent[this.state.activeCategory]}
                                >

                                </Ecommerce>
                            </div>
                        </div>
                    </div>
                    <div className={classes.rightColumn}>
                        {this.renderSlides()}
                    </div>
                </div>
            </section>
        )
    }

}

export default EcommerceLayoutsTypeFirst