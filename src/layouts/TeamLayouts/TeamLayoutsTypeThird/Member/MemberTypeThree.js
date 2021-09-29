import React from "react";
import classes from "./MemberTypeThree.module.css"

import {Col, Row} from "reactstrap";
import {RightArrow} from "../../../../components/Icons/Icons";


const MemberTypeThree = (props) => {

    return (
        <div className={`${classes.member} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <a href={props.link} className={classes.link}>

            {props.children}
                <header>
                    <Row>
                        <Col className={`col-auto ${classes.col}`}>
                            <h3 className="text-left">{props.person}</h3>
                        </Col>
                        <Col className={`col-auto ml-auto ${classes.col}`}>
                            <RightArrow/>
                        </Col>
                    </Row>
                </header>
                <Row>
                    <Col className={`col-auto ${classes.col}`}>
                        <p className={`normal-text text-left ${classes.description}`}>{props.post}</p>
                    </Col>
                </Row>
             </a>
        </div>
    )
}

export default MemberTypeThree