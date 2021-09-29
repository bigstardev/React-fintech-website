import React from "react";
import {Form, FormControl, InputGroup} from "react-bootstrap";
import {Col} from "reactstrap";
import Button from "../../../../components/Button/Button";
import 'antd/dist/antd.css';
import classes from "./SimpleForm.module.css"
import CustomInput from "../../../../components/CustomInput/CustomInput";

const SimpleForm = (props) => {
    return (
        <React.Fragment>
            <Form className={classes.form}>
                <Form.Row>
                    <CustomInput
                        classes={`col-lg-6 col-md-6  ${classes.p15} ${classes.item} ${props.classes}`}
                        controlId="FormInputName"
                        name="name"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="Username"
                        simple={true}
                    />
                    <CustomInput
                        classes={`col-lg-6 col-md-6  ${classes.p15} ${classes.item} ${props.classes}`}
                        controlId="FormInputUserEmail"
                        name="name"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="Email"
                        simple={true}
                        type="email"
                    />
                    <CustomInput
                        classes={`col-12 ${classes.p15} ${classes.item} ${props.classes}`}
                        size="big"
                        controlId="Textarea"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="Message"
                        textarea={true}
                        rows={5} />
                </Form.Row>

                <Form.Row>
                    <Col className={`col-lg-6 col-md-6  ${classes.p20}`}>
                        <Button
                            type={"submit"}
                            classes={"primary large simple w-100"}
                            value={"Send"}
                        />
                    </Col>
                </Form.Row>
            </Form>
        </React.Fragment>
    )
}

export default SimpleForm