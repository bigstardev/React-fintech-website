import React from "react";
import classes from "./MemberTypeFifth.module.css"
import Divider from "../../../../components/Divider/Divider";

const MemberTypeFifth = (props) => {

    return (
        <div className={classes.member}>
            <a href={props.link} className={classes.link}>
                <div className={classes.inner}>
                    <h3 className={`text-left title ${classes.title}`}>{props.post}</h3>
                    <div className={classes.divider}>
                        <Divider/>
                    </div>
                    <p className={`normal-text text-left ${classes.description}`}>{props.description}</p>
                    <footer className={`footer d-flex ${classes.footer}`}>
                        {props.children}
                        <p className={`bold-text person ${classes.boldText} ${classes.person}`}>{props.person}</p>
                    </footer>
                </div>
            </a>
        </div>
    )
}

export default MemberTypeFifth