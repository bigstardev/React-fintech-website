import React from "react";
import classes from "./MembersTypeFour.module.css"

import Divider from "../../../../components/Divider/Divider";

const MembersTypeFour = (props) => {

    return (
        <div className={classes.member}>
                <p className={`normal-text ${classes.description} ${classes.smallDescription}`}>{props.post}</p>
                <h3 className={`title ${classes.title}`}>{props.person}</h3>
                <div className={classes.divider}>
                    <Divider/>
                </div>

                    <p className={`normal-text ${classes.description}`}>{props.description}</p>

                <div className={classes.socials}>
                    {props.socials}
                </div>
        </div>
    )
}

export default MembersTypeFour