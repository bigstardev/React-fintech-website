import React from "react";
import BarWithoutTick from "../../../../components/Chart/BarWithoutTick";
import Divider from "../../../../components/Divider/Divider";
import classes from "./Stats.module.css"

const dolar = "$";

const Stats = (props) => {
    return (
        <div className={`${classes.stats}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={classes.outer}>
                <div className={classes.wrapper}>
                    <div className={classes.first}>
                        <div className={classes.header}>{props.storeDescription}</div>
                        <div className={`normal-text ${classes.description}`}>{props.store}</div>
                    </div>
                    <div className={classes.second}>
                        <div className={classes.header}>{props.color}</div>
                        <div className={`normal-text ${classes.description}`}>Color</div>
                    </div>
                    <div className={classes.third}>
                        <div className={classes.header}>{props.capacity}</div>
                        <div className={`normal-text ${classes.description}`}>Capacity</div>
                    </div>
                    <div className={classes.fourth}>
                        <div className={classes.header}>{dolar}{props.price}</div>
                        <div className={`normal-text ${classes.description}`}>Price</div>
                    </div>
                    <div className={classes.fifth}>
                        <BarWithoutTick
                            data={props.data}
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
                <Divider/>
            </div>
        </div>
    )
}

export default Stats