import React, { Component } from 'react';
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper';
import { Col } from "reactstrap";
import Oval from "../../../../components/Frame/Frame";
import { ChevronRight, ChevronLeft } from "../../../../components/Icons/Icons";
import classes from "./Slider.module.css"

class Slider extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.swiper = new Swiper(`.${classes.swiperContainer}`, {
            slidesPerView: 1,
            spaceBetween: 30,
            initialSlide: 1,
            grabCursor: true,
            navigation: {
                nextEl: `.${classes.swiperButtonNext}`,
                prevEl: `.${classes.swiperButtonPrev}`,
            },
            breakpoints: {
                768: {
                    slidesPerView: 4,
                },
                575: {
                    slidesPerView: 2,
                },
            },
        })
    }
    render() {
        return (
            <Col className="p-0">
                <div className={`${classes.slider} ${(this.props.dark) ? `${classes.dark}` : ''}`}>
                    <div className={classes.swiperContainer}>
                        <div className={`swiper-wrapper ${classes.swiperWrapper}`}>
                            {this.props.children}
                        </div>
                        <div className={`swiper-button-next ${classes.swiperButtonNext}`}>
                            <Oval
                                variant={"small"}
                            >
                                <ChevronRight />
                            </Oval>
                        </div>
                        <div className={`swiper-button-prev ${classes.swiperButtonPrev}`}>
                            <Oval
                                variant={"small"}
                            >
                                <ChevronLeft />
                            </Oval>
                        </div>
                    </div>
                </div>
            </Col>
        );
    }
}

export default Slider;