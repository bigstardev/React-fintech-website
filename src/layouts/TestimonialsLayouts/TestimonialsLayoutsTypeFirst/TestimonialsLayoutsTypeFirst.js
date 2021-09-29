import React, {Component} from "react";

import {Container, Col , Row} from "reactstrap";
import Testimonial from "./Testimonial/TestimonialsTypeFirst";
import 'swiper/css/swiper.min.css'
import {Avatar} from "antd";
import {User} from "../../../components/Icons/Icons";
import classes from "./TestimonialsLayoutsTypeFirst.module.css"
import {Fade} from "react-awesome-reveal";
import Swiper from 'swiper';
import Slider from "../TestimonialsLayoutsTypeFirst/Slider/Slider";
const titleText = 'What People Are Saying';
const strongText = "Testimonials";


class TestimonialsLayoutsTypeFirst  extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        currentPerson: 0,
        messages: [
            {
                name: 'Dany Monson',
                post: 'Director of Materials Management',
                title: 'My company culture has changed',
                description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc.',
                avatar: null,
                link: './some-link'

            },
            {
                name: 'David Mourinho',
                post: 'Director of Materials Management',
                title: 'My company culture has changed',
                description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc.',
                avatar: null,
                link: './some-link'
            },
            {
                name: 'Dima Grinchenko',
                post: 'Front End Developer',
                title: 'My company culture has changed',
                description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc.',
                avatar: null,
                link: './some-link'
            },
            {
                name: 'Polly Clark',
                post: 'Manager',
                title: 'My company culture has changed',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                avatar: null,
                link: './some-link'
            },
            {
                name: 'Markus Johnson',
                post: 'Front End Engineer',
                title: 'My company culture has changed',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                avatar: null,
                link: './some-link'
            },
            {
                name: 'Terry Valdez',
                post: 'Support of Materials Managemen',
                title: 'My company culture has changed',
                description: 'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!',
                avatar: null,
                link: './some-link'
            }
        ]
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

    renderCards () {
        const card = this.state.messages;
        const listItems = card.map((item, index) => {
            return (
                <div  key={index}>
                    <Testimonial
                        title={item.title}
                        descr={item.description}
                        person={item.name}
                        post={item.post}
                        link={item.link}
                    >
                        {item.avatar ?
                            <Avatar
                                size={60}
                                src={item.avatar}
                            />
                            :
                            <Avatar
                                size={60}
                                icon={<User fill={"#ffffff"}/>}
                                style={{
                                    fontSize: 0,
                                    backgroundColor: '#345DEE',
                                }}
                            />
                        }
                    </Testimonial>
                </div>
            )
        });
        return (
            <Slider
                array={listItems}
                dark={this.props.dark ? true : false}
            />
        );
    }

    render() {

        return (

            <React.Fragment>
                <section className={`section ${classes.testimonials} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <Container>
                        <Row>
                            <Col lg="8" md="8" className="mx-auto d-flex flex-column align-items-center">
                                <Fade top triggerOnce={true}>
                                    <strong style={{display: 'block'}}>{strongText}</strong>
                                </Fade>
                                <Fade top delay={50} triggerOnce={true}>
                                    <h1 className={classes.title}>{titleText}</h1>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid={true} className={classes.container}>
                        <Row>
                            {this.renderCards()}
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        )
    }
}
export default TestimonialsLayoutsTypeFirst