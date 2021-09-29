import React from "react";
import classes from './Aside.module.css';
import Divider from "../../../../components/Divider/Divider";
import { Row, Col, Container} from "reactstrap";
const Aside = (props) => {
    return (

        <section className={`${classes.aside}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={classes.wrapper}>

                <Row className={classes.header}>
                    <Col className={classes.col}>
                        <h2 className={classes.title}>Shopping Cart</h2>
                    </Col>
                </Row>

                {props.children}

                <Row className={classes.divider}>
                    <Col className={classes.col}>
                        <Divider/>
                    </Col>
                </Row>

                <Row className={classes.bottom}>
                    <Col className={classes.col}>
                        <p>Total</p>
                    </Col>
                    <Col className={classes.col}>
                        <p className={classes.total}>${props.total}</p>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Aside