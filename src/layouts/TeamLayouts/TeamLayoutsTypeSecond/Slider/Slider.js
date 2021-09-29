import React,{Component} from 'react';
import 'swiper/css/swiper.min.css'
import classes from './Slider.module.css';
import Swiper from 'swiper';

import $ from "jquery";

let teamSecondSlider = null;
let mediaQuerySize = 575;

class Slider extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {

        $(window).on('load resize', function () {
            let windowWidth = $(this).innerWidth();
            if (windowWidth <= mediaQuerySize) {
                if (!teamSecondSlider) {
                    teamSecondSlider = new Swiper(`.${classes.swiperContainer}`,{
                        slidesPerView: 1,
                        spaceBetween: 30,
                        initialSlide: 1,
                        grabCursor: true,
                        pagination: {
                            el: `.${classes.swiperPagination}`,
                            clickable: true,
                        },
                        centeredSlides: true,
                        breakpoints: {
                            350: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                                grabCursor: true,
                            }
                        },
                    });
                }
            } else {
                if (teamSecondSlider) {
                    teamSecondSlider.destroy(true, true);
                    teamSecondSlider.update();
                    teamSecondSlider = null;
                }
            }
        });
    }

    render() {

        return (

            <div className={classes.swiperContainer}>
                <div className={`swiper-wrapper  d-flex flex-wrap ${classes.swiperWrapper}`}>
                    {this.props.array.map((el,index)=>{
                        return(
                            <div className={`swiper-slide col-lg-3 col-md-6 col-sm-6 ${classes.swiperSlide}`} key={index}>
                                {el}
                            </div>
                        )
                    })}
                </div>
                <div className={`swiper-pagination ${classes.swiperPagination}`}></div>
            </div>
        );
    }
}

export default Slider;