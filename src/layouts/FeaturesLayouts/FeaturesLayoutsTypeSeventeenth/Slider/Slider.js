import React,{Component} from 'react';
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper';
import classes from "./Slider.module.css"

class Slider extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.swiper=new Swiper(`.${classes.swiperContainer}`,{
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            initialSlide: 2,
            grabCursor: true,

            breakpoints: {
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
                575: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            },
            pagination: {
                el: `.${classes.swiperPagination}`,
                clickable: true,
            },
        })
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
                </div>
            </div>
        );
    }
}

export default Slider;