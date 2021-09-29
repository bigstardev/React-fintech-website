import React from "react";
import classes from './Product.module.css';

const Product = (props) => {

    return (
        <div className={`${classes.product}  ${(props.dark) ? `dark ${classes.dark}` : ''}`}>
            <div className={classes.wrapper}>
                <div className={classes.left}>
                    <img className={classes.cover} src={props.cover} alt="" />
                </div>
                <div className={classes.center}>
                    <h3 className={classes.title}>
                        {props.title}
                    </h3>
                    <p className={classes.description}>
                        {props.description}
                    </p>
                    <div className={classes.total}>
                        &#36;{(props.quantity * props.priceForOne).toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product