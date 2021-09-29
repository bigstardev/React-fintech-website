import React from "react";
import classes from "./SimpleForm.module.css"
import {Form, FormControl, InputGroup} from "react-bootstrap";
import {Col} from "reactstrap";
import {Email, EmailIcon, UserIcon} from "../../../../components/Icons/Icons";
import Button from "../../../../components/Button/Button";
import CustomInput from "../../../../components/CustomInput/CustomInput";

const SimpleForm = (props) => {
    return (
        <React.Fragment>
            <Form className={`${classes.form}`}>
                <Form.Row className="align-items-center">
                    <CustomInput
                        classes={`col-lg-6 ${classes.item} ${props.classes}`}
                        controlId="userEmail"
                        name="name"
                        simple={false}
                        leftIcon={true}
                        icon={<Email/>}
                        dark={(props.dark == true) ?  true : null}
                        type="email"
                        placeholder="Type your email"
                    />
                    <Col lg="6">
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