import React,{Component} from 'react';
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper';
import classes from "./Slider.module.css"
import {v4 as uuidv4} from "uuid";

class Slider extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.swiper=new Swiper(`.${classes.swiperContainer}`,{
            slidesPerView: 1,
            spaceBetween: 30,
            grabCursor: true,
            scrollbar: {
                el: `.${classes.swiperScrollbar}`,
                hide: false,
                draggable: true,
                dragSize: '120px',
            },
            breakpoints: {
                991: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                557: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    scrollbar: {
                        dragSize: '160px',
                    },
                }
            },
        })
    }
    render(){
        return (
            <div className={`${classes.slider}  ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}  key={uuidv4()}>
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
                    <div className={`swiper-scrollbar ${classes.swiperScrollbar}`}></div>

                </div>
            </div>
        );

    }
}

export default Slider;