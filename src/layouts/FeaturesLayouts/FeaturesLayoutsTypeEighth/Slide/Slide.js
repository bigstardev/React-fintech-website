import React from "react";

const Slide = (props) => {
    return (
        <div className="swiper-slide col-lg-4 col-md-12 col-sm-12 col-xs-12">
            {props.children}
        </div>
    )
}

export default Slide
