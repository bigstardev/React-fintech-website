import React,{Component} from 'react';
import 'swiper/css/swiper.min.css'
import classes from "./Slider.module.css"
import Swiper from 'swiper';
import Oval from "../../../../components/Frame/Frame";
import {
    SimpleRightArrow,
    SimpleLeftArrowCustom,
    Group,
    ChevronLeft,
    ChevronRight
} from "../../../../components/Icons/Icons";

class Slider extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let galleryThumbs = new Swiper(`.${classes.galleryThumbs}`,{
            spaceBetween: 10,
            slidesPerView: 4,
            touchRatio: 1,
            freeMode: false,
            watchSlidesVisibility: false,
            watchSlidesProgress: false,
            breakpoints: {
                575: {
                    slidesPerView: 6,
                    spaceBetween: 25,
                    freeMode: false,
                    watchSlidesVisibility: false,
                    watchSlidesProgress: false,
                    touchRatio: 0,
                }
            },
        });

        let galleryTop = new Swiper(`.${classes.galleryTop}`,{
            slidesPerView: 1,
            spaceBetween: 30,
            grabCursor: true,

            navigation: {
                nextEl: `.${classes.swiperButtonNext}`,
                prevEl: `.${classes.swiperButtonPrev}`,
            },
            thumbs: {
                swiper: galleryThumbs
            }
        })
    }
    render(){
        return (
            <>
                <div className={`${classes.slider}  ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={`swiper-container gallery-thumbs ${classes.swiperContainer} ${classes.galleryThumbs}`}>
                        <div className={`swiper-wrapper ${classes.swiperWrapper}`}>
                            {this.props.thumbs.map((el,index)=>{
                                    return (
                                        <>
                                            {el != null ?
                                                <div className={`swiper-slide ${classes.swiperSlide}`} key={index}>
                                                    <img src={el}/>
                                                </div> :
                                                <div className={`swiper-slide blue ${classes.swiperSlide} ${classes.blue}`} key={index}>
                                                    <Group fill="#ffffff"/>
                                                </div>
                                            }
                                        </>
                                    )
                                }
                            )}
                        </div>
                    </div>
                    <div className={classes.buttons}>
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
                    <div className={`swiper-container gallery-top  ${classes.swiperContainer} ${classes.galleryTop}`}>
                        <div className={`swiper-wrapper ${classes.swiperWrapper}`}>
                            {this.props.array.map((el,index)=>{
                                return(
                                    <div className={`swiper-slide ${classes.swiperSlide}`} key={index}>
                                        {el}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Slider;