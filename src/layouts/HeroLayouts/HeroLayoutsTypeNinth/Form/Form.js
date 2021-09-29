import React from "react";
import {Form} from "react-bootstrap";
import classes from "./Form.module.css"

import {Col} from "reactstrap";
import Button from "../../../../components/Button/Button";
import CustomInput from "../../../../components/CustomInput/CustomInput";

const Forms = (props) => {
    return (
        <React.Fragment>
                <Form className={classes.form}>
                    <Form.Row className="align-items-center">
                        <CustomInput
                            classes={`col ${props.classes}`}
                            controlId="formGridEmail"
                            name="name"
                            type="email"
                            dark={(props.dark == true) ?  true : null}
                            placeholder="Type your e-mail"
                        />
                        <Col xs="auto">
                            <Button
                                type={"submit"}
                                classes={"primary large simple w-100"}
                                value={"Get Started"}
                            />
                        </Col>
                    </Form.Row>
                </Form>
        </React.Fragment>
    )
}

export default Forms