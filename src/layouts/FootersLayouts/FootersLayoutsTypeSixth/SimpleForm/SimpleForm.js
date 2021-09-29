import React from "react";
import {Form,} from "react-bootstrap";
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
                            classes={`col-8 ${classes.item} ${props.classes}`}
                            controlId="formGridEmail"
                            type="email"
                            name="name"
                            dark={(props.dark == true) ?  true : null}
                            placeholder="Type your e-mail"
                        />

                        <Form.Group as={Col} lg="4" md="4" sm="4" xs="4" className="d-flex align-items-end ">
                            <Button
                                type={"submit"}
                                classes={"primary big simple w-100"}
                                value={"Send"}
                            />
                        </Form.Group>
                    </Form.Row>
                </Form>
        </React.Fragment>
    )
}

export default SimpleForm