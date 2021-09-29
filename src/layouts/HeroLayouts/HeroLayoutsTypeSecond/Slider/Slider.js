import React,{Component} from 'react';
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper';
import classes from "./Slider.module.css"

let portfolioSeventhSlider = null;


class Slider extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        portfolioSeventhSlider = new Swiper(`.${classes.swiperContainer}`,{
            direction: getDirection(),
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 30,
            initialSlide: 1,
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
            let direction = window.innerWidth <= 600 ? 'horizontal' : 'vertical';

            return direction;
        }


    }
    render(){
        return (
                <div className={`${classes.slider}  ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.swiperContainer}>
                        <div className={`swiper-wrapper ${classes.swiperWrapper}`}>
                            {this.props.children}
                        </div>
                        <div className={`swiper-pagination ${classes.swiperPagination}`}></div>
                    </div>
                </div>
        );
    }
}

export default Slider;
