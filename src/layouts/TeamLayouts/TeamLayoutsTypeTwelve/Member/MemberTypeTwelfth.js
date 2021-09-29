import React from "react";
import classes from "./MemberTypeTwelfth.module.css"

const MemberTypeTwelfth = (props) => {

    return (
        <div className={`${classes.member}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={`top-level content ${classes.topLevel} ${classes.content}`}>
                <p className={`normal-text ${classes.description}`}>{props.description}</p>
            </div>

            <div className={classes.bottomLevel}>
                {props.avatar}
                <h3 className={`title content ${classes.title} ${classes.content}`}>{props.person}</h3>
                <p className={`normal-text post content ${classes.post} ${classes.content}`}>{props.post}</p>
            </div>
            <div className={`socials content ${classes.socials} ${classes.content}`}>
                {props.socials}
            </div>
        </div>
    )
}
export default MemberTypeTwelfth