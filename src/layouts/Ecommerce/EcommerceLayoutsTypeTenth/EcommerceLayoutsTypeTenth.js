import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Ecommerce from "./Ecommerce/EcommerceTypeTenth";
import EcommerceCustom from "./EcommerceCustom/EcommerceTypeTenthCustom";
import classes from "./EcommerceLayoutsTypeTenth.module.css"
import picture from "../../../img/placeholder-gray.png"
import pictureDark from "../../../img/placeholder-gray-dark.png"
import {Fade} from "react-awesome-reveal";

const title= "New Collection";
const strong = "Summer";

class EcommerceLayoutsTypeTenth extends Component {

    render() {

        return (
            <div>
                <section className={`section ${classes.ecommerce} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                        <Container>
                            <Row>
                                <Col lg="8" md="8" className={`mx-auto ${classes.headerColumn} text-center`}>
                                    <Fade down triggerOnce={true}>
                                        <strong style={{display: 'block'}}>{strong}</strong>
                                    </Fade>
                                    <Fade down delay={50} triggerOnce={true}>
                                        <h1 className={classes.title}>{title}</h1>
                                    </Fade>
                                </Col>
                            </Row>

                            <Row>

                                <div className={classes.gridWrapper}>
                                    <div className={classes.leftColumn}>
                                        <div className={classes.wrapper}>
                                            <Fade down delay={150} triggerOnce={true}>
                                                <Ecommerce
                                                    link={"./some-link"}
                                                    title={"Airy Tunic"}
                                                    price={"39.99"}
                                                    dark={this.props.dark ? true : false}
                                                >
                                                    {this.props.dark == true ?
                                                        <img
                                                            src={pictureDark}
                                                            alt=""
                                                        />
                                                        :
                                                        <img
                                                            src={picture}
                                                            alt=""
                                                        />
                                                    }
                                                </Ecommerce>
                                            </Fade>
                                            <Fade down delay={200} triggerOnce={true}>
                                                <Ecommerce
                                                    link={"./some-link"}
                                                    title={"Airy Tunic"}
                                                    price={"39.99"}
                                                    dark={this.props.dark ? true : false}
                                                >
                                                        <img
                                                            src={this.props.dark == true ? pictureDark : picture}
                                                            alt=""
                                                        />

                                                </Ecommerce>
                                            </Fade>
                                            <Fade down delay={250} triggerOnce={true}>
                                                <Ecommerce
                                                    link={"./some-link"}
                                                    title={"Airy Tunic"}
                                                    price={"39.99"}
                                                    dark={this.props.dark ? true : false}
                                                >
                                                    <img
                                                        src={this.props.dark == true ? pictureDark : picture}
                                                        alt=""
                                                    />
                                                </Ecommerce>
                                            </Fade>
                                            <Fade down delay={300} triggerOnce={true}>
                                                <Ecommerce
                                                    link={"./some-link"}
                                                    title={"Airy Tunic"}
                                                    price={"39.99"}
                                                    dark={this.props.dark ? true : false}
                                                >
                                                    <img
                                                        src={this.props.dark == true ? pictureDark : picture}
                                                        alt=""
                                                    />
                                                </Ecommerce>
                                            </Fade>
                                        </div>
                                    </div>

                                    <div className={classes.rightColumn}>
                                        <Fade down delay={400} triggerOnce={true}>
                                            <EcommerceCustom
                                                link={"./some-link"}
                                                title={"Airy Tunic"}
                                                price={"39.99"}
                                                stats="4,5"
                                                dark={this.props.dark ? true : false}
                                            >
                                                <img
                                                    src={this.props.dark == true ? pictureDark : picture}
                                                    alt=""
                                                />
                                            </EcommerceCustom>
                                        </Fade>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                </section>
            </div>
        )
    }
}

export default EcommerceLayoutsTypeTenth