import React, {Component} from "react";

import 'antd/dist/antd.css';

import {Container, Col , Row} from "reactstrap";
import SimpleFormHotels from "./SimpleFormHotels/SimpleFormHotels";
import SimpleFormFlights from "./SimpleFormFlights/SimpleFormFlights";
import Tabs from "../../../components/Tabs/Tabs";
import classes from "./FormsLayoutsTypeThird.module.css"
import {Fade} from "react-awesome-reveal";

const title = "Search Flights and Hotels";

class FormsLayoutsTypeThird extends Component  {

    state = {
        activeCategory: 'hotels',
        category: [
            'Hotels', 'Flights'
        ]
    }

    onLinksClickHandler = (event) => {
        event.preventDefault();
        const currentValue = event.currentTarget.innerText.toLowerCase().replace(/ /g,"-");
        this.setState({activeCategory: currentValue });
    }

    render() {

        return (
            <React.Fragment>
                <section className={`section ${classes.form} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.wrapper}>
                        <Container>
                            <Row>
                                <Col lg="8" md="10" className={`mx-auto ${classes.header}`} >
                                    <Fade down triggerOnce={true}>
                                        <h1 className="text-center">{title}</h1>
                                    </Fade>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="4" md="6" sm="10" className={`mx-auto ${classes.tabs}`} >
                                    <Fade down delay={50} triggerOnce={true}>
                                        <Tabs
                                            array={this.state.category}
                                            onClick={this.onLinksClickHandler}
                                        />
                                    </Fade>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="8" md="10" className={`mx-auto ${classes.forms}`} >
                                    <Fade down delay={100}>
                                        {this.state.activeCategory === 'hotels' ?
                                            <SimpleFormHotels
                                                size="big"
                                                dark={this.props.dark ? true : false}
                                            /> :
                                            <SimpleFormFlights
                                                size="big"
                                                dark={this.props.dark ? true : false}
                                            />
                                        }
                                    </Fade>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </React.Fragment>
        )
    }

}
export default FormsLayoutsTypeThird