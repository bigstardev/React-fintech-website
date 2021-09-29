import React,{Component} from 'react';
import 'swiper/css/swiper.min.css'
import  classes from './Slider.module.css';
import Swiper from 'swiper';
import Oval from "../../../../components/Frame/Frame";
import {SimpleRightArrow, SimpleLeftArrowCustom, ChevronRight, ChevronLeft} from "../../../../components/Icons/Icons";


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
            navigation: {
                nextEl: `.${classes.swiperButtonNext}`,
                prevEl: `.${classes.swiperButtonPrev}`,
            },
        })
    }
    render(){
        return (
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
        );
    }
}

export default Slider;