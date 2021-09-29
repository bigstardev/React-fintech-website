import React,{Component} from 'react';
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper';
import {Col} from "reactstrap";
import classes from "./Slider.module.css"

class Slider extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.swiper=new Swiper(`.${classes.swiperContainer}`,{
            slidesPerView: 1,
            spaceBetween: 30,
            initialSlide: 1,
            grabCursor: true,
            pagination: {
                el: `.${classes.swiperPagination}`,
                clickable: true,
            },
        })
    }
    render(){
        return (
            <Col className="p-0">
                <div className={classes.slider}>
                    <div className={classes.swiperContainer}>
                        <div className={`swiper-wrapper ${classes.swiperWrapper}`}>
                            {this.props.children}
                        </div>
                        <div className={`swiper-pagination ${classes.swiperPagination}`}></div>
                    </div>
                </div>
            </Col>
        );
    }
}

export default Slider;