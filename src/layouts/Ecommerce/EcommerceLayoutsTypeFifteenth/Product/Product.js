import React from "react";
import classes from './Product.module.css';
import InputPage from "../../../../components/InputPage/InputPage";
import { Close } from "../../../../components/Icons/Icons";

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
                    <InputPage
                        value={props.quantity}
                        decrease={() => props.decrease(props.index)}
                        increase={() => props.increase(props.index)}
                        classes="big"
                    />
                    <div className={classes.hide}>
                        &#36;{(props.quantity * props.priceForOne).toFixed(2)}
                    </div>
                </div>
                <div className={classes.right}>
                    <span className={classes.close} onClick={() => props.onDelete(props.index)}>
                        <Close fill="#3E4462"/>
                    </span>
                    <div className={classes.total}>
                        &#36;{(props.quantity * props.priceForOne).toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product