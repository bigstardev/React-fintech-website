import React, { Component } from "react";
import classes from './Product.module.css';
import { Favorite, FavoriteBorder } from "../../../../components/Icons/Icons";

class Product extends Component {

    constructor(props) {
        super(props);

        this.state = {
            liked: true
        }
    }

    likesHandler = () => {
        this.setState({ liked: !this.state.liked });
    }

    render() {
        const { liked } = this.state;

        return (
            <div className={`${classes.product}  ${(this.props.dark) ? `dark ${classes.dark}` : ''}`}>
                <div className={classes.wrapper}>
                    <a href={this.props.link} className={classes.link}>
                        <img className={classes.cover} src={this.props.cover} alt="" />
                    </a>
                    <a href={this.props.link} className={classes.link}>
                        <h3 className={classes.title}>
                            {this.props.title}
                        </h3>
                    </a>
                    <p className={classes.description}>
                        ${(+this.props.price).toFixed(2)}
                    </p>
                    <a className={classes.favorite} onClick={this.likesHandler}>
                        {
                            liked ? <Favorite fill="#EE3465" /> : <FavoriteBorder fill="#EE3465" />
                        }
                    </a>
                </div>
            </div>
        )
    }
}

export default Product