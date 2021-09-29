import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "../../../components/Tabs/Tabs";
import Ecommerce from "./Ecommerce/EcommerceTypeSixth";
import placeholder from "../../../img/placeholder-gray.png";
import placeholderDark from "../../../img/placeholder-gray-dark.png";
import classes from "./EcommerceLayoutsTypeSixth.module.css"

import {Fade} from "react-awesome-reveal";
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper';
import Oval from "../../../components/Frame/Frame";
import {ChevronLeft, ChevronRight} from "../../../components/Icons/Icons";

const title = "Running Shoes";

class EcommerceLayoutsTypeSixth extends Component {

    state = {
        activeCategory: 'nike',
        products: [
            {
                title: 'Nike ZoomX',
                description: 'Running Shoe',
                poster: null,
                category: 'nike',
                link: './some-link',
            },
            {
                title: 'Nike Air',
                description: 'Women\'s Running Shoe',
                poster: null,
                category: 'nike',
                link: './some-link',
            },
            {
                title: 'Nike ZoomX',
                description: 'Running Shoe',
                poster: null,
                category: 'nike',
                link: './some-link',
            },
            {
                title: 'Adidas ZoomX',
                description: 'Running Shoe',
                poster: null,
                category: 'adidas',
                link: './some-link',
            },
            {
                title: 'Adidas  Air Zoom',
                description: 'Women\'s Running Shoe',
                poster: null,
                category: 'adidas',
                link: './some-link',
            },
            {
                title: 'Adidas ZoomX',
                description: 'Running Shoe',
                poster: null,
                category: 'adidas',
                link: './some-link',
            },
            {
                title: 'Adidas Air Zoom',
                description: 'Women\'s Running Shoe',
                poster: null,
                category: 'adidas',
                link: './some-link',
            },
            {
                title: 'Puma ZoomX',
                description: 'Running Shoe',
                poster: null,
                category: 'puma',
                link: './some-link',
            },
            {
                title: 'Puma  Air',
                description: 'Women\'s Running Shoe',
                poster: null,
                category: 'puma',
                link: './some-link',
            },
            {
                title: 'Puma ZoomX',
                description: 'Running Shoe',
                poster: null,
                category: 'puma',
                link: './some-link',
            },
            {
                title: 'Puma Air Zoom',
                description: 'Women\'s Running Shoe',
                poster: null,
                category: 'puma',
                link: './some-link',
            },
            {
                title: 'Puma ZoomX',
                description: 'Running Shoe',
                poster: null,
                category: 'puma',
                link: './some-link',
            },
            {
                title: 'Puma Air Zoom',
                description: 'Women\'s Running Shoe',
                poster: null,
                category: 'puma',
                link: './some-link',
            },

        ],
        category: [
            'Nike', 'Adidas', 'Puma',
        ]
    }

    componentDidMount() {

        this.swiper = new Swiper(`.${classes.swiperContainer}`, {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: `.${classes.swiperPagination}`,
                clickable: true,
            },
            breakpoints: {

                575: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            },
            navigation: {
                nextEl: `.${classes.swiperButtonNext}`,
                prevEl: `.${classes.swiperButtonPrev}`,
            },
        })
        this.swiper.update();
        this.swiper.pagination.update();
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        this.swiper.update();
        this.swiper.pagination.update();
    }


    onButtonClickHandler = (event) => {
        event.preventDefault();
        const card = this.state.products;
        const listItems = card.filter((element) => {
                if (element.category == this.state.activeCategory) {
                    return true
                }
            }
        )
        this.setState({postForView: listItems.length});
    }

    onLinksClickHandler = (event) => {
        event.preventDefault();
        const currentValue = event.currentTarget.innerText.toLowerCase().replace(/ /g,"-");
        this.setState({activeCategory: currentValue });
    }

    renderCards () {
        const card = this.state.products;
        const listItems = card.filter((element) => {
                if (element.category == this.state.activeCategory) {
                    return true
                }
            }
        ).map((item, index) => {
            return (
                    <Ecommerce
                        key={index}
                        link={item.link}
                        title={item.title}
                        description={item.description}
                        dark={this.props.dark ? true : false}
                    >
                        {this.props.dark == true ?
                            <>
                                {item.poster ?
                                    <img
                                        src={item.poster}
                                        alt="placeholder"
                                    />
                                    :
                                    <img
                                        src={placeholderDark}
                                        alt="placeholder"
                                    />
                                }
                            </>
                            :
                            <>
                                {item.poster ?
                                    <img
                                        src={item.poster}
                                        alt="placeholder"
                                    />
                                    :
                                    <img
                                        src={placeholder}
                                        alt="placeholder"
                                    />
                                }
                            </>
                        }
                    </Ecommerce>

            )
        });
        return (
            <div className={`${classes.slider}  ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.swiperContainer}>
                    <div className={`swiper-wrapper ${classes.swiperWrapper}`}>
                        {listItems.map((el,index)=>{
                            return(
                                <div className={`swiper-slide ${classes.swiperSlide}`} key={index}>
                                    {el}
                                </div>
                            )
                        })}
                    </div>

                    <div className={` ${classes.swiperButtonNext}`}>
                        <Oval
                            variant={"small"}
                        >
                            <ChevronRight/>
                        </Oval>
                    </div>
                    <div className={` ${classes.swiperButtonPrev}`}>
                        <Oval
                            variant={"small"}
                        >
                            <ChevronLeft/>
                        </Oval>
                    </div>
                </div>
                <div className={`swiper-pagination ${classes.swiperPagination}`}></div>
            </div>
        );
    }

    render() {

        return (
                <section className={`section ${classes.ecommerce} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>

                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row>
                                <Col lg="6" md="6" className={`mx-auto ${classes.headerColumn} text-center`}>
                                    <Fade down triggerOnce={true}>
                                        <h1 className={`title ${classes.title}`}>{title}</h1>
                                    </Fade>
                                </Col>
                            </Row>
                            <Row className={classes.tabsRow}>
                                <Col lg="6" md="6" className="mx-auto d-flex justify-content-center">
                                        <div style={{width: '100%'}}>
                                            <Fade down delay={50} triggerOnce={true}>
                                            <Tabs
                                                array={this.state.category}
                                                onClick={this.onLinksClickHandler}
                                            />
                                            </Fade>
                                        </div>
                                </Col>
                            </Row>
                        </Container>

                        <Container   className={classes.sliderContainer}>
                            <Row>
                                <Col className="p-0">
                                    {this.renderCards()}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
        )
    }
}

export default EcommerceLayoutsTypeSixth
