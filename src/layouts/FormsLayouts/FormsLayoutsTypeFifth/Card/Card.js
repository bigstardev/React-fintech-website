import React from "react";
import classes from './Card.module.css';

import {Close} from "../../../../components/Icons/Icons";
import Divider from "../../../../components/Divider/Divider";


const Card = (props) => {

    return (
        <div className={`${classes.card}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={classes.wrapper}>
                <div className={classes.picture}>
                    <a href={props.link} className={classes.pictureLink}>
                        <img
                            className={classes.image}
                            style={{width: "auto"}}
                            width="60"
                            height="60"
                            src={props.image}
                            alt=""
                        />
                    </a>
                </div>
                <div className={classes.price}>
                    <a href={props.link} className={classes.link}>
                        <h4 className={classes.title}>{props.title}</h4>
                    </a>
                    <p className={classes.price}>${props.price}</p>
                </div>
                <div className={classes.closeWrapper}>
                    <a onClick={props.onDelete} className={classes.close}>
                        <Close/>
                    </a>
                </div>
            </div>

            <div className={classes.divider}>
                <Divider/>
            </div>
        </div>
    )
}

export default Card