import React from "react";
import classes from "./VerticalModal.module.css"
import Modal from "react-bootstrap/Modal";
import ButtonSocial from "../../../../components/Button-Social/ButtonSocial";
import {Facebook, Google, Twitter} from "../../../../components/Icons/Icons";

const title = "Login to Method";
const description = "We're a community of product people here to geek out and discover new.";

const VerticalModal =(props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            className={`${classes.customModal}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}
            centered
        >
            <Modal.Body>
                <h3 className="text-center">{title}</h3>
                <p className={`text-center ${classes.description}`}>
                    {description}
                </p>

                <div className={classes.buttons}>
                    <ButtonSocial
                        href={"#"}
                        classes={"primary big primary  w-100"}
                        value={"Sign up via Facebook"}
                        icon={<Facebook fill="#ffffff"/>}
                    />
                    <ButtonSocial
                        href={"#"}
                        classes={"primary big primary  w-100"}
                        value={"Sign up via Gmail"}
                        icon={<Google fill="#ffffff"/>}
                    />
                    <ButtonSocial
                        href={"#"}
                        classes={"primary big secondary w-100"}
                        value={"Sign up via Twitter"}
                        icon={<Twitter  fill="#ffffff"/>}
                    />
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default VerticalModal