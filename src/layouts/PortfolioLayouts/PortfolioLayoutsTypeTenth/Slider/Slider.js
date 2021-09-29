import React,{Component} from 'react';
import 'swiper/css/swiper.min.css'
import classes from './Slider.module.css';
import Swiper from 'swiper';


class Slider extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.swiper=new Swiper(`.${classes.swiperContainer}`,{
            slidesPerView: 'auto',
            spaceBetween: 20,
            centeredSlides: true,
            grabCursor: true,
            initialSlide: 2,

            breakpoints: {
                768: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            },

            pagination: {
                el: `.${classes.swiperPagination}`,
                clickable: true,
            },
        })
    }

    render() {

        return (

            <div className={classes.swiperContainer}>
                <div className={`swiper-wrapper ${classes.swiperWrapper}`}>
                    {this.props.array.map((el,index)=>{
                        return(
                            <div className={`swiper-slide ${classes.swiperSlide}`} key={index}>
                                <img
                                    src={el}
                                    width="350"
                                    height="700"
                                    alt=""
                                />
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
