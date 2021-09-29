import React from "react";
import {Form} from "react-bootstrap";
import classes from "./Form.module.css"

import {Col} from "reactstrap";
import Button from "../../../../components/Button/Button";
import {SimpleLeftArrow } from "../../../../components/Icons/Icons";
import CustomInput from "../../../../components/CustomInput/CustomInput";

const Forms = (props) => {
    return (
        <React.Fragment>
                <Form className={classes.form}>
                    <Form.Row className="align-items-center">
                        <CustomInput
                            classes={`col ${classes.item} ${props.classes}`}
                            controlId="FormInputName"
                            name="name"
                            dark={(props.dark == true) ?  true : null}
                            placeholder="Type your e-mail"
                            type="email"

                        />
                        <Col xs="auto">
                            <Button
                                type={"submit"}
                                classes={"primary large simple right-icon"}
                                value={"Get Started"}
                                rightIcon={<SimpleLeftArrow fill="#ffffff"/>}
                            />
                        </Col>
                    </Form.Row>
                </Form>
        </React.Fragment>
    )
}

export default Forms
