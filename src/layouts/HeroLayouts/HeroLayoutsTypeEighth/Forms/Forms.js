import React from "react";
import {EmailIcon, UserIcon} from "../../../../components/Icons/Icons";
import {Form} from "react-bootstrap";
import {Col} from "reactstrap";
import Button from "../../../../components/Button/Button";
import classes from "./Forms.module.css"
import CustomInput from "../../../../components/CustomInput/CustomInput";

const Forms = (props) => {

    return (
        <React.Fragment>
                <Form classes={classes.form}>
                    <Form.Row className="align-items-center">
                        <CustomInput
                            classes={`col-lg-4 ${classes.item} ${props.classes}`}
                            controlId="FormInputEmail"
                            name="name"
                            type="email"
                            dark={(props.dark == true) ?  true : null}
                            placeholder="Type your e-mail"
                            simple={false}
                            leftIcon={true}
                            icon={<EmailIcon/>}
                        />
                        <CustomInput
                            classes={`col-lg-4 ${classes.item} ${props.classes}`}
                            controlId="FormInputName"
                            name="name"
                            dark={(props.dark == true) ?  true : null}
                            placeholder="Username"
                            simple={false}
                            leftIcon={true}
                            icon={<UserIcon/>}
                        />
                        <Col  lg={4}>
                            <Button
                                type={"submit"}
                                classes={`primary large simple w-100 ${classes.item}`}
                                value={"Sign Up"}
                            />
                        </Col>
                    </Form.Row>
                </Form>
        </React.Fragment>
    )
}

export default Forms