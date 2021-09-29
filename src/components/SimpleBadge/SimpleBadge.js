import React from "react";
import './SimpleBadge.css';
import Badge from 'react-bootstrap/Badge'

const SimpleBadge = (props) => {
    return (
        <React.Fragment>
            <Badge variant="secondary">{props.value}</Badge>
        </React.Fragment>
    )
}

export default SimpleBadge