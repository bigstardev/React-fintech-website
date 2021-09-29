import React from "react";

import Divider from "../../../../components/Divider/Divider";
import SimpleRating from "../../../../components/SimpleRating/SimpleRating";
import SmallBadge from "../../../../components/SmallBadge/SmallBadge";
import classes from "./EcommerceTypeSecond.module.css"

const shortDescription = "Free Shipping";

const EcommerceTypeSecond = (props) => {
    return (
        <React.Fragment>
            <div className={`${classes.ecommerce}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>

                <div className={classes.gridWrapper}>
                    <div className={classes.rightColumn}>
                        <div className={classes.first}>
                            <div className={classes.topLevel}>
                                <SmallBadge
                                >
                                    {props.badgeText}
                                </SmallBadge>
                                <SimpleRating
                                    color="primary"
                                    value={props.rating}
                                />
                            </div>
                            <div className={classes.middleLevel}>
                                <h2>{props.title}</h2>
                            </div>
                            <div className={`${classes.bottomLevel} normal-text`}>
                                {props.description}
                            </div>
                            <Divider/>
                        </div>
                        <div className={classes.second}>
                            {props.firstList}
                            {props.secondList}
                            <Divider/>
                        </div>
                        <div className={classes.third}>
                            <div className={classes.topLevel}>
                                <div className={classes.wrapper}>
                                    <div className={classes.price}>
                                        ${Number(props.price).toFixed(2)}
                                    </div>
                                    <div className={`${classes.shortDescription} ${classes.smallText} small-Text`}>
                                        {shortDescription}
                                    </div>
                                </div>
                            </div>
                            <div className={classes.middleLevel}>
                                <div className={classes.wrapper}>
                                    {props.firstButton}
                                    {props.secondButton}
                                </div>
                            </div>
                            <div className={`${classes.bottomLevel} ${classes.smallText} small-text`}>
                                {props.promo}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EcommerceTypeSecond