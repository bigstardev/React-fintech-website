import React, { Component } from 'react';
import 'swiper/css/swiper.min.css'
import classes from "./Slider.module.css"
import Swiper from 'swiper';
import { Col } from "reactstrap";
import Button from "../../../../components/Button/Button"

class Slider extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

        this.swiper = new Swiper(`.${classes.swiperContainer}`, {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            initialSlide: 1,
            autoHeight: false,
            grabCursor: true,
            breakpoints: {
                575: {
                    slidesPerView: 1,
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
    render() {
            return ( <
                    Col className = "p-0" >
                    <
                    div className = { `${classes.slider}  ${(this.props.dark) ? `dark ${classes.dark}` : ''}`} id={'root'}>
                <div className={classes.swiperContainer}>
                    <div className={`swiper-wrapper ${classes.swiperWrapper}`}>
                        <div className={`swiper-slide ${classes.swiperSlide}`}>
                            <span className={classes.description}>New Arrivals </span>
                            <div className={classes.title}>Living Room Accessories</div>
                            <div style={{ marginTop: '25px' }}>
                                <Button
                                    href="#"
                                    classes={"neutral large simple outline"}
                                    value="Learn More">
                                </Button>
                            </div>
                        </div>
                        <div className={`swiper-slide ${classes.swiperSlide}`}>
                            <span className={classes.description}>New Arrivals </span>
                            <div className={classes.title}>Living Room Accessories</div>
                            <div style={{ marginTop: '25px' }}>
                                <Button
                                   
                                    href="#"
                                    classes={"neutral large simple outline"}
                                    value="Learn More">
                                </Button>
                            </div>
                        </div>
                        <div className={`swiper-slide ${classes.swiperSlide}`}>
                            <span className={classes.description}>New Arrivals </span>
                            <div className={classes.title}>Living Room Accessories</div>
                            <div style={{ marginTop: '25px' }}>
                                <Button
                                 
                                    href="#"
                                    classes={"neutral large simple outline"}
                                    value="Learn More">
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={`swiper-pagination ${classes.swiperPagination}`}></div>
                </div>
            </div>
        </Col>
        );
    }
}

export default Slider;