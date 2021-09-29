import React from "react";
import "./Frame.css";

const Frame = (props) => {
    return (
        <div
            className={`Frame ${props.shape} ${props.color} ${props.variant}`}
            style={{
                width: `${props.size}px`,
                height: `${props.size}px`,
                backgroundColor: `${props.color}`
            }}
        >
            {props.children}
        </div>
    );
};

export default Frame;
