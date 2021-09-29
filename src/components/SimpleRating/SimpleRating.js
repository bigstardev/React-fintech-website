import React from "react";
import "./SimpleRating.css";
import {Star} from "../Icons/Icons";


const SimpleRating = props => {
    const iconColor = props.iconColor || "#18214D";
    const color = props.color || "#EFF2F6";
    const radius = props.radius || "4";
    const textColor = props.textColor || "#18214D";

    return (
        <div
            className={`SimpleRating  ${props.color} ${(props.dark) ?  `dark` : ''}`}
            style={{
                backgroundColor: `${color}`,
                borderRadius: `${radius}px`
            }}
        >
            <Star fill={`${iconColor}`} />
            <p
                className="text d-inline-block"
                style={{
                    color: `${textColor}`,
                }}
            >
                {parseFloat(props.value, 10).toFixed(1)}
            </p>
        </div>
    );
};

export default SimpleRating;
