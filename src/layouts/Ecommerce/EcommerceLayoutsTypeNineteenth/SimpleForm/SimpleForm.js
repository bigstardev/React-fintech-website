import React from "react";
import {Form, FormControl, InputGroup} from "react-bootstrap";
import {Col} from "reactstrap";
import classes from "./SimpleForm.module.css"
import Button from "../../../../components/Button/Button";
import Divider from "../../../../components/Divider/Divider";
import {Checkbox, Select} from "antd";
import {Email} from "../../../../components/Icons/Icons";
import CustomInput from "../../../../components/CustomInput/CustomInput";
const { Option } = Select;

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const SimpleForm = (props) => {
    return (
        <React.Fragment>
            <Form className={`${classes.form}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <Form.Row>
                    <CustomInput
                        classes={`col-lg-4 col-md-6 ${classes.item} ${props.classes}`}
                        controlId="formGridFirstName"
                        name="name"
                        size="big"
                        label="First Name"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="Bakhtiyar"
                    />
                    <CustomInput
                        classes={`col-lg-4 col-md-6 ${classes.item} ${props.classes}`}
                        controlId="formGridLastName"
                        name="lastname"
                        size="big"
                        label="Last Name"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="Sattarov"
                    />
                    <CustomInput
                        classes={`col-lg-4 col-md-6 ${classes.item} ${props.classes}`}
                        controlId="formGridPhone"
                        name="phone"
                        size="big"
                        label="Phone"
                        type="phone"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="+49 123 456 789"
                    />
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} className={classes.dividerColumn}>
                        <Divider/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} lg="4" md="6" controlId="formGridState" className="d-flex flex-column">
                        <Form.Label>State</Form.Label>
                        <Select placeholder="Choose State" defaultValue="first" className={`${(props.dark) ?  `dark ${classes.dark}` : ''} big`} name="name" >
                            <Option value="first">First</Option>
                            <Option value="second"><Email/>Second</Option>
                            <Option value="disabled" disabled>
                                Disabled
                            </Option>
                            <Option value="third">Third</Option>
                        </Select>
                    </Form.Group>

                    <CustomInput
                        classes={`col-lg-4 col-md-6 ${classes.item} ${props.classes}`}
                        controlId="formGridCity"
                        name="city"
                        size="big"
                        label="City"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="Montreal"
                    />

                    <CustomInput
                        classes={`col-lg-4 col-md-6 ${classes.item} ${props.classes}`}
                        controlId="formGridZip"
                        name="zip"
                        size="big"
                        label="ZIP Code"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="987000"
                    />

                </Form.Row>

                <Form.Row>
                    <CustomInput
                        classes={`col-lg-4 col-md-6 ${classes.item} ${props.classes}`}
                        controlId="formGridOffice"
                        name="office"
                        size="big"
                        label="Office"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="956"
                    />
                    <CustomInput
                        classes={`col-lg-4 col-md-6 ${classes.item} ${props.classes}`}
                        controlId="formGridCompanyAdress"
                        name="name"
                        size="big"
                        label="Street address"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="321 Boisbriand"
                    />
                </Form.Row>

                <Form.Row className={`d-flex align-items-center ${classes.bottomLevel}`}>
                   
                    <Form.Group as={Col} lg="4" md="6" style={{marginBottom : 0}}>
                        <Button
                            type={"submit"}
                            classes={"primary big simple w-100"}
                            value={"Save"}
                        />
                    </Form.Group>
                </Form.Row>
            </Form>
        </React.Fragment>
    )
}

export default SimpleForm