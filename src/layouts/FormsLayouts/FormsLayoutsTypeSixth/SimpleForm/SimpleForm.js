import React from "react";
import {Form, FormControl, InputGroup} from "react-bootstrap";
import {Col} from "reactstrap";
import {EmailIcon, UserIcon, Lock} from "../../../../components/Icons/Icons";
import Button from "../../../../components/Button/Button";
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';
import classes from "./SimpleForm.module.css"
import CustomInput from "../../../../components/CustomInput/CustomInput";

const SimpleForm = (props) => {
    return (
        <React.Fragment>
            <Form className={classes.form}>
                <Form.Row>
                    <CustomInput
                        classes={`col-12 ${classes.p15} ${classes.item} ${props.classes}`}
                        controlId="FormInputName"
                        name="name"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="Username"
                        simple={false}
                        leftIcon={true}
                        icon={<UserIcon/>}
                    />
                    <CustomInput
                        classes={`col-12 ${classes.p15} ${classes.item} ${props.classes}`}
                        controlId="FormInputUserPassword"
                        name="name"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="Email"
                        simple={false}
                        leftIcon={true}
                        icon={<EmailIcon/>}
                        type="email"
                    />
                </Form.Row>
                <Form.Row>
                    <CustomInput
                        classes={`col-lg-6 col-md-6 col-sm-6 ${classes.p15} ${classes.item} ${props.classes}`}
                        controlId="FormInputUserPassword"
                        name="name"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="Password"
                        simple={false}
                        leftIcon={true}
                        icon={<Lock/>}
                        type="password"
                    />
                    <CustomInput
                        classes={`col-lg-6 col-md-6 col-sm-6 ${classes.p15} ${classes.item} ${props.classes}`}
                        controlId="FormInputUserPasswordConfirm"
                        name="name"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="Confirm"
                        simple={false}
                        leftIcon={true}
                        icon={<Lock/>}
                        type="password"
                    />
                </Form.Row>
                <Form.Row>
                    <Col className={classes.p20}>
                        <Checkbox>By creating an account, you agree to the Terms and Conditions and Privacy Policy</Checkbox>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col className={`col-12 ${classes.p20}`}>
                        <Button
                            type={"submit"}
                            classes={"primary large simple w-100"}
                            value={"Create an account"}
                        />
                    </Col>
                </Form.Row>
            </Form>
        </React.Fragment>
    )
}

export default SimpleForm