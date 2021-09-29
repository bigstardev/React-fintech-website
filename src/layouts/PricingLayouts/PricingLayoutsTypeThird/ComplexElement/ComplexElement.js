import React from "react";
import classes from  "./ComplexElement.module.css"
import {Col, Row} from "reactstrap";

const ComplexElement = (props) => {
    return (
        <div className={`${classes.complex}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={classes.wrapper}>
                <Row>
                    <Col lg="6" md="6" className={classes.item}>
                        {props.left}
                    </Col>
                    <Col lg="6" md="6" className={classes.item}>
                        {props.right}
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ComplexElement