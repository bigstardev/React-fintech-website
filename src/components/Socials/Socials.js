import React from "react";
import "./Socials.css"

const Socials = (props) => {
    return (
        <div className={`Socials ${(props.dark) ?  `dark` : ''}`}>
            {props.children}
        </div>
    )
}

export default Socials