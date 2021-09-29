import React,{Component} from 'react';
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper';
import {Col} from "reactstrap";
import classes from "./Slider.module.css"

let portfolioSeventhSlider = null;

class Slider extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        portfolioSeventhSlider = new Swiper(`.${classes.swiperContainer}`,{
            direction: getDirection(),
            centeredSlides: false,
            slidesPerView: 1,
            spaceBetween: 0,
            initialSlide: 1,
            grabCursor: true,
            breakpoints: {
                575: {
                    slidesPerView: 2,
                    centeredSlides: true,
                    spaceBetween: 30,
                }
            },
            pagination: {
                el: `.${classes.swiperPagination}`,
                clickable: true,
            },
            on: {
                resize: function () {
                    portfolioSeventhSlider.changeDirection(getDirection());
                },
                load: function () {
                    portfolioSeventhSlider.changeDirection(getDirection());
                }
            }


        })

        function getDirection() {
            let windowWidth = window.innerWidth;
            let direction = window.innerWidth <= 768 ? 'horizontal' : 'vertical';

            return direction;
        }


    }
    render(){
        return (
            <Col className="p-0">
                <div className={`${classes.slider}  ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.swiperContainer}>
                        <div className={`swiper-wrapper ${classes.swiperWrapper}`}>
                            {this.props.array.map((el,index)=>{
                                return(
                                    <div className={`swiper-slide ${classes.swiperSlide}`} key={index}>
                                        <img
                                            src={el}
                                            alt=""
                                        />
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