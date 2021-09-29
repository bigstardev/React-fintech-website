import React from "react";
import classes from "./Portfolio.module.css"
import Oval from "../../../../components/Frame/Frame";
import {RightArrow} from "../../../../components/Icons/Icons";


const Portfolio = (props) => {

    return (
        <div className={`${classes.portfolio} ${props.custom === true && classes.custom}`}>
            <a href={props.link} className={classes.link}>
                {props.children}
            </a>
            <div className={classes.bottomLevel}>
                <a href={props.link} className={classes.link}>
                    <h3 className={classes.title}>
                        {props.name}
                    </h3>
                </a>
                <a href={props.link} className={classes.arrowLink}>
                    <Oval
                        variant="small"
                    >
                        <RightArrow/>
                    </Oval>
                </a>
            </div>
        </div>
    )
}

export default Portfolio