import React from "react";

import {Form} from "react-bootstrap";
import {Col} from "reactstrap";

import Button from "../../../../components/Button/Button";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import classes from "./SimpleForm.module.css"

const SimpleForm = (props) => {
    return (
        <React.Fragment>
            <Form className={`${classes.form}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <Form.Row>
                        <CustomInput
                            classes={`col-lg-7 col-md-7 ${classes.item} ${props.classes}`}
                            controlId="formGridEmail"
                            label="Newsletter"
                            type="email"
                            dark={(props.dark == true) ?  true : null}
                            placeholder="Type your e-mail"
                        />

                        <Form.Group as={Col} lg="5" md="5" className={`d-flex align-items-end ${classes.item}`}>
                            <Button
                                type={"submit"}
                                classes={"primary big simple w-100"}
                                value={"Subscribe"}
                            />
                        </Form.Group>
                    </Form.Row>
                </Form>
        </React.Fragment>
    )
}

export default SimpleForm