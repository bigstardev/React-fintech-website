import React from "react";

import {Container} from "reactstrap";
import Slider from "./Slider/Slider";
import Slide from "./Slide/Slide";

import lightMockup from "../../../img/IpadPro.png";
import darkMockup from "../../../img/IpadPro-dark.png";
import classes from "./FeaturesLayoutsTypeEighteen.module.css"

function FeaturesLayoutsTypeEighteen (props) {

    return (
        <React.Fragment>
            <section className={`section ${classes.features} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>

                <Container className={classes.firstContainer}>
                    <Slider>
                        <Slide>
                            <h1 className="text-center">The professional publishing platform. Method.</h1>
                            <p className={`normal-text text-center ${classes.description}`}>Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!</p>
                            <div className={classes.imageContainer}>
                                <img className={classes.image} src={ props.dark ? darkMockup : lightMockup} alt=""/>
                            </div>
                        </Slide>
                        <Slide>
                            <h1 className="text-center">The professional publishing platform. Method.</h1>
                            <p className={`normal-text ${classes.description} text-center`}>Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!</p>
                            <div className={classes.imageContainer}>
                                <img className={classes.image} src={ props.dark ? darkMockup : lightMockup} alt=""/>
                            </div>
                        </Slide>
                        <Slide>
                            <h1 className="text-center">The professional publishing platform. Method.</h1>
                            <p className={`normal-text ${classes.description} text-center`}>Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!</p>
                            <div className={classes.imageContainer}>
                                <img className={classes.image} src={ props.dark ? darkMockup : lightMockup} alt=""/>
                            </div>
                        </Slide>
                        <Slide>
                            <h1 className="text-center">The professional publishing platform. Method.</h1>
                            <p className={`normal-text ${classes.description} text-center`}>Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!</p>
                            <div className={classes.imageContainer}>
                                <img className={classes.image} src={ props.dark ? darkMockup : lightMockup} alt=""/>
                            </div>
                        </Slide>
                    </Slider>
                </Container>
            </section>
        </React.Fragment>
    )
}
export default FeaturesLayoutsTypeEighteen