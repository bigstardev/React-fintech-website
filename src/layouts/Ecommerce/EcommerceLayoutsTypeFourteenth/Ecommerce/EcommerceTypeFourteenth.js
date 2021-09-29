import React from "react";
import SimpleRating from "../../../../components/SimpleRating/SimpleRating";
import SmallBadge from "../../../../components/SmallBadge/SmallBadge";
import classes from "./EcommerceTypeFourteenth.module.css"

const EcommerceTypeFourteenth = (props) => {

    return (
        <div className={`${classes.ecommerce}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <a href={props.link}>
                <div className={classes.wrapper} style={{backgroundImage: `url(${props.poster})`}}>
                    <div className={classes.top}>
                        <SimpleRating
                            dark={props.dark ? true : false}
                            value={props.rating}
                            color="#ffffff"
                        />
                        <SmallBadge>SALE</SmallBadge>
                    </div>

                    <div className={classes.bottom}>
                        <h3 className={classes.title}>{props.title}</h3>
                        <div className={classes.price}>${props.price}</div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default EcommerceTypeFourteenth