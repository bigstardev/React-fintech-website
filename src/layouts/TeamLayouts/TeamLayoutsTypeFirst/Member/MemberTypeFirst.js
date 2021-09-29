import React from "react";
import classes from "./MemberTypeFirst.module.css"


const MemberTypeFirst = (props) => {
    return (
        <div className={`${classes.member}`}>
            <a href={props.link}>
                {props.children}
                <h3 className={`title ${classes.title}`}>{props.person}</h3>
                <p className={`normal-text ${classes.description}`}>{props.post}</p>
            </a>
        </div>
    )
}

export default MemberTypeFirst