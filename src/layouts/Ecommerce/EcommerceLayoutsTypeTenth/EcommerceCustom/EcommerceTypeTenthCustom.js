import React from "react";
import { Row, Col} from "reactstrap";
import SmallBadge from "../../../../components/SmallBadge/SmallBadge";
import SimpleRating from "../../../../components/SimpleRating/SimpleRating";
import classes from "./EcommerceTypeTenthCustom.module.css"

const EcommerceTypeTenthCustom = (props) => {

    return (
        <div className={`${classes.ecommerce}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={classes.wrapper}>
                <Row className={classes.topLevel}>
                    <Col className="col-auto">
                        <SmallBadge>
                            sale - 50%
                        </SmallBadge >
                    </Col>

                    <Col className="col-auto">
                        <SimpleRating
                            dark={props.dark ? true : false}
                            value={props.stats}
                        />
                    </Col>
                </Row>

                <a
                    href={props.link}
                    className={classes.image}>
                    {props.children}
                </a>
                <a href={props.link} className={classes.link}>
                  <h3 className={classes.title}>{props.title}</h3>
                </a>

                <p className={classes.price}>${props.price}</p>
            </div>
        </div>
    )
}

export default EcommerceTypeTenthCustom