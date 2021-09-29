import React from "react";
import { Form } from "react-bootstrap";
import { Col } from "reactstrap";
import classes from "./SimpleForm.module.css"
import Button from "../../../../components/Button/Button";
import Divider from "../../../../components/Divider/Divider";
import CustomInput from "../../../../components/CustomInput/CustomInput";

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const SimpleForm = (props) => {
    return (
        <React.Fragment>
            <Form className={`${classes.form}  ${(props.dark) ? `dark ${classes.dark}` : ''}`}>
                <Form.Row>
                    <CustomInput
                        classes={`col-lg-4 col-md-6 ${classes.item} ${props.classes}`}
                        controlId="formGridFirstName"
                        name="name"
                        label="First Name"
                        dark={(props.dark == true) ? true : null}
                        placeholder="Bakhtiyar"
                    />
                    <CustomInput
                        classes={`col-lg-4 col-md-6 ${classes.item} ${props.classes}`}
                        controlId="formGridLastName"
                        name="lastname"
                        label="Last Name"
                        dark={(props.dark == true) ? true : null}
                        placeholder="Sattarov"
                    />
                    <CustomInput
                        classes={`col-lg-4 col-md-6 ${classes.item} ${props.classes}`}
                        controlId="formGridPhone"
                        name="phone"
                        label="Phone"
                        type="phone"
                        dark={(props.dark == true) ? true : null}
                        placeholder="+49 123 456 789"
                    />
                </Form.Row>

                <Form.Row>
                    <CustomInput
                        classes={`col-lg-4 col-md-6 ${classes.item} ${props.classes}`}
                        controlId="formGridEmail"
                        name="name"
                        label="Email"
                        type="email"
                        dark={(props.dark == true) ? true : null}
                        placeholder="info@craftwork.design"
                    />
                    <CustomInput
                        classes={`col-lg-4 col-md-6 ${classes.item} ${props.classes}`}
                        controlId="formGridDateOfBirth"
                        name="dateOfBirth"
                        label="Date of Birdth"
                        dark={(props.dark == true) ? true : null}
                        placeholder="14.03.1990"
                    />
                </Form.Row>

                <Form.Row className={`d-flex align-items-center ${classes.bottomLevel}`}>
                    <Form.Group as={Col} lg="4" md="4" sm="4" style={{ marginBottom: 0 }}>
                        <Button
                            type={"submit"}
                            classes={"primary large simple w-100"}
                            value={"Save"}
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} className={classes.dividerColumn}>
                        <Divider />
                    </Form.Group>
                </Form.Row>

            </Form>
        </React.Fragment>
    )
}

export default SimpleForm