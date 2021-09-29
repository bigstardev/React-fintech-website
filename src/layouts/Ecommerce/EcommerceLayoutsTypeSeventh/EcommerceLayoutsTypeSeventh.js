import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "../../../components/Tabs/Tabs";
import Ecommerce from "./Ecommerce/EcommerceTypeSeventh";
import 'swiper/css/swiper.min.css'

import pictureDark from "../../../img/placeholder-gray-dark.png";
import picture from "../../../img/placeholder-gray.png";
import {Fade} from "react-awesome-reveal";
import classes from "./EcommerceLayoutsTypeSeventh.module.css"
import Swiper from "swiper";

const title = "Running Shoes";
class EcommerceLayoutsTypeSeventh extends Component {

    state = {
        activeCategory: 'nike',
        array:[],
        products: [
            {
                title: 'Nike Air Zoom Pegasus 36 Premium Rise',
                price: '130',
                poster: null,
                category: 'nike',
                link: './some-link',
            },
            {
                title: 'Nike Air Zoom Pegasus 36 Premium Rise',
                price: '130',
                poster: null,
                category: 'nike',
                link: './some-link',
            },
            {
                title: 'Nike Air Zoom Pegasus 36 Premium Rise',
                price: '130',
                poster: null,
                category: 'nike',
                link: './some-link',
            },
            {
                title: 'Nike Air Zoom Pegasus 36 Premium Rise',
                price: '130',
                poster: null,
                category: 'nike',
                link: './some-link',
            },
            {
                title: 'Adidas ZoomX Vaporfly NEXT',
                price: '250',
                poster: null,
                category: 'adidas',
                link: './some-link',
            },
            {
                title: 'Adidas  Air Zoom Pegasus 36 Premium Rise',
                price: '350',
                poster: null,
                category: 'adidas',
                link: './some-link',
            },
            {
                title: 'Adidas ZoomX Vaporfly NEXT',
                price: '150',
                poster: null,
                category: 'adidas',
                link: './some-link',
            },
            {
                title: 'Adidas Air Zoom Pegasus 36 Premium Rise',
                price: '250',
                poster: null,
                category: 'adidas',
                link: './some-link',
            },
            {
                title: 'Puma ZoomX Vaporfly NEXT',
                price: '450',
                poster: null,
                category: 'puma',
                link: './some-link',
            },
            {
                title: 'Puma  Air Zoom Pegasus 36 Premium Rise',
                price: '150',
                poster: null,
                category: 'puma',
                link: './some-link',
            },
            {
                title: 'Puma ZoomX Vaporfly NEXT',
                price: '250',
                poster: null,
                category: 'puma',
                link: './some-link',
            },
            {
                title: 'Puma Air Zoom Pegasus 36 Premium Rise',
                price: '150',
                poster: null,
                category: 'puma',
                link: './some-link',
            },
            {
                title: 'Puma ZoomX Vaporfly NEXT',
                price: '450',
                poster: null,
                category: 'puma',
                link: './some-link',
            },
            {
                title: 'Puma  Air Zoom Pegasus 36 Premium Rise',
                price: '150',
                poster: null,
                category: 'puma',
                link: './some-link',
            },
            {
                title: 'Puma ZoomX Vaporfly NEXT',
                price: '250',
                poster: null,
                category: 'puma',
                link: './some-link',
            },
            {
                title: 'Puma Air Zoom Pegasus 36 Premium Rise',
                price: '150',
                poster: null,
                category: 'puma',
                link: './some-link',
            },


        ],
        category: [
            'Nike', 'Adidas', 'Puma',
        ]
    }

    componentDidMount(){
        this.swiper=new Swiper(`.${classes.swiperContainer}`,{
            slidesPerView: 1,
            spaceBetween: 30,
            grabCursor: true,
            pagination: {
                el: `.${classes.swiperPagination}`,
                clickable: true,
            },

            scrollbar: {
                el: `.${classes.swiperScrollbar}`,
                hide: false,
                draggable: true,
                dragSize: '120px',
                snapOnRelease: true,
            },
            breakpoints: {
                991: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                575: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    scrollbar: {
                        dragSize: '160px',
                    },
                }
            },
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.swiper.update();
        this.swiper.scrollbar.updateSize();
    }

    onButtonClickHandler = (event) => {
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
        this.setState({activeCategory: currentValue }, this.swiper.update());
        this.renderCards();
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
                    price={item.price}
                    poster = {
                            <>
                                {item.poster ?
                                    <img
                                        src={item.poster}
                                        alt=""
                                    />
                                    :
                                    <img
                                        src={this.props.dark == true ? pictureDark : picture}
                                        alt="placeholder"
                                    />
                                }
                            </>
                    }
                />
            )
        });
        return (
            <div className={`${classes.slider}  ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`} >
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
                    <div className={`swiper-scrollbar ${classes.swiperScrollbar}`}></div>
                </div>
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
                                    <h1 className={classes.title}>{title}</h1>
                                </Fade>
                            </Col>
                        </Row>
                        <Row className={classes.tabsRow}>
                            <Col lg="6" md="6" className="mx-auto d-flex justify-content-center" >
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

                    <Container fluid="true" style={{overflow: "hidden", position: "relative"}}>
                        <Container className={classes.sliderContainer} >
                            {this.renderCards()}
                        </Container>
                    </Container>
                    </div>
                </section>
        )
    }
}

export default EcommerceLayoutsTypeSeventh
