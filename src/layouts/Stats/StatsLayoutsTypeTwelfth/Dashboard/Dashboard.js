import React from "react";
import classes from "./Dashboard.module.css"
import {Line} from "react-chartjs-2";
import {v4 as uuidv4} from "uuid";
import {ArrowDown, ArrowUp} from "../../../../components/Icons/Icons";

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const findDiff = (a,b) => {
    return (((b - a)/(a))*100).toFixed(2) * -1
}

const Dashboard = (props) => {
    const {data, options, title} = props;
    const currentPeriod = data.datasets[0].data.reduce(reducer);
    const prevPeriod = data.datasets[0].prevPeriod.reduce(reducer);

    return (
        <div className={`${classes.dashboard} ${(props.dark) ? `${classes.dark}` : ''}`}>
            <h3 className={classes.statTitle}>
                {title}
            </h3>
            <Line
                key={uuidv4()}
                data={data}
                options={options}
            />
            <div className={classes.calculate}>
                <span className={classes.total}>
                    {currentPeriod}
                </span>

                {currentPeriod > prevPeriod ?
                    (
                        <span className={`${classes.percent} ${classes.positive}`}>
                            <ArrowUp fill="#345DEE" />
                            {findDiff(currentPeriod, prevPeriod)}%
                        </span>
                    ):
                    (
                        <span className={`${classes.percent} ${classes.negative}`}>
                            <ArrowDown fill="#EE3465"/>
                            {findDiff(currentPeriod, prevPeriod)}%
                        </span>
                    )
                }
            </div>
        </div>
    )
}

export default Dashboard
