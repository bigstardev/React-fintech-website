import React from "react";
import './Stars.css';

import {Star, StarBorder} from "../Icons/Icons";

function StarsList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) =>
        <li key={index}>{number}</li>
    );
    return (
        <ul className="Stars-list">{listItems}</ul>
    );
}

const Stars = (props) => {
    const number = parseInt(props.count, 10);
    let array;
    {(props.solid) ? array = new Array(number).fill(<Star fill={props.color}/>, 0).fill(<StarBorder/>, props.count- props.solid) : array = new Array(number).fill(<Star fill={props.color}/>, 0)}
    return (
        <div className={'Stars'}>
            <StarsList
                numbers={array}
            />
        </div>
    )
}

export default Stars