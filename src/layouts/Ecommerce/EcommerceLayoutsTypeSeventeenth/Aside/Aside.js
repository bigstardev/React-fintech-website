import React from "react";
import classes from './Aside.module.css';

const title = "Total";
const delivery = "15.00"

const Aside = (props) => {

    return (
        <div className={`${classes.aside}  ${(props.dark) ? `dark ${classes.dark}` : ''}`}>
            <div className={classes.wrapper}>
                <div className={classes.top}>
                    <h3>{title}</h3>
                </div>
                <div className={classes.middle}>
                    <div className={classes.item}>
                        <p>Subtotal</p>
                        <p>&#36;{(+props.subtotal).toFixed(2)}</p>
                    </div>
                    <div className={classes.item}>
                        <p>Estimated Delivery</p>
                        {+props.subtotal  &&
                            <span>&#36;{(+delivery).toFixed(2)}</span>
                        }
                    </div>
                </div>
                <div className={classes.bottom}>
                    <div className={classes.total}>
                        <span>Total</span>
                        {+props.subtotal  &&
                            <span>&#36;{((+props.subtotal) + (+delivery)).toFixed(2)}</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aside