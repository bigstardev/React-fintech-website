import React from "react";
import classes from './Card.module.css';

const Card = (props) => {
    return (
        <div className={`${classes.card}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={classes.wrapper}>
                <h4 className={classes.title}>{props.title}</h4>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.description}>{props.phone}</p>
                <a onClick={() => props.onDelete(props.id)} className={classes.button}>Delete</a>
            </div>
        </div>
    )
}

export default Card