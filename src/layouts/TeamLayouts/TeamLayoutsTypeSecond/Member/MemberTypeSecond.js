import React from "react";
import classes from "./MemberTypeSecond.module.css"
import Divider from "../../../../components/Divider/Divider";

const MemberTypeSecond = (props) => {

    return (
        <div className={`${classes.member} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={classes.inner}>
                {props.avatar}
                <h3 className={`title ${classes.title}`}>{props.person}</h3>
                <p className={`normal-text ${classes.description} ${classes.smallDescription}`}>{props.post}</p>
                <div className={classes.divider}>
                    <Divider/>
                </div>

                <p className={`normal-text ${classes.description}`}>{props.description}</p>

                <div className={classes.socials}>
                    {props.socials}
                </div>
            </div>
        </div>
    )
}

export default MemberTypeSecond