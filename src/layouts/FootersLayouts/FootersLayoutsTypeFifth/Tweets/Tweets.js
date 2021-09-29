import React from "react";
import "./Tweets.css"

const Tweets = (props) => {
    return (
        <div className="Tweets">
            {props.children}
        </div>
    )
}

export default Tweets