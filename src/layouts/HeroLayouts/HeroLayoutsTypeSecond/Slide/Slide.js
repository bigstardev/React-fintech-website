import React from "react";
import classes from "./Slide.module.css"

const Slide = (props) => {
    return (
        <div className={`swiper-slide ${classes.swiperSlide}`}>
            {props.children}
        </div>
    )
}

export default Slide