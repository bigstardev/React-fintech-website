import React from "react";
import {Form} from "react-bootstrap";
import {Col} from "reactstrap";
import {EmailIcon, Phone, UserIcon} from "../../../../components/Icons/Icons";
import Button from "../../../../components/Button/Button";
import classes from "./SimpleForm.module.css"
import CustomInput from "../../../../components/CustomInput/CustomInput";
import 'antd/dist/antd.css';

const buttonText = "Get Started"

const SimpleForm = (props) => {

    return (
        <React.Fragment>
            <Form className={classes.form} action="https://echo.htmlacademy.ru" method="post">
                <Form.Row className="align-items-center">
                    <CustomInput
                        classes={`col-lg-3 col-md-12 ${classes.item} ${props.classes}`}
                        controlId="FormInputName"
                        dark={(props.dark == true) ?  true : null}
                        name="name"
                        placeholder="Username"
                        simple={false}
                        leftIcon={true}
                        icon={<UserIcon/>}
                    />
                    <CustomInput
                        classes={`col-lg-3 col-md-12 ${classes.item} ${props.classes}`}
                        controlId="FormInputEmail"
                        type="email"
                        name="name"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="E-mail"
                        simple={false}
                        leftIcon={true}
                        icon={<EmailIcon/>}
                    />
                    <CustomInput
                        classes={`col-lg-3 col-md-12 ${classes.item} ${props.classes}`}
                        controlId="FormInputPhone"
                        type="phone"
                        name="name"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="Phone"
                        simple={false}
                        leftIcon={true}
                        icon={<Phone/>}
                    />

                    <Col lg="3" md="12">
                        <Button
                            type={"submit"}
                            classes={"primary large simple w-100"}
                            value={buttonText}
                        />
                    </Col>
                </Form.Row>
            </Form>
        </React.Fragment>
    )
}

export default SimpleForm