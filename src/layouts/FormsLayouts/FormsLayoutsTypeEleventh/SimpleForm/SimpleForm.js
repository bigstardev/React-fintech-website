import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { Col } from "reactstrap";
import { EmailIcon, UserIcon, Lock } from "../../../../components/Icons/Icons";
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
                        controlId="FormInputUserPassword"
                        dark={(props.dark == true) ? true : null}
                        placeholder="Email"
                        name="name"
                        simple={false}
                        leftIcon={true}
                        icon={<EmailIcon />}
                        type="email"
                    />
                    <CustomInput
                        classes={`col-12 ${classes.p15} ${classes.item} ${props.classes}`}
                        controlId="FormInputUserPassword"
                        name="password"
                        dark={(props.dark == true) ? true : null}
                        placeholder="Password"
                        simple={false}
                        leftIcon={true}
                        icon={<Lock />}
                        type="password"
                    />
                </Form.Row>

                <Form.Row>
                    <Col className={classes.p20}>
                        <a href="#" className={`text-right ${classes.loginLink}`}>Lost your password?</a>
                    </Col>
                </Form.Row>

                <Form.Row>
                    <Col className={classes.p20}>
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