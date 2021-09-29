import React,{Component} from 'react';
import 'swiper/css/swiper.min.css'
import classes from "./Slider.module.css"
import Swiper from 'swiper';
import {Col} from "reactstrap";
import Oval from "../../../../components/Frame/Frame";
import {ChevronLeft, ChevronRight} from "../../../../components/Icons/Icons";



class Slider extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){

        this.swiper = new Swiper(`.${classes.swiperContainer}`,{
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 30,
            initialSlide: 1,
            grabCursor: true,
            loop: true,
            breakpoints: {
                991: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    grabCursor: true,
                    centeredSlides: true,
                    loop: true
                },
            },
            navigation: {
                nextEl: `.${classes.swiperButtonNext}`,
                prevEl: `.${classes.swiperButtonPrev}`,
            },

        })


    }
    render(){
        return (
            <Col className="p-0">
                <div className={`${classes.slider}  ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`} id={'root'}>
                    <div className={classes.swiperContainer}>
                        <div className={`swiper-wrapper ${classes.swiperWrapper}`}>
                            {this.props.array.map((el,index)=>{
                                return(
                                    <div className={`swiper-slide ${classes.swiperSlide}`} key={index}>
                                       <img src={el} />
                                    </div>
                                )
                            })}
                        </div>
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
            </Col>
        );
    }
}

export default Slider;