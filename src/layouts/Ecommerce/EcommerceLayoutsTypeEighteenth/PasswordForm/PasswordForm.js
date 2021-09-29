import React from "react";
import { Form } from "react-bootstrap";
import { Col } from "reactstrap";
import classes from "./PasswordForm.module.css"
import Button from "../../../../components/Button/Button";
import Divider from "../../../../components/Divider/Divider";
import CustomInput from "../../../../components/CustomInput/CustomInput";

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const PasswordForm = (props) => {
    return (
        <React.Fragment>

            <Form className={`${classes.form}  ${(props.dark) ? `dark ${classes.dark}` : ''}`}>
                <Form.Row>
                    <CustomInput
                        classes={`col-lg-4 col-md-6 ${classes.item} ${props.classes}`}
                        controlId="formGridPassword"
                        type="password"
                        name="password"
                        label="Password"
                        dark={(props.dark == true) ? true : null}
                    />
                    <CustomInput
                        classes={`col-lg-4 col-md-6 ${classes.item} ${props.classes}`}
                        controlId="formGridNewPassword"
                        type="password"
                        name="newPassword"
                        label="New Password"
                        dark={(props.dark == true) ? true : null}
                    />
                    <CustomInput
                        classes={`col-lg-4 col-md-6 ${classes.item} ${props.classes}`}
                        controlId="formGridConfirmPassword"
                        type="password"
                        name="confirmPassword"
                        label="Confirm"
                        type="phone"
                        dark={(props.dark == true) ? true : null}
                    />
                </Form.Row>

                <Form.Row className={`d-flex align-items-center ${classes.bottomLevel}`}>
                    <Form.Group as={Col} lg="4" md="4" sm="4" style={{ marginBottom: 0 }}>
                        <Button
                            type={"submit"}
                            classes={"primary large simple w-100"}
                            value={"Save"}
                        />
                    </Form.Group>
                </Form.Row>
            </Form>
        </React.Fragment>
    )
}

export default PasswordForm