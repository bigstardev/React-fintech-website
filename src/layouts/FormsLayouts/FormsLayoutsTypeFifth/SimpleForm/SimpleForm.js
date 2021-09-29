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
                        classes={`col-lg-4 col-md-4 ${classes.item} ${props.classes}`}
                        controlId="formGridFirstName"
                        name="name"
                        label="First Name"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="Bakhtiyar"
                    />
                    <CustomInput
                        classes={`col-lg-4 col-md-4 ${classes.item} ${props.classes}`}
                        controlId="formGridLastName"
                        name="name"
                        label="Last Name"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="Sattarov"
                    />
                    <CustomInput
                        classes={`col-lg-4 col-md-4 ${classes.item} ${props.classes}`}
                        controlId="formGridEmail"
                        name="name"
                        label="Email"
                        type="email"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="info@craftwork.design"
                    />
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} className={classes.dividerColumn}>
                        <Divider/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <CustomInput
                        classes={`col-md-4 ${classes.item} ${props.classes}`}
                        controlId="formGridCompanyName"
                        name="name"
                        label="Company Name"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="Craftwork"
                    />
                    <CustomInput
                        classes={`col-md-8 ${classes.item} ${props.classes}`}
                        controlId="formGridCompanyAdress"
                        name="name"
                        label="Address"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="Montreal, 559 Borer Forges, 987000"
                    />
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} lg="4" md="4" sm="4" controlId="formGridState" className="d-flex flex-column">
                        <Form.Label>State</Form.Label>
                        <Select placeholder="Choose State" defaultValue="first" className={`${(props.dark) ?  `dark ${classes.dark}` : ''}`} name="name">
                            <Option value="first">First</Option>
                            <Option value="second"><Email/>Second</Option>
                            <Option value="disabled" disabled>
                                Disabled
                            </Option>
                            <Option value="third">Third</Option>
                        </Select>
                    </Form.Group>

                    <CustomInput
                        classes={`col-lg-4 col-md-4 col-sm-4 ${classes.item} ${props.classes}`}
                        controlId="formGridCity"
                        name="name"
                        label="City"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="Montreal"
                    />

                    <CustomInput
                        classes={`col-lg-4 col-md-4 col-sm-4 ${classes.item} ${props.classes}`}
                        controlId="formGridZip"
                        name="name"
                        label="ZIP Code"
                        dark={(props.dark == true) ?  true : null}
                        placeholder="987000"
                    />

                </Form.Row>

                <Form.Row className={`d-flex align-items-center ${classes.bottomLevel}`}>
                    <Form.Group as={Col} lg="8" md="8" sm="8"  id="formGridCheckbox" style={{marginBottom : 0}}>
                        <Checkbox onChange={onChange}>My shipping and biling information is the same.</Checkbox>
                    </Form.Group>

                    <Form.Group as={Col} lg="4" md="4" sm="4" style={{marginBottom : 0}}>
                        <Button
                            type={"submit"}
                            classes={"primary large simple w-100"}
                            value={"Continue"}
                        />
                    </Form.Group>
                </Form.Row>
            </Form>
        </React.Fragment>
    )
}

export default SimpleForm