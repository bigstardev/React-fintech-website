import React,{Component} from 'react';
import 'swiper/css/swiper.min.css'
import classes from './Slider.module.css';
import Swiper from 'swiper';

import $ from "jquery";

let featuresEighthSlider = null;
let mediaQuerySize = 575;


class Slider extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){

        $(window).on('load resize', function () {
            let windowWidth = $(this).innerWidth();
            if (windowWidth <= mediaQuerySize) {
                if (!featuresEighthSlider) {
                    featuresEighthSlider = new Swiper(`.${classes.swiperContainer}`,{
                        slidesPerView: 1,
                        spaceBetween: 30,
                        centeredSlides: false,
                        initialSlide: 1,
                        grabCursor: true,

                        pagination: {
                            el: `.${classes.swiperPagination}`,
                            clickable: true,
                        },
                    });
                }
            } else {
                if (featuresEighthSlider) {
                    featuresEighthSlider.destroy(true, true);
                    featuresEighthSlider.update();
                    featuresEighthSlider = null;
                }
            }
        });

    }

    render() {

        return (

            <div className={classes.slider}>
                <div className={classes.swiperContainer}>
                    <div className={`swiper-wrapper d-flex flex-wrap ${classes.swiperWrapper}`}>
                        {this.props.children}
                    </div>
                    <div className={`swiper-pagination ${classes.swiperPagination}`}>

                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;