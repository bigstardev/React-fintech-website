import React from "react";
import classes from "./Card.module.css"
import { Fade } from "react-awesome-reveal";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const Card = (props) => {
    const { cover, category, reading, title, description, link, custom } = props;
    const string = capitalizeFirstLetter(category);

    return (
        <div className={`${classes.card} ${(props.dark) ? `dark ${classes.dark}` : ''} ${custom === true && `${classes.custom}`}`}>
            <a className={classes.link} href={link}>
                <img src={cover} alt="" />
            </a>

            <div className={classes.textContent}>
                <div className={classes.header}>
                    <span>{string}</span>
                    <span>{reading} min read</span>
                </div>
                <a className={classes.link} href={link}>
                    <h3 className={classes.title}>
                        {title}
                    </h3>
                </a>
                <p className={classes.description}>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Card