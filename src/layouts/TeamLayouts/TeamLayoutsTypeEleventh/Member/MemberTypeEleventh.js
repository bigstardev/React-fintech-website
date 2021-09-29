import React from "react";
import classes from "./MemberTypeEleventh.module.css"
const MemberTypeEleventh = (props) => {

    return (
        <div className={classes.member}>
          <h1>{props.name}</h1>
            <h3 className={`title ${classes.title}`}>{props.post}</h3>
            <p className={`normal-text ${classes.description}`}>{props.description}</p>

            <div className={classes.socials}>
                {props.socials}
            </div>
        </div>
    )
}
export default MemberTypeEleventh