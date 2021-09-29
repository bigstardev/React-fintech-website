import React,{Component} from 'react';
import 'swiper/css/swiper.min.css'
import classes from './Slider.module.css';
import Swiper from 'swiper';

import $ from "jquery";

let teamThirdSlider = null;
let mediaQuerySize = 575;

class Slider extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {

        $(window).on('load resize', function () {
            let windowWidth = $(this).innerWidth();
            if (windowWidth <= mediaQuerySize) {
                if (!teamThirdSlider) {
                    teamThirdSlider = new Swiper(`.${classes.swiperContainer}`,{
                        slidesPerView: 'auto',
                        freeMode: true,
                        spaceBetween: 0,
                        initialSlide: 0,
                        pagination: {
                            el: `.${classes.swiperPagination}`,
                            clickable: true,
                        },
                    });
                }
            } else {
                if (teamThirdSlider) {
                    teamThirdSlider.destroy(true, true);
                    teamThirdSlider.update();
                    teamThirdSlider = null;
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