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
                    <Col className={`${classes.item} col-12`} >
                        <CustomInput
                            controlId="userEmail"
                            name="name"
                            simple={false}
                            leftIcon={true}
                            icon={<Email/>}
                            dark={(props.dark == true) ?  true : null}
                            type="email"
                            placeholder="Type your email"
                            size="big"
                        />
                    </Col>
                    <Col className="col-12">
                        <Button
                            type={"submit"}
                            classes={"primary large simple w-100"}
                            value={"Subscribe"}
                            size="big"
                        />
                    </Col>
                </Form.Row>
            </Form>
        </React.Fragment>
    )
}

export default SimpleForm