import React from "react";

const Slide = (props) => {
    return (
        <div className="swiper-slide col-lg-6 ">
            {props.children}
        </div>
    )
}

export default Slide
