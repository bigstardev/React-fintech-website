import React,{Component} from 'react';
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper';

import $ from "jquery";
import classes from "./Slider.module.css"

let featuresNineteenSlider = null;
let mediaQuerySize = 575;

class Slider extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {

        $(window).on('load resize', function () {
            let windowWidth = $(this).innerWidth();
            if (windowWidth <= mediaQuerySize) {
                if (!featuresNineteenSlider) {
                    featuresNineteenSlider = new Swiper(`.${classes.swiperContainer}`,{
                        slidesPerView: 1,
                        spaceBetween: 30,
                        initialSlide: 1,
                        pagination: {
                            el: `.${classes.swiperPagination}`,
                            clickable: true,
                        },
                        centeredSlides: true
                    });
                }
            } else {
                if (featuresNineteenSlider) {
                    featuresNineteenSlider.destroy(true, true);
                    featuresNineteenSlider.update();
                    featuresNineteenSlider = null;
                }
            }
        });
    }

    render() {

        return (

            <div className={classes.slider}>
                <div className={classes.swiperContainer}>
                    <div className={`swiper-wrapper  d-flex flex-wrap  ${classes.swiperWrapper}`}>
                        {this.props.children}
                    </div>
                    <div className={`swiper-pagination ${classes.swiperPagination}`}></div>
                </div>
            </div>
        );
    }
}

export default Slider;