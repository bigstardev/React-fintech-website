import React,{Component} from 'react';
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper';

import $ from "jquery";
import {Col} from "reactstrap";
import classes from "./Slider.module.css"

let pricingFifthSlider = null;
let mediaQuerySize = 575;

class Slider extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {

        $(window).on('load resize', function () {
            let windowWidth = $(this).innerWidth();
            if (windowWidth <= mediaQuerySize) {
                if (!pricingFifthSlider ) {
                    pricingFifthSlider  = new Swiper(`.${classes.swiperContainer}`,{
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
                if (pricingFifthSlider) {
                    pricingFifthSlider.destroy(true, true);
                    pricingFifthSlider.update();
                    pricingFifthSlider  = null;
                }
            }
        });
    }

    render() {

        return (
            <Col className="p-0">
                <div className={`${classes.slider}  ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.swiperContainer}>
                        <div className={`swiper-wrapper d-flex ${classes.swiperWrapper}`}>
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
                </div>
            </Col>
        );
    }
}

export default Slider;
