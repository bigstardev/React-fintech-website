import React from "react";

const Slide = (props) => {
    return (
        <div className="swiper-slide">
            {props.children}
        </div>
    )
}

export default Slide
