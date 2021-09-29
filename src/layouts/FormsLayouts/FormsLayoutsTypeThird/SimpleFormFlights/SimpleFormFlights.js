import React from "react";

import {Form} from "react-bootstrap";
import Button from "../../../../components/Button/Button";
import {Select} from "antd";
import classes from "./SimpleFormFlights.module.css"
import CustomInput from "../../../../components/CustomInput/CustomInput";
const { Option } = Select;
const title = 'Choose your best flights';

const SimpleFormFlights = (props) => {
    return (
        <React.Fragment>
            <h3 className="text-center">{title}</h3>

            <Form className={`${classes.form} ${props.size}`}>
                    <Form.Row className={classes.topRow}>
                        <CustomInput
                            classes={`${classes.item} ${props.classes} ${props.size}`}
                            controlId="formGridFromFlights"
                            name="name"
                            dark={(props.dark == true) ?  true : null}
                            placeholder="From"
                        />
                        <CustomInput
                            classes={`${classes.item} ${props.classes} ${props.size}`}
                            controlId="formGridToFlights"
                            name="name"
                            dark={(props.dark == true) ?  true : null}
                            placeholder="To"
                        />
                    </Form.Row>

                    <Form.Row className={classes.bottomRow}>
                        <CustomInput
                            classes={`${classes.item} ${props.classes} ${props.size}`}
                            controlId="formGridCheckInFlights"
                            name="name"
                            dark={(props.dark == true) ?  true : null}
                            placeholder="Check In"
                            type="number"
                        />
                        <CustomInput
                            classes={`${classes.item} ${props.classes} ${props.size}`}
                            controlId="formGridCheckOutFlights"
                            name="name"
                            dark={(props.dark == true) ?  true : null}
                            placeholder="Check Out"
                            type="number"
                        />

                        <Form.Group controlId="formGridAdultFlights">
                            <Form.Label className="visually-hidden">Adult</Form.Label>
                            <Select placeholder="Adult" className={`w-100 ${props.size} ${(props.dark) ?  `dark ${classes.dark}` : ''}`} name="name">
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="4">4</Option>
                                <Option value="5">5</Option>
                                <Option value="6">6</Option>
                                <Option value="7">7</Option>
                                <Option value="8">8</Option>
                                <Option value="9">9</Option>
                                <Option value="10">10</Option>
                            </Select>
                        </Form.Group>

                        <Form.Group controlId="formGridKidsFlights" >
                            <Form.Label className="visually-hidden">Kids</Form.Label>
                            <Select placeholder="Kids"  className={`w-100 ${props.size} ${(props.dark) ?  `dark ${classes.dark}` : ''}`} name="name">
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="4">4</Option>
                                <Option value="5">5</Option>
                                <Option value="6">6</Option>
                                <Option value="7">7</Option>
                                <Option value="8">8</Option>
                                <Option value="9">9</Option>
                                <Option value="10">10</Option>
                            </Select>
                        </Form.Group>
                    </Form.Row>

                <Form.Row className={classes.buttonRow}>
                    <Form.Group>
                        <Button
                            type={"submit"}
                            classes={"primary big simple w-100"}
                            value={"Find My Tour"}
                        />
                    </Form.Group>
                </Form.Row>
            </Form>
        </React.Fragment>
    )
}

export default SimpleFormFlights