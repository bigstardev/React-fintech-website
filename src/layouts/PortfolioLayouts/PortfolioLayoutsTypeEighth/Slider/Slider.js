import React,{Component} from 'react';
import 'swiper/css/swiper.min.css'
import classes from './Slider.module.css';
import Swiper from 'swiper';
import Oval from "../../../../components/Frame/Frame";
import {ChevronLeft, ChevronRight, SimpleLeftArrowCustom, SimpleRightArrow} from "../../../../components/Icons/Icons";

let portfolioSeventhSlider = null;

class Slider extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        portfolioSeventhSlider = new Swiper(`.${classes.swiperContainer}`,{
            direction: getDirection(),
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 30,
            grabCursor: true,
            initialSlide: 1,
            navigation: {
                nextEl: `.${classes.swiperButtonNext}`,
                prevEl: `.${classes.swiperButtonPrev}`,
            },
            breakpoints: {
                575: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                }
            },
            pagination: {
                el: `.${classes.swiperPagination}`,
                clickable: true,
            },
            on: {
                resize: function () {
                    portfolioSeventhSlider.changeDirection(getDirection());
                },
                load: function () {
                    portfolioSeventhSlider.changeDirection(getDirection());
                }
            }


        })

        function getDirection() {
            let windowWidth = window.innerWidth;
            let direction = window.innerWidth <= 575 ? 'horizontal' : 'vertical';

            return direction;
        }


    }
    render(){
        return (
                <div className={classes.swiperSlider}>
                    <div className={classes.swiperContainer}>
                        <div className={`swiper-wrapper ${classes.swiperWrapper}`}>
                            {this.props.array.map((el,index)=>{
                                return(
                                    <div className={`swiper-slide ${classes.swiperSlide}`} key={index}>
                                        {el}
                                    </div>
                                )
                            })}
                        </div>
                        <div className={`swiper-pagination ${classes.swiperPagination}`}></div>
                        <div className={`swiper-button-next ${classes.swiperButtonNext}`}>
                            <Oval
                                variant={"small"}
                            >
                                <ChevronRight/>
                            </Oval>
                        </div>
                        <div className={`swiper-button-prev ${classes.swiperButtonPrev}`}>
                            <Oval
                                variant={"small"}
                            >
                                <ChevronLeft/>
                            </Oval>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Slider;