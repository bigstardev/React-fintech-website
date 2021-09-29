import React from "react";
import classes from "./MemberTypeEighth.module.css"

const MemberTypeEighth = (props) => {

    return (
        <div className={classes.member}>
            <a href={props.link} className={classes.link}>
                {props.avatar}
            </a>
            <a href={props.link} className={classes.link}>
                <h3 className={`title text-center ${classes.title}`}>{props.person}</h3>
            </a>
            <p className={`normal-text text-center ${classes.description}`}>{props.post}</p>
        </div>
    )
}
export default MemberTypeEighth