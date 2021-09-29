import React from "react";
import { Row, Col} from "reactstrap";
import classes from './PortfolioTypeSixth.module.css';


const PortfolioTypeSixth = (props) => {

    return (
        <div className={classes.portfolio}>
            <Row>
                <Col lg="12">
                    <a href={props.link} className={classes.link}>
                        {props.children}
                    </a>
                </Col>
                <Col lg="12" md="12" className={`mx-auto text-left content-column ${classes.contentColumn}`}>
                    <a href={props.link} className={classes.link}>
                        <h3 className={`title ${classes.title} text-left`}>{props.title}</h3>
                    </a>
                    <p className={`normal-text ${classes.description}`}>{props.descr}</p>
                </Col>
            </Row>
        </div>
    )
}

export default PortfolioTypeSixth