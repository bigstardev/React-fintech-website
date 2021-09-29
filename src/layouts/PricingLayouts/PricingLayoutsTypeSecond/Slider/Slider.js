import React,{Component} from 'react';
import 'swiper/css/swiper.min.css'
import classes from "./Slider.module.css"
import Swiper from 'swiper';

import $ from "jquery";

let pricingSecondSlider = null;
let mediaQuerySize = 575;

class Slider extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {

        $(window).on('load resize', function () {
            let windowWidth = $(this).innerWidth();
            if (windowWidth <= mediaQuerySize) {
                if (!pricingSecondSlider ) {
                    pricingSecondSlider  = new Swiper(`.${classes.swiperContainer}`,{
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
                if (pricingSecondSlider) {
                    pricingSecondSlider.destroy(true, true);
                    pricingSecondSlider.update();
                    pricingSecondSlider  = null;
                }
            }
        });
    }

    render() {

        return (
                <div className={`${classes.slider}  ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.swiperContainer}>
                        <div className={`swiper-wrapper  d-flex ${classes.swiperWrapper}`}>
                            {this.props.array.map((el,index)=>{
                                return(
                                    <div className={`swiper-slide col-lg-4 col-md-4 ${classes.swiperSlide}`} key={index}>
                                        {el}
                                    </div>
                                )
                            })}
                        </div>
                        <div className={`swiper-pagination ${classes.swiperPagination}`}></div>
                    </div>
                </div>
        );
    }
}

export default Slider;
