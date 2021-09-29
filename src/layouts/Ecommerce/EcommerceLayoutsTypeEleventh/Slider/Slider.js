import React,{Component} from 'react';
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper';
import Oval from "../../../../components/Frame/Frame";
import {ChevronRight, ChevronLeft} from "../../../../components/Icons/Icons";
import classes from "./Slider.module.css"

class Slider extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.swiper=new Swiper(`.${classes.swiperContainer}`,{
            slidesPerView: 1,
            spaceBetween: 30,
            grabCursor: true,
            pagination: {
                el: `.${classes.swiperPagination}`,
                clickable: true,
            },
            breakpoints: {

                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                575: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },

            },
            navigation: {
                nextEl: `.${classes.swiperButtonNext}`,
                prevEl: `.${classes.swiperButtonPrev}`,
            },
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.swiper.update();
    }

    render(){
        return (
            <div className={`${classes.slider}  ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
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

                    <div className={`${classes.swiperButtonNext}`}>
                        <Oval
                            variant={"small"}
                        >
                            <ChevronRight/>
                        </Oval>
                    </div>
                    <div className={`${classes.swiperButtonPrev}`}>
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