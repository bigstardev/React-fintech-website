import React,{Component} from 'react';
import 'swiper/css/swiper.min.css'
import classes from "./Slider.module.css"
import Swiper from 'swiper';
import {Col} from "reactstrap";



class Slider extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){

        this.swiper = new Swiper(`.${classes.swiperContainer}`,{
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            initialSlide: 1,
            autoHeight: false,
            grabCursor: true,
            breakpoints: {
                575: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    grabCursor: true,
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
            <Col className="p-0">
                <div className={`${classes.slider}  ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`} id={'root'}>
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
            </Col>
        );
    }
}

export default Slider;