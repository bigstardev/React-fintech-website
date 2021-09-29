import React from "react";
import classes from './Aside.module.css';

const delivery = "15.00"

const Aside = (props) => {

    return (
        <div className={`${classes.aside}  ${(props.dark) ? `dark ${classes.dark}` : ''}`}>
            <div className={classes.wrapper}>
                <div className={classes.middle}>
                    <div className={classes.item}>
                        <p className={classes.subtotal}>Subtotal</p>
                        <p className={classes.subtotal}>&#36;{(+props.subtotal).toFixed(2)}</p>
                    </div>
                    <div className={classes.item}>
                        <p>Estimated Delivery</p>
                        {+props.subtotal  &&
                            <p>&#36;{(+delivery).toFixed(2)}</p>
                        }
                    </div>
                </div>
                <div className={classes.bottom}>
                    {(+props.subtotal) + (+delivery) > +delivery &&
                    <a className={classes.link}>
                        <span>${((+props.subtotal) + (+delivery)).toFixed(2)}</span>
                        <span>Add to Cart</span>
                    </a>
                    }
                </div>
            </div>
        </div>
    )
}

export default Aside