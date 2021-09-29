import React from "react";
import {Form, FormControl, InputGroup} from "react-bootstrap";
import {EmailIcon, UserIcon} from "../../../../components/Icons/Icons";
import Button from "../../../../components/Button/Button";
import CustomInput from "../../../../components/CustomInput/CustomInput";

import classes from "./SimpleForm.module.css"

const SimpleForm = (props) => {
    return (
            <Form>
                <Form.Row className={classes.wrapper}>
                    <div>
                        <CustomInput
                            classes={`${classes.item} ${props.classes}`}
                            controlId="FormInputEmail"
                            name="name"
                            dark={(props.dark == true) ?  true : null}
                            placeholder="Type your e-mail"
                            simple={false}
                            leftIcon={true}
                            type="email"
                            icon={<EmailIcon/>}
                        />

                    </div>
                    <div>
                        <CustomInput
                            classes={`${classes.item} ${props.classes}`}
                            controlId="FormInputName"
                            name="name"
                            dark={(props.dark == true) ?  true : null}
                            placeholder="Username"
                            simple={false}
                            leftIcon={true}
                            icon={<UserIcon/>}
                        />
                    </div>
                    <div>
                        <Button
                            type={"submit"}
                            classes={"primary large simple w-100"}
                            value={"Sign Up"}
                        />
                    </div>
                </Form.Row>
            </Form>
    )
}

export default SimpleForm