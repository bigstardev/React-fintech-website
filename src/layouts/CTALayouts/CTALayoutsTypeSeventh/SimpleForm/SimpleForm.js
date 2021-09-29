import React from "react";
import {Form, FormControl, InputGroup} from "react-bootstrap";
import {Col} from "reactstrap";
import {EmailIcon} from "../../../../components/Icons/Icons";
import Button from "../../../../components/Button/Button";
import classes from "./SimpleForm.module.css"
import CustomInput from "../../../../components/CustomInput/CustomInput";

const SimpleForm = (props) => {
    return (
        <React.Fragment>
                <Form.Row className="align-items-center">
                    <CustomInput
                        classes={`col-lg-6 col-md-6 col-sm-6 ${classes.col} ${props.classes}`}
                        controlId="FormInputEmail"
                        name="name"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="Your work email"
                        simple={false}
                        leftIcon={true}
                        type="email"
                        icon={<EmailIcon/>}
                    />
                    <Col lg="6" md="6" sm="6" className={classes.col}>
                        <Button
                            type={"submit"}
                            classes={`primary large simple w-100 text-center ${classes.button}`}
                            value={"Sign Up"}
                        />
                    </Col>
                </Form.Row>
        </React.Fragment>
    )
}

export default SimpleForm