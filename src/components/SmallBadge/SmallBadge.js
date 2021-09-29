import React from "react";
import './SmallBadge.css';
import Badge from 'react-bootstrap/Badge'

const SmallBadge = (props) => {
    return (
        <div className="SmallBadge">
            <Badge  className={`SmallBadge ${props.color}`}>
                {props.children}
            </Badge>
        </div>
    )
}

export default SmallBadge