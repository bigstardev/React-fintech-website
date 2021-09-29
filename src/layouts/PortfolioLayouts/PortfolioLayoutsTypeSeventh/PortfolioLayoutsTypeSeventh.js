import { Row, Col, Container} from "reactstrap";
import React, {Component} from "react";

import Portfolio from "./Portfolio/PortfolioTypeSeventh";
import placeholder from "../../../img/placeholder-gray.png";

import Slider from "./Slider/Slider";
import classes from "./PortfolioLayoutsTypeSeventh.module.css"
import placeholderDark from "../../../img/placeholder-gray-dark.png";

class PortfolioLayoutsTypeSeventh extends Component {

    state = {
        projects: [
            {
                title: 'Method Wireframe Kit 1.0',
                id: 1,
                description: 'Change only three colors in pallete and get custom style that you need. The same thing with fonts, here are five text styles which you can change in a few clicks.',
                picture: null,
                link: "/some-link"
            },
            {
                title: 'Method Wireframe Kit 2.0',
                id: 2,
                description: 'Change only three colors in pallete and get custom style that you need. The same thing with fonts, here are five text styles which you can change in a few clicks.',
                picture: null,
                link: "/some-link"
            },
            {
                title: 'Method Wireframe Kit 3.0',
                id: 3,
                description: 'Change only three colors in pallete and get custom style that you need. The same thing with fonts, here are five text styles which you can change in a few clicks.',
                picture: null,
                link: "/some-link"
            },
        ]
    }

    renderCards () {
        const card = this.state.projects;
        const listItems = card.map((item, index) => {
            return (
                <div key={index}>
                    <Portfolio
                        title={item.title}
                        descr={item.description}
                        link={item.link}
                    >
                        {item.picture ? <img src={item.picture} width="920" height="500" alt=""/>
                            : <img src={this.props.dark ? placeholderDark : placeholder} width="920" height="500" alt=""/>
                        }
                    </Portfolio>
                </div>
            )
        });
        return (
            <Slider
                array={listItems}
            />
        );
    }


    render() {

        return (

            <React.Fragment>
                <section className={`section  ${classes.portfolio} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container className={classes.portfolioContainer}>
                            <Row>
                                <Col className="p-0">
                                    {this.renderCards()}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default PortfolioLayoutsTypeSeventh;