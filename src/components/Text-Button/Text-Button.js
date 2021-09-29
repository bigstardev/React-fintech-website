import React from "react";
import './Text-Button.css';


const TextButton = (props) => {

    return (
        <React.Fragment>
            {props.position === 'right' ?
                <a href={props.link} onClick={props.onClick} className="TextButton d-flex align-items-center">
                    <p className="text">{props.text}</p>
                    <div className="d-inline-block pl-3">
                        {props.children}
                    </div>
                </a>
                : <a href={props.link} onClick={props.onClick} className="TextButton d-flex align-items-center">
                    <div className="d-inline-block pr-2">
                        {props.children}
                    </div>
                    <p className="text">{props.text}</p>
                </a>
            }
        </React.Fragment>
    )
}

export default TextButton