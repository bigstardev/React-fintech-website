import React from "react";
import { Row, Col} from "reactstrap";
import classes from "./PricingTypeSecond.module.css"
import Button from "../../../../components/Button/Button";

const PricingTypeSecond = (props) => {

    return (
        <div className={`${classes.price}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={classes.inner}>
                <h3 className="title text-left">{props.title}</h3>
                <p className={`normal-text ${classes.description}`}>{props.descr}</p>
                <Row className={classes.priceRow}>
                    <Col className={`d-flex align-items-center ${classes.col}`}>
                        <p className={`d-inline-block large-text ${classes.largeText}`}>{'$' + props.cost}</p>
                        <p className={`text-left d-inline-block small-text ${classes.smallText}`}>per user <br/>per month</p>
                    </Col>
                </Row>
                <Row className={classes.linksRow}>
                    <Col lg="12" md="12" className={classes.topLink}>
                        <Button
                            link={true}
                            href={props.firstLink}
                            classes={`primary big simple outline btn-block w-100 ${classes.button}`}
                            value={"Select Plan"}
                        />
                    </Col>
                    <Col lg="12" md="12" className={classes.col}>
                        <a href={props.secondLink} className={`btn-block ${classes.bottomLink}`}>Learn More</a>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default PricingTypeSecond