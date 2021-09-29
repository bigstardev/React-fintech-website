import React from "react";
import {Form} from "react-bootstrap";
import {Col} from "reactstrap";
import {EmailIcon, Phone} from "../../../../components/Icons/Icons";
import Button from "../../../../components/Button/Button";
import classes from "./SimpleForm.module.css"
import CustomInput from "../../../../components/CustomInput/CustomInput";

const SimpleForm = (props) => {
    return (
        <React.Fragment>
            <Form className={classes.forms}>
                <Form.Row className="align-items-center">
                    <CustomInput
                        classes={`col-lg-4 col-md-4 ${classes.item} ${props.classes}`}
                        controlId="FormInputUserEmail"
                        name="name"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="Type your e-mail"
                        simple={false}
                        leftIcon={true}
                        icon={<EmailIcon/>}
                        type="email"
                    />

                    <CustomInput
                        classes={`col-lg-4 col-md-4 ${classes.item} ${props.classes}`}
                        controlId="FormInputUserPhone"
                        name="name"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="Your phone number"
                        simple={false}
                        leftIcon={true}
                        icon={ <Phone/>}
                        type="phone"
                    />

                    <Col lg="4" md="4">
                        <Button
                            type={"submit"}
                            classes={"primary large simple w-100"}
                            value={"Subscribe"}
                        />
                    </Col>
                </Form.Row>
            </Form>
        </React.Fragment>
    )
}

export default SimpleForm