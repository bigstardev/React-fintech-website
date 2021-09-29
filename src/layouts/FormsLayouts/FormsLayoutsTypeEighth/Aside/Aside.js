import React from "react";
import classes from  './Aside.module.css';
import {Col , Row} from "reactstrap";
import Badge from "../../../../components/Badges/Badges";
import {AppStore, PlayMarket} from "../../../../components/Icons/Icons";

const Aside = (props) => {
    return (
        <section className={classes.Aside}>
            <h3>{props.subtitle}</h3>
            <h1 className={classes.title}>{props.title}</h1>
            <p className={classes.description}>{props.description}</p>
            <Row className={classes.buttons}>
                <Col className={`col-auto pr-0 ${classes.col}`}>
                    <Badge
                        store={"app"}
                    >
                        <AppStore/>
                    </Badge>
                </Col>
                <Col className={`col-auto ${classes.col}`}>
                    <Badge>
                        <PlayMarket/>
                    </Badge>
                </Col>
            </Row>

            <div className={classes.logos}>
                {props.children}
            </div>
        </section>
    )
}

export default Aside